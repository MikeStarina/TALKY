import { createHash, randomUUID } from 'crypto';

export const TIKTOK_PIXEL_ID = process.env.TIKTOK_PIXEL_ID ?? 'D9ETPURC77UE4ULOM10G';

export const TALKY_PRODUCT = {
  content_id: 'talky',
  content_name: 'TalkY',
  content_type: 'product' as const,
  value: 24.5,
  currency: 'USD',
};

type TikTokEventName = 'InitiateCheckout' | 'CompletePayment';

type TrackTikTokEventInput = {
  event: TikTokEventName;
  eventId?: string;
  email?: string | null;
  ip?: string | null;
  userAgent?: string | null;
  ttp?: string | null;
  ttclid?: string | null;
  url?: string | null;
  orderId?: string | null;
};

function sha256(value: string) {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

function getAccessToken() {
  return process.env.TIKTOK_EVENTS_API_TOKEN;
}

export function createTikTokEventId(prefix?: string) {
  return prefix ? `${prefix}_${randomUUID()}` : randomUUID();
}

/** Server-side TikTok Events API. Never call from the browser — token stays on the server. */
export async function trackTikTokEvent(input: TrackTikTokEventInput): Promise<string | null> {
  const accessToken = getAccessToken();
  if (!accessToken) {
    console.warn('[TikTokEvents] TIKTOK_EVENTS_API_TOKEN is not configured');
    return null;
  }

  const eventId = input.eventId ?? createTikTokEventId(input.event);
  const user: Record<string, string> = {};

  if (input.email) user.email = sha256(input.email);
  if (input.ip) user.ip = input.ip;
  if (input.userAgent) user.user_agent = input.userAgent;
  if (input.ttp) user.ttp = input.ttp;
  if (input.ttclid) user.ttclid = input.ttclid;

  const properties: Record<string, unknown> = {
    currency: TALKY_PRODUCT.currency,
    value: TALKY_PRODUCT.value,
    content_type: TALKY_PRODUCT.content_type,
    contents: [
      {
        content_id: TALKY_PRODUCT.content_id,
        content_name: TALKY_PRODUCT.content_name,
        content_type: TALKY_PRODUCT.content_type,
        quantity: 1,
        price: TALKY_PRODUCT.value,
      },
    ],
  };

  if (input.orderId) {
    properties.order_id = input.orderId;
  }

  const body = {
    event_source: 'web',
    event_source_id: TIKTOK_PIXEL_ID,
    data: [
      {
        event: input.event,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        user,
        page: input.url ? { url: input.url } : undefined,
        properties,
      },
    ],
  };

  try {
    const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: {
        'Access-Token': accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      console.error('[TikTokEvents] API error', response.status, text);
      return eventId;
    }

    const result = (await response.json().catch(() => null)) as { code?: number; message?: string } | null;
    if (result && result.code !== 0) {
      console.error('[TikTokEvents] API rejected event', result);
    }
  } catch (error) {
    console.error('[TikTokEvents] Failed to send event', error);
  }

  return eventId;
}

export function getClientIp(headers: Headers) {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || null;
  }
  return headers.get('x-real-ip');
}
