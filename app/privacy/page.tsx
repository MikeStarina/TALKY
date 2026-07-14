import type { Metadata } from 'next';
import '@/styles/supportPages.css';
import { Header } from '@/components/Header';
import { NavFooter } from '@/components/Footer';
import { FooterVideo } from '@/components/FooterVideo';
import { TextPage, TextPageSection, TextPageDivider } from '@/components/TextPage';
import { SupportPagesEffects } from '@/components/effects/SupportPagesEffects';

export const metadata: Metadata = {
  title: 'Privacy Policy – TalkY',
  description: 'TalkY privacy policy.',
  robots: 'noindex, nofollow',
  alternates: { canonical: 'https://talky-app.tech/privacy' },
  openGraph: {
    type: 'website',
    url: 'https://talky-app.tech/privacy',
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

export default function PrivacyPage() {
  return (
    <div>
      <Header linkTitle />
      <div className="mainWrapper">
        <TextPage
          heading="Privacy Policy"
          meta="Effective date: April 5, 2026"
          intro={
            <>
              TalkY (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides the TalkY
              desktop application for macOS (&quot;TalkY&quot;, the &quot;App&quot;). This Privacy Policy explains
              how we collect, use, disclose, and protect personal data when you visit our website, purchase TalkY,
              download TalkY, contact support, or otherwise interact with us.
            </>
          }
        >
          <TextPageSection title="1. Who we are">
            <p className="textPage__text">Data controller: TalkY</p>
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

          <TextPageDivider />

          <TextPageSection title="2. What data we collect">
            <p className="textPage__text">We may collect:</p>
            <ul className="textPage__list">
              <li>name and email address</li>
              <li>purchase and transaction details</li>
              <li>support messages you send us</li>
              <li>technical data (IP address, browser, device info)</li>
              <li>delivery data (download access, update emails)</li>
            </ul>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="3. How we collect data">
            <ul className="textPage__list">
              <li>directly from you (purchase, support, email)</li>
              <li>automatically (basic website logs)</li>
              <li>from third parties (Stripe for payments)</li>
            </ul>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="4. Why we use your data">
            <ul className="textPage__list">
              <li>to process your purchase</li>
              <li>to send download links and updates</li>
              <li>to provide customer support</li>
              <li>to improve and secure our service</li>
              <li>to comply with legal obligations</li>
            </ul>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="5. Payments">
            <p className="textPage__text">Payments are processed securely by Stripe.</p>
            <p className="textPage__text">We do not store your full payment details.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="6. Emails">
            <p className="textPage__text">We may send:</p>
            <ul className="textPage__list">
              <li>purchase confirmation</li>
              <li>download link</li>
              <li>updates to the app</li>
              <li>support replies</li>
            </ul>
            <p className="textPage__text">These are service emails, not marketing.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="7. Data sharing">
            <p className="textPage__text">We may share data with:</p>
            <ul className="textPage__list">
              <li>Stripe (payments)</li>
              <li>hosting providers</li>
              <li>email providers</li>
              <li>legal authorities if required</li>
            </ul>
            <p className="textPage__text">We do not sell your data.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="8. Data retention">
            <p className="textPage__text">We keep data only as long as necessary for:</p>
            <ul className="textPage__list">
              <li>orders</li>
              <li>legal obligations</li>
              <li>support</li>
            </ul>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="9. Your rights">
            <p className="textPage__text">You may:</p>
            <ul className="textPage__list">
              <li>request access</li>
              <li>request deletion</li>
              <li>request correction</li>
            </ul>
            <p className="textPage__text">
              Contact:{' '}
              <a href="mailto:talkyhelpapp@gmail.com" className="textPage__link">
                talkyhelpapp@gmail.com
              </a>
            </p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="10. Security">
            <p className="textPage__text">We take reasonable steps to protect your data.</p>
          </TextPageSection>

          <TextPageDivider />

          <TextPageSection title="11. Changes">
            <p className="textPage__text">We may update this policy. The latest version will always be on the website.</p>
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
