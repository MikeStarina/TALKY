import type { Metadata } from 'next';
import '@/styles/supportPages.css';
import { Header } from '@/components/Header';
import { NavFooter } from '@/components/Footer';
import { FooterVideo } from '@/components/FooterVideo';
import { TextPage, TextPageSection, TextPageDivider } from '@/components/TextPage';
import { SupportPagesEffects } from '@/components/effects/SupportPagesEffects';

export const metadata: Metadata = {
  title: 'Terms of Service – TalkY',
  description: 'TalkY terms of service.',
  robots: 'noindex, nofollow',
  alternates: { canonical: 'https://talky-app.tech/terms' },
  openGraph: {
    type: 'website',
    url: 'https://talky-app.tech/terms',
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

export default function TermsPage() {
  return (
    <div>
      <Header linkTitle />
      <div className="mainWrapper">
        <TextPage
          heading="Terms of Service"
          meta="Effective date: April 5, 2026"
          intro="These Terms govern your purchase and use of TalkY. By purchasing or using TalkY, you agree to these Terms."
        >
          <TextPageSection title="1. Product">
            <p className="textPage__text">TalkY is a teleprompter app for macOS.</p>
            <p className="textPage__text">System requirement: MacOS 15.6 or later.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="2. License">
            <p className="textPage__text">You receive a non-exclusive, non-transferable license to use TalkY.</p>
            <p className="textPage__text">You may not:</p>
            <ul className="textPage__list">
              <li>resell or distribute</li>
              <li>modify or reverse engineer</li>
              <li>use unlawfully</li>
            </ul>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="3. Purchase">
            <p className="textPage__text">TalkY is a one-time purchase:</p>
            <ul className="textPage__list">
              <li>no subscription</li>
              <li>no recurring payments</li>
            </ul>
            <p className="textPage__text">Includes:</p>
            <ul className="textPage__list">
              <li>full app access</li>
              <li>updates</li>
              <li>support</li>
            </ul>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="4. Delivery">
            <p className="textPage__text">After purchase, you will receive an email with a download link.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="5. Updates">
            <p className="textPage__text">TalkY may receive updates:</p>
            <ul className="textPage__list">
              <li>updates are included</li>
              <li>new versions may be sent via email</li>
            </ul>
            <p className="textPage__text">We aim to keep the app functional and up to date.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="6. Support">
            <p className="textPage__text">Support is available via:</p>
            <p className="textPage__text">
              <a href="mailto:talkyhelpapp@gmail.com" className="textPage__link">
                talkyhelpapp@gmail.com
              </a>
            </p>
            <p className="textPage__text">We aim to respond within 24 hours.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="7. Refunds">
            <p className="textPage__text">All sales are final.</p>
            <p className="textPage__text">No refunds are provided after purchase, except where required by law.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="8. Legal rights">
            <p className="textPage__text">Nothing in these Terms removes your legal rights under applicable law.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="9. Liability">
            <p className="textPage__text">To the maximum extent allowed by law:</p>
            <ul className="textPage__list">
              <li>TalkY is not liable for indirect or consequential damages.</li>
              <li>Total liability is limited to the purchase amount ($24.50).</li>
            </ul>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="10. Intellectual property">
            <p className="textPage__text">All rights to TalkY remain with TalkY.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="11. Governing law">
            <p className="textPage__text">These Terms are governed by the laws of the United Kingdom.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="12. Contact">
            <p className="textPage__text">TalkY</p>
            <p className="textPage__text">
              Camburgh House, 27 New Dover Road
              <br />
              Canterbury, CT1 3DN
              <br />
              United Kingdom
            </p>
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
