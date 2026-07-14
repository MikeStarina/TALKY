'use client';

import { useEffect } from 'react';
import { initCheckoutButtons } from '@/lib/effects/checkout';
import { initFeaturesScreenTeleprompter } from '@/lib/effects/featuresScreenTeleprompter';
import { initHeaderDatetime } from '@/lib/effects/headerDatetime';
import {
  initHeroWaterfallMobileSourceSwap,
  initHeroWaterfallPlaceholder,
} from '@/lib/effects/heroWaterfallPlaceholder';
// import { initInvisibleScreenCardGradient } from '@/lib/effects/invisibleScreenCardGradient';
import { initPurchaseButtonSpotlight } from '@/lib/effects/purchaseButtonSpotlight';
import { initVideoSecondaryDeferredLoad } from '@/lib/effects/videoSecondaryDeferredLoad';
// import { initVideoMainViewportVolume } from '@/lib/effects/videoMainViewportVolume';
import { initVideoVisibilityPlayback } from '@/lib/effects/videoVisibilityPlayback';

/** Client-only wiring for the homepage, mirrors the previous `src/index.ts` entry. */
export function HomeEffects() {
  useEffect(() => {
    // placeholders for hero video (depends on the viewport width)
    initHeroWaterfallMobileSourceSwap();
    initHeroWaterfallPlaceholder();
    // real current datetime in header
    initHeaderDatetime();
    // less important videos load controller
    // initVideoSecondaryDeferredLoad();
    // play/pause decorative videos by viewport; tab refresh via unobserve/observe
    initVideoVisibilityPlayback();
    // volume controller for video main viewport
    // initVideoMainViewportVolume();
    // invisible screen cards gradients animation controller
    // initInvisibleScreenCardGradient();
    // teleprompter demo
    initFeaturesScreenTeleprompter();
    // purchase button animation controller
    initPurchaseButtonSpotlight();
    // Stripe Checkout (external backend, same origin in production)
    initCheckoutButtons();
  }, []);

  return null;
}
