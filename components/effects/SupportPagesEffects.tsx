'use client';

import { useEffect } from 'react';
import { initHeaderDatetime } from '@/lib/effects/headerDatetime';
import { initVideoVisibilityPlayback } from '@/lib/effects/videoVisibilityPlayback';

/** Client-only wiring for /privacy, /terms, /refund, mirrors the previous `src/supportPages.ts` entry. */
export function SupportPagesEffects() {
  useEffect(() => {
    initHeaderDatetime();
    initVideoVisibilityPlayback();
  }, []);

  return null;
}
