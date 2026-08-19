'use client';

import { useEffect } from 'react';
import { initHeaderDatetime } from '@/lib/effects/headerDatetime';
import { initPurchaseButtonSpotlight } from '@/lib/effects/purchaseButtonSpotlight';

const META_PURCHASE_PARAMS = {
  content_type: 'product',
  content_ids: ['talky'],
  content_name: 'TalkY',
  value: 24.5,
  currency: 'USD',
  num_items: 1,
  contents: [{ id: 'talky', quantity: 1, item_price: 24.5 }],
};

/**
 * Client-only visual wiring for /thanks88 (datetime + purchase button spotlight).
 * The download link itself is now computed server-side (see `app/thanks88/page.tsx`)
 * against the verified Stripe session, so no client-side link patching is needed here.
 */
export function ThanksEffects({ purchased = false, orderId }: { purchased?: boolean; orderId?: string }) {
  useEffect(() => {
    initHeaderDatetime();
    initPurchaseButtonSpotlight();
  }, []);

  useEffect(() => {
    if (!purchased || !orderId) return;

    try {
      window.fbq?.('track', 'Purchase', { ...META_PURCHASE_PARAMS, order_id: orderId }, { eventID: `purchase_${orderId}` });
    } catch {
      // Analytics must never break the download page.
    }
  }, [purchased, orderId]);

  return null;
}
