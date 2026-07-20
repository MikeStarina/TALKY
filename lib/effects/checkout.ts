/** Stripe Checkout: POST to the Next.js API route (`/api/checkout/session`). */

declare global {
  interface Window {
    ttq?: {
      track: (
        event: string,
        params?: Record<string, unknown>,
        options?: { event_id?: string },
      ) => void;
    };
  }
}

const INITIATE_CHECKOUT_PARAMS = {
  content_type: 'product',
  content_id: 'talky',
  content_name: 'TalkY',
  value: 24.5,
  currency: 'USD',
  contents: [
    {
      content_id: 'talky',
      content_name: 'TalkY',
      content_type: 'product',
      quantity: 1,
      price: 24.5,
    },
  ],
};

function trackInitiateCheckoutPixel(eventId?: string) {
  try {
    window.ttq?.track(
      'InitiateCheckout',
      INITIATE_CHECKOUT_PARAMS,
      eventId ? { event_id: eventId } : undefined,
    );
  } catch {
    // Analytics must never block checkout.
  }
}

async function startCheckout(): Promise<void> {
  let res: Response;
  try {
    res = await fetch('/api/checkout/session', {
      method: 'POST',
      credentials: 'include',
    });
  } catch {
    window.alert('Network error. Check your connection and try again.');
    return;
  }

  let data: { url?: string; error?: string; eventId?: string };
  try {
    data = (await res.json()) as { url?: string; error?: string; eventId?: string };
  } catch {
    window.alert('Unexpected response from server.');
    return;
  }

  if (!res.ok) {
    window.alert(data.error ?? 'Checkout could not be started.');
    return;
  }
  if (data.url) {
    trackInitiateCheckoutPixel(data.eventId);
    window.location.assign(data.url);
    return;
  }
  window.alert('Checkout URL missing.');
}

export function initCheckoutButtons(): void {
  // Clicks on the glow (`.purchaseButton__spotlight*`) hit those divs, not the inner `<button>`.
  // Listen on the whole layout wrapper in capture phase so one click works anywhere in the pill.
  const wrapperIds = ['heroScreenPurchaseButton', 'pricingScreenPurchaseButton'];
  for (const id of wrapperIds) {
    const el = document.getElementById(id);
    el?.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        void startCheckout();
      },
      true,
    );
  }
}
