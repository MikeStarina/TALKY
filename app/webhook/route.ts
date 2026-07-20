import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripeClient, getStripePriceId } from '@/lib/stripe/checkout';
import { trackTikTokEvent } from '@/lib/tiktok/events';

export const runtime = 'nodejs';

const stripe = getStripeClient();
const stripePriceId = getStripePriceId();
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

type LogLevel = 'info' | 'warn' | 'error';

interface WebhookLogPayload {
  eventId?: string;
  eventType?: string;
  sessionId?: string;
  customerId?: string | Stripe.Customer | Stripe.DeletedCustomer | null;
  customerEmail?: string | null;
  paymentStatus?: Stripe.Checkout.Session['payment_status'] | null;
  priceMatched?: boolean;
  message?: string;
}

async function isExpectedPrice(sessionId: string) {
  if (!stripe || !stripePriceId) {
    return false;
  }

  const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, { limit: 100 });
  return lineItems.data.some((item) => item.price?.id === stripePriceId);
}

function extractSessionMeta(event: Stripe.Event, session: Stripe.Checkout.Session): WebhookLogPayload {
  return {
    eventId: event.id,
    eventType: event.type,
    sessionId: session.id,
    customerId: session.customer,
    customerEmail: session.customer_details?.email,
    paymentStatus: session.payment_status,
  };
}

function logWebhook(level: LogLevel, resultCode: string, payload: WebhookLogPayload) {
  const logger = level === 'error' ? console.error : level === 'warn' ? console.warn : console.info;
  logger('[StripeWebhook]', JSON.stringify({ resultCode, ...payload }));
}

function trackCompletePayment(session: Stripe.Checkout.Session) {
  void trackTikTokEvent({
    event: 'CompletePayment',
    eventId: `purchase_${session.id}`,
    email: session.customer_details?.email,
    orderId: session.id,
    url: appUrl ? `${appUrl}/thanks88` : null,
  });
}

export async function POST(request: NextRequest) {
  if (!stripe || !stripePriceId || !stripeWebhookSecret) {
    logWebhook('warn', 'webhook_not_configured', {
      message: 'Stripe webhook is not configured on the server',
    });
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing Stripe signature header' }, { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, stripeWebhookSecret);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid Stripe webhook signature';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const meta = extractSessionMeta(event, session);
        const priceMatched = await isExpectedPrice(session.id);

        if (!priceMatched) {
          logWebhook('warn', 'ignored_unexpected_price', { ...meta, priceMatched });
          break;
        }

        if (session.payment_status === 'paid') {
          logWebhook('info', 'payment_confirmed', { ...meta, priceMatched });
          trackCompletePayment(session);
        } else {
          logWebhook('info', 'checkout_completed_pending_payment', { ...meta, priceMatched });
        }
        break;
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session;
        const meta = extractSessionMeta(event, session);
        const priceMatched = await isExpectedPrice(session.id);

        if (!priceMatched) {
          logWebhook('warn', 'ignored_unexpected_price', { ...meta, priceMatched });
          break;
        }

        logWebhook('info', 'payment_confirmed_async', { ...meta, priceMatched });
        trackCompletePayment(session);
        break;
      }

      case 'checkout.session.async_payment_failed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const meta = extractSessionMeta(event, session);
        logWebhook('warn', 'payment_failed_async', meta);
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        const meta = extractSessionMeta(event, session);
        logWebhook('info', 'checkout_expired', meta);
        break;
      }

      default: {
        logWebhook('info', 'ignored_unhandled_event', {
          eventId: event.id,
          eventType: event.type,
        });
      }
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown webhook processing error';
    logWebhook('error', 'webhook_processing_error', {
      eventId: event.id,
      eventType: event.type,
      message,
    });
  }

  return NextResponse.json({ received: true });
}
