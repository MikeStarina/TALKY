'use client';

import { useEffect } from 'react';
import { initHeaderDatetime } from '@/lib/effects/headerDatetime';
import { initPurchaseButtonSpotlight } from '@/lib/effects/purchaseButtonSpotlight';

/** Client-only wiring for /payment-failed, mirrors the previous `src/paymentFailed.ts` entry. */
export function PaymentFailedEffects() {
  useEffect(() => {
    initHeaderDatetime();
    initPurchaseButtonSpotlight();
  }, []);

  return null;
}
