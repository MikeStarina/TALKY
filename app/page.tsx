import type { Metadata } from 'next';
import '@/styles/index.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FooterVideo } from '@/components/FooterVideo';
import { HomeEffects } from '@/components/effects/HomeEffects';
import { Hero } from '@/components/blocks/Hero';
import { VideoScreen } from '@/components/blocks/VideoScreen';
import { InvisibleScreen } from '@/components/blocks/InvisibleScreen';
import { FeaturesScreen } from '@/components/blocks/FeaturesScreen';
import { PricingScreen } from '@/components/blocks/PricingScreen';
import { SupportScreen } from '@/components/blocks/SupportScreen';
import { FaqScreen } from '@/components/blocks/FaqScreen';

export const metadata: Metadata = {
  title: 'TalkY – Teleprompter for macOS | Speak Naturally on Camera',
  description:
    'TalkY is a macOS teleprompter that keeps your script right next to the camera. Stay on script, maintain eye contact, and stay invisible in screen recordings. $24.50, one-time purchase.',
  robots: 'index, follow',
  alternates: { canonical: 'https://talky-app.tech/' },
  openGraph: {
    type: 'website',
    url: 'https://talky-app.tech/',
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

const SOFTWARE_APPLICATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'TalkY',
  url: 'https://talky-app.tech',
  operatingSystem: 'macOS 14.7+',
  applicationCategory: 'ProductivityApplication',
  description:
    'A teleprompter for macOS that keeps your script visible next to the camera while remaining invisible in screen recordings.',
  offers: {
    '@type': 'Offer',
    price: '24.50',
    priceCurrency: 'USD',
    priceValidUntil: '2027-01-01',
  },
};

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I install TalkY after purchase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'After completing your purchase, you will receive an email with a download link. Download the ZIP file, extract it, and move TalkY to your Applications folder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I receive updates to the app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. TalkY is actively maintained and improved. Whenever a new version is released, you will receive an email with a link to download the updated version. All updates are included with your one-time purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there customer support if I need help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Support is available to all TalkY users. If you have any issues or questions, you can contact the developers directly. We guarantee a response within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TalkY a subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. TalkY is a one-time purchase. You pay $24.50 once and can use the app forever.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TalkY work on Windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. TalkY is built specifically for macOS and requires MacOS 15.6 or later.',
      },
    },
  ],
};

const HOME_TICKER = (
  <>
    <p className="header__telepromterLead">Hello, this is Talky!</p>
    <p>
      Welcome to your camera teleprompter, designed to help you speak naturally and confidently on camera. With
      Talky, your script appears right next to the camera, so you can read comfortably while maintaining perfect eye
      contact with your audience. No more looking away from the lens or losing your place in the script.
    </p>
    <p>
      Talky is perfect for presentations, product demos, online meetings, and recording lessons or tutorials.
      Whether you&rsquo;re creating content, teaching, or presenting to your team, Talky helps you deliver your
      message clearly and naturally. You can easily adjust the speed of your script, organize your notes, and stay
      focused on what matters most &mdash; your delivery.
    </p>
    <p>
      And the best part? Talky stays completely invisible during screen sharing and recordings, so your audience
      only sees you, not your script. Now you&rsquo;re ready to speak with confidence.
    </p>
    <p className="header__telepromterOutro">Welcome to Talky.</p>
  </>
);

export default function HomePage() {
  return (
    <div>
      <Header ticker={HOME_TICKER} />
      <section className="mainWrapper">
        <main className="main">
          <Hero />
          <VideoScreen />
          <InvisibleScreen />
          <FeaturesScreen />
          <PricingScreen />
          <SupportScreen />
          <FaqScreen />
        </main>
        <Footer />
      </section>
      <FooterVideo deferred />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APPLICATION_JSON_LD) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <HomeEffects />
    </div>
  );
}
