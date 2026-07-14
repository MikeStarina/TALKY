import { createReadStream, promises as fs } from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { verifyPaidCheckoutSession } from '@/lib/stripe/checkout';
import { verifyDownloadToken } from '@/lib/stripe/downloadToken';

function resolveDownloadFilePath() {
  const assetsRoot = path.resolve(process.cwd(), 'assets');
  const relativePath = process.env.TALKY_DOWNLOAD_FILE ?? 'TalkY.dmg';
  const absoluteFilePath = path.resolve(assetsRoot, relativePath);

  const isInsideAssets = absoluteFilePath === assetsRoot || absoluteFilePath.startsWith(`${assetsRoot}${path.sep}`);
  if (!isInsideAssets) {
    throw new Error('Download file must be inside /assets');
  }

  return absoluteFilePath;
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token') ?? '';
  const tokenVerification = verifyDownloadToken(token);

  if (!tokenVerification.ok) {
    return NextResponse.json({ error: tokenVerification.reason }, { status: 403 });
  }

  const tokenPayload = tokenVerification.payload;
  if (!tokenPayload) {
    return NextResponse.json({ error: 'Invalid download token payload' }, { status: 403 });
  }

  const cookieStore = await cookies();
  const customerId = cookieStore.get('stripe_customer_id')?.value ?? '';

  if (!customerId || customerId !== tokenPayload.cid) {
    return NextResponse.json({ error: 'This download link does not belong to this user' }, { status: 403 });
  }

  const verification = await verifyPaidCheckoutSession(tokenPayload.sid, customerId);

  if (!verification.ok) {
    return NextResponse.json({ error: verification.reason }, { status: 403 });
  }

  let filePath: string;

  try {
    filePath = resolveDownloadFilePath();
    await fs.access(filePath);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Download file is not available';
    return NextResponse.json({ error: message }, { status: 500 });
  }

  const fileName = path.basename(filePath);
  const stats = await fs.stat(filePath);
  const nodeStream = createReadStream(filePath);
  const webStream = Readable.toWeb(nodeStream) as ReadableStream;

  return new Response(webStream, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Length': String(stats.size),
      'Cache-Control': 'no-store',
    },
  });
}
