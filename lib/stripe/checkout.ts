import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePriceId = process.env.STRIPE_PRICE_ID;

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

export function isStripeConfigured() {
  return Boolean(stripe && stripePriceId);
}

export function getStripeClient() {
  return stripe;
}

export function getStripePriceId() {
  return stripePriceId;
}

function hasExpectedPrice(lineItems: Stripe.ApiList<Stripe.LineItem>) {
  return lineItems.data.some((item) => item.price?.id === stripePriceId);
}

export async function findPaidSessionForCustomer(customerId: string) {
  if (!stripe || !stripePriceId) {
    return { ok: false, reason: 'Stripe is not configured on the server' as const };
  }

  if (!customerId) {
    return { ok: false, reason: 'Missing Stripe customer id' as const };
  }

  try {
    const sessions = await stripe.checkout.sessions.list({
      customer: customerId,
      limit: 100,
    });

    for (const session of sessions.data) {
      if (session.payment_status !== 'paid') continue;
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 });
      if (hasExpectedPrice(lineItems)) {
        return { ok: true, sessionId: session.id } as const;
      }
    }

    return { ok: true, sessionId: null } as const;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not list customer sessions';
    return { ok: false, reason: message } as const;
  }
}

export async function verifyPaidCheckoutSession(sessionId: string, expectedCustomerId?: string) {
  if (!stripe || !stripePriceId) {
    return { ok: false, reason: 'Stripe is not configured on the server' as const };
  }

  if (!sessionId) {
    return { ok: false, reason: 'Missing checkout session id' as const };
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (expectedCustomerId && session.customer !== expectedCustomerId) {
      return { ok: false, reason: 'Session does not belong to this customer' as const };
    }

    if (session.payment_status !== 'paid') {
      return { ok: false, reason: 'Payment is not completed' as const };
    }

    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, { limit: 100 });
    const isExpectedPrice = hasExpectedPrice(lineItems);

    if (!isExpectedPrice) {
      return { ok: false, reason: 'Session does not contain expected product price' as const };
    }

    return { ok: true, session } as const;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not verify checkout session';
    return { ok: false, reason: message } as const;
  }
}
