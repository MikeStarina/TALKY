import type { Metadata } from 'next';
import '@/styles/thanks.css';
import { Header } from '@/components/Header';
import { FooterVideo } from '@/components/FooterVideo';
import { DownloadBlock, ThanksPageFooter } from '@/components/DownloadBlock';
import { PaymentFailedEffects } from '@/components/effects/PaymentFailedEffects';
import { Logo } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'TalkY – Payment unsuccessful',
  description: 'Your payment did not complete. Return to TalkY to try again or contact support.',
  robots: 'noindex, nofollow',
  openGraph: {
    type: 'website',
    url: 'https://talky-app.tech/payment-failed/',
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

const PAYMENT_FAILED_TICKER = (
  <>
    <p className="header__telepromterLead">Hello, this is Talky!</p>
    <p>Your payment didn&rsquo;t go through.</p>
    <p>No worries &mdash; your card was not charged.</p>
    <p>
      Go back to the site and try checkout again, or use a different card or payment method. If the problem keeps
      happening, email us at talkyhelpapp@gmail.com &mdash; we reply within 24 hours.
    </p>
    <p className="header__telepromterOutro">We&rsquo;re here if you need help.</p>
  </>
);

export default function PaymentFailedPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header fastTeleprompter linkTitle ticker={PAYMENT_FAILED_TICKER} />
      <div className="mainWrapper">
        <main className="main">
          <DownloadBlock
            titleLine={<h2 className="downloadBlock__title">Payment&nbsp;failed</h2>}
            subtitle="You can return to the homepage and try again whenever you’re ready."
            ctaHref="/"
            ctaMainText={
              <>
                Back to <Logo style={{ fontSize: 'inherit' }} />
              </>
            }
            ctaWrapperContent={<span className="purchaseButton__text purchaseButton__text_gray">Try again</span>}
            note="Need help? talkyhelpapp@gmail.com"
          />
        </main>
      </div>
      <ThanksPageFooter />
      <FooterVideo />
      <PaymentFailedEffects />
    </div>
  );
}
