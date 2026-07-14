'use client';

import { useEffect } from 'react';
import { initHeaderDatetime } from '@/lib/effects/headerDatetime';
import { initPurchaseButtonSpotlight } from '@/lib/effects/purchaseButtonSpotlight';

/**
 * Client-only visual wiring for /thanks88 (datetime + purchase button spotlight).
 * The download link itself is now computed server-side (see `app/thanks88/page.tsx`)
 * against the verified Stripe session, so no client-side link patching is needed here.
 */
export function ThanksEffects() {
  useEffect(() => {
    initHeaderDatetime();
    initPurchaseButtonSpotlight();
  }, []);

  return null;
}
