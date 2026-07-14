import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import Stripe from 'stripe';
import { findPaidSessionForCustomer, getStripeClient, getStripePriceId } from '@/lib/stripe/checkout';

const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const stripe = getStripeClient();
const stripePriceId = getStripePriceId();
const customerCookieName = 'stripe_customer_id';
const customerCookieMaxAge = 60 * 60 * 24 * 365;

function isMissingCustomerError(error: unknown) {
  if (!(error instanceof Stripe.errors.StripeInvalidRequestError)) {
    return false;
  }

  return (
    error.code === 'resource_missing' &&
    (error.param === 'customer' || error.message.toLowerCase().includes('no such customer'))
  );
}

function withCustomerCookie(response: NextResponse, customerId: string) {
  response.cookies.set(customerCookieName, customerId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: customerCookieMaxAge,
  });
}

export async function POST() {
  if (!stripe || !stripePriceId || !appUrl) {
    return NextResponse.json({ error: 'Stripe is not configured on the server' }, { status: 500 });
  }

  try {
    const cookieStore = await cookies();
    let customerId = cookieStore.get(customerCookieName)?.value;

    if (!customerId) {
      const customer = await stripe.customers.create();
      customerId = customer.id;
    }

    const existingSession = await findPaidSessionForCustomer(customerId);
    if (!existingSession.ok) {
      console.warn(
        '[CheckoutSession] Failed to check existing paid sessions, creating new checkout session',
        JSON.stringify({ customerId, reason: existingSession.reason }),
      );

      if (existingSession.reason.toLowerCase().includes('no such customer')) {
        const customer = await stripe.customers.create();
        customerId = customer.id;
      }
    }

    if (existingSession.ok && existingSession.sessionId) {
      const response = NextResponse.json({
        url: `${appUrl}/thanks88?session_id=${encodeURIComponent(existingSession.sessionId)}`,
      });
      withCustomerCookie(response, customerId);
      return response;
    }

    let session: Stripe.Checkout.Session;

    try {
      session = await stripe.checkout.sessions.create({
        mode: 'payment',
        customer: customerId,
        line_items: [{ price: stripePriceId, quantity: 1 }],
        success_url: `${appUrl}/thanks88?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${appUrl}/payment-failed`,
      });
    } catch (error) {
      if (!isMissingCustomerError(error)) {
        throw error;
      }

      const customer = await stripe.customers.create();
      customerId = customer.id;
      session = await stripe.checkout.sessions.create({
        mode: 'payment',
        customer: customerId,
        line_items: [{ price: stripePriceId, quantity: 1 }],
        success_url: `${appUrl}/thanks88?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${appUrl}/payment-failed`,
      });
    }

    if (!session.url) {
      return NextResponse.json({ error: 'Stripe did not return a checkout URL' }, { status: 500 });
    }

    const response = NextResponse.json({ url: session.url });
    withCustomerCookie(response, customerId);
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to create checkout session';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
