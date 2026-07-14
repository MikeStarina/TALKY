import { createHmac, timingSafeEqual } from 'node:crypto';

interface DownloadTokenPayload {
  sid: string;
  cid: string;
  exp: number;
}

const defaultTokenTtlSeconds = 60 * 30;

function getDownloadLinkSecret() {
  return process.env.DOWNLOAD_LINK_SECRET;
}

function getTokenTtlSeconds() {
  const rawTtl = Number(process.env.DOWNLOAD_LINK_TTL_SECONDS ?? defaultTokenTtlSeconds);
  if (!Number.isFinite(rawTtl) || rawTtl <= 0) return defaultTokenTtlSeconds;
  return Math.floor(rawTtl);
}

function sign(value: string, secret: string) {
  return createHmac('sha256', secret).update(value).digest();
}

function encodeBase64Url(value: Buffer | string) {
  return Buffer.from(value).toString('base64url');
}

function decodeBase64Url(value: string) {
  return Buffer.from(value, 'base64url');
}

export function createDownloadToken(sessionId: string, customerId: string) {
  const secret = getDownloadLinkSecret();
  if (!secret) {
    return { ok: false, reason: 'Download link secret is not configured' as const };
  }

  const payload: DownloadTokenPayload = {
    sid: sessionId,
    cid: customerId,
    exp: Math.floor(Date.now() / 1000) + getTokenTtlSeconds(),
  };

  const payloadEncoded = encodeBase64Url(JSON.stringify(payload));
  const signatureEncoded = encodeBase64Url(sign(payloadEncoded, secret));

  return { ok: true, token: `${payloadEncoded}.${signatureEncoded}` } as const;
}

export function verifyDownloadToken(token: string) {
  const secret = getDownloadLinkSecret();
  if (!secret) {
    return { ok: false, reason: 'Download link secret is not configured' as const };
  }

  if (!token) {
    return { ok: false, reason: 'Missing download token' as const };
  }

  const [payloadEncoded, signatureEncoded] = token.split('.');
  if (!payloadEncoded || !signatureEncoded) {
    return { ok: false, reason: 'Invalid download token format' as const };
  }

  const expectedSignature = sign(payloadEncoded, secret);
  let providedSignature: Buffer;

  try {
    providedSignature = decodeBase64Url(signatureEncoded);
  } catch {
    return { ok: false, reason: 'Invalid download token signature' as const };
  }

  if (
    expectedSignature.length !== providedSignature.length ||
    !timingSafeEqual(expectedSignature, providedSignature)
  ) {
    return { ok: false, reason: 'Download token signature mismatch' as const };
  }

  let payload: DownloadTokenPayload;

  try {
    payload = JSON.parse(decodeBase64Url(payloadEncoded).toString('utf-8')) as DownloadTokenPayload;
  } catch {
    return { ok: false, reason: 'Invalid download token payload' as const };
  }

  if (!payload.sid || !payload.cid || !payload.exp) {
    return { ok: false, reason: 'Download token payload is incomplete' as const };
  }

  if (payload.exp < Math.floor(Date.now() / 1000)) {
    return { ok: false, reason: 'Download token has expired' as const };
  }

  return { ok: true, payload } as const;
}
