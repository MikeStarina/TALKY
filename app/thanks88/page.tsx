import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import '@/styles/thanks.css';
import { Header } from '@/components/Header';
import { FooterVideo } from '@/components/FooterVideo';
import { DownloadBlock, ThanksPageFooter } from '@/components/DownloadBlock';
import { ThanksEffects } from '@/components/effects/ThanksEffects';
import { Logo } from '@/components/Logo';
import { verifyPaidCheckoutSession } from '@/lib/stripe/checkout';
import { createDownloadToken } from '@/lib/stripe/downloadToken';

export const metadata: Metadata = {
  title: 'Download TalkY – Thank You!',
  description: 'Thank you for your purchase. Download TalkY for macOS.',
  robots: 'noindex, nofollow',
  openGraph: {
    type: 'website',
    url: 'https://talky-app.tech/thanks',
    siteName: 'TalkY',
    title: 'TalkY – Teleprompter for macOS',
    description:
      'Keep your script next to the camera. Speak naturally, maintain eye contact, stay invisible in recordings. One-time purchase, $24.50.',
    images: [{ url: 'https://talky-app.tech/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalkY – Teleprompter for macOS',
    description: 'Keep your script next to the camera. Speak naturally, invisible in recordings. $24.50 one-time.',
    images: ['https://talky-app.tech/og-image.png'],
  },
};

const THANKS_TICKER = (
  <>
    <p className="header__telepromterLead">Thank you for your purchase!</p>
    <p>Welcome to Talky.</p>
    <p>Your teleprompter for macOS is&nbsp;ready.</p>
    <p>If you have any questions, contact us at talkyhelpapp@gmail.com &mdash; we reply within 24 hours.</p>
  </>
);

export default async function Thanks88Page({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id ?? '';
  const cookieStore = await cookies();
  const customerId = cookieStore.get('stripe_customer_id')?.value ?? '';

  const verification = await verifyPaidCheckoutSession(sessionId, customerId);
  const tokenResult = verification.ok ? createDownloadToken(sessionId, customerId) : null;
  const downloadToken = tokenResult && tokenResult.ok ? tokenResult.token : null;
  const downloadHref = downloadToken ? `/api/download?token=${encodeURIComponent(downloadToken)}` : null;
  const errorReason = !verification.ok ? verification.reason : tokenResult && !tokenResult.ok ? tokenResult.reason : null;

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header fastTeleprompter linkTitle ticker={THANKS_TICKER} />
      <div className="mainWrapper">
        <main className="main">
          {downloadHref ? (
            <DownloadBlock
              titleLine={
                <>
                  <h2 className="downloadBlock__title">Download&nbsp;</h2>
                  <Logo className="logo logo_footer" />
                </>
              }
              subtitle="Your download is ready. Click below to get the app:"
              ctaHref={downloadHref}
              ctaExtraClassName="thanksDownloadLink"
              ctaMainText={
                <>
                  Download <Logo style={{ fontSize: 'inherit' }} />
                </>
              }
              ctaWrapperContent={<span className="purchaseButton__text purchaseButton__text_gray">(.dmg)</span>}
              note="MacOS 15.6 or later required"
            />
          ) : (
            <DownloadBlock
              titleLine={<h2 className="downloadBlock__title">Payment&nbsp;not&nbsp;verified</h2>}
              subtitle={
                errorReason
                  ? `We could not verify a successful payment for this download link: ${errorReason}`
                  : 'We could not verify a successful payment for this download link.'
              }
              ctaHref="/"
              ctaMainText={
                <>
                  Back to <Logo style={{ fontSize: 'inherit' }} />
                </>
              }
              ctaWrapperContent={<span className="purchaseButton__text purchaseButton__text_gray">Homepage</span>}
              note="Need help? talkyhelpapp@gmail.com"
            />
          )}
        </main>
      </div>
      <ThanksPageFooter>
        <div className="downloadBlock__footerCol downloadBlock__footerCol_left" />
        <div className="downloadBlock__footerCol downloadBlock__footerCol_right">
          <p className="downloadBlock__footerNote" style={{ opacity: 0.5 }}>
            Need help? Contact us anytime — we reply within 24 hours
          </p>
          <a className="downloadBlock__footerNote" href="mailto:talkyhelpapp@gmail.com">
            talkyhelpapp@gmail.com
          </a>
        </div>
      </ThanksPageFooter>
      <FooterVideo />
      <ThanksEffects />
    </div>
  );
}
