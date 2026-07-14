import type { Metadata } from 'next';
import '@/styles/supportPages.css';
import { Header } from '@/components/Header';
import { NavFooter } from '@/components/Footer';
import { FooterVideo } from '@/components/FooterVideo';
import { TextPage, TextPageSection, TextPageDivider } from '@/components/TextPage';
import { SupportPagesEffects } from '@/components/effects/SupportPagesEffects';

export const metadata: Metadata = {
  title: 'Support page – TalkY',
  description: 'TalkY refund policy. All sales are final. Contact us if you need help.',
  robots: 'noindex, nofollow',
  alternates: { canonical: 'https://talky-app.tech/refund' },
  openGraph: {
    type: 'website',
    url: 'https://talky-app.tech/refund',
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

export default function RefundPage() {
  return (
    <div>
      <Header linkTitle />
      <div className="mainWrapper">
        <TextPage heading="Refund Policy" meta="Effective date: April 5, 2026">
          <TextPageSection title="1. General">
            <p className="textPage__text">TalkY is a digital product sold as a one-time purchase.</p>
            <p className="textPage__text">All sales are final.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="2. Digital delivery">
            <p className="textPage__text">After purchase, TalkY is delivered digitally.</p>
            <p className="textPage__text">By purchasing, you agree to immediate access to the product.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="3. No refunds">
            <p className="textPage__text">We do not offer refunds after purchase.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="4. Legal exceptions">
            <p className="textPage__text">If required by law, you may have rights in cases where:</p>
            <ul className="textPage__list">
              <li>the product does not work as described</li>
              <li>the product cannot be delivered</li>
              <li>the product is defective</li>
            </ul>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="5. Support first">
            <p className="textPage__text">If you have any issue, contact us:</p>
            <p className="textPage__text">
              <a href="mailto:talkyhelpapp@gmail.com" className="textPage__link">
                talkyhelpapp@gmail.com
              </a>
            </p>
            <p className="textPage__text">We respond within 24 hours and will help resolve your issue.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="6. Updates">
            <p className="textPage__text">Your purchase includes updates.</p>
            <p className="textPage__text">New versions may be sent via email.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="7. Contact">
            <p className="textPage__text">
              <a href="mailto:talkyhelpapp@gmail.com" className="textPage__link">
                talkyhelpapp@gmail.com
              </a>
            </p>
          </TextPageSection>
        </TextPage>

        <NavFooter />
      </div>

      <FooterVideo />
      <SupportPagesEffects />
    </div>
  );
}
