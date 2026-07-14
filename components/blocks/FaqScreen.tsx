import { Logo } from '../Logo';

const FAQ_ITEMS: { question: React.ReactNode; answer: React.ReactNode[] }[] = [
  {
    question: (
      <span>
        How do I install <Logo /> after purchase?
      </span>
    ),
    answer: [
      <>After completing your purchase, you will receive an email with a download link.</>,
      <>
        Download the ZIP file, extract it, and move{' '}
        <span className="logo" style={{ fontSize: 'inherit', color: 'var(--color-primary-white)' }}>
          Talk<span>Y</span>
        </span>{' '}
        to your Applications folder.
      </>,
    ],
  },
  {
    question: <span>Will I receive updates to the app?</span>,
    answer: [
      <>
        Yes.{' '}
        <span className="logo" style={{ fontSize: 'inherit', color: 'var(--color-primary-white)' }}>
          Talk<span>Y</span>
        </span>{' '}
        is actively maintained and improved.
      </>,
      <>Whenever a new version is released, you will receive an email with a link to download the updated version.</>,
      <>All updates are included with your one-time purchase.</>,
    ],
  },
  {
    question: <span>Is there customer support if I need help?</span>,
    answer: [
      <>
        Yes. Support is available to all{' '}
        <span className="logo" style={{ fontSize: 'inherit', color: 'var(--color-primary-white)' }}>
          Talk<span>Y</span>
        </span>{' '}
        users.
      </>,
      <>If you have any issues or questions, you can contact the developers directly.</>,
      <>We guarantee a response within 24 hours.</>,
    ],
  },
  {
    question: (
      <span>
        Is <Logo /> a subscription?
      </span>
    ),
    answer: [
      <>
        No.{' '}
        <span className="logo" style={{ fontSize: 'inherit', color: 'var(--color-primary-white)' }}>
          Talk<span>Y</span>
        </span>{' '}
        is a one-time purchase.
      </>,
      <>You pay $24.50 once and can use the app forever.</>,
    ],
  },
  {
    question: (
      <span>
        Does <Logo /> work on Windows?
      </span>
    ),
    answer: [
      <>
        No.{' '}
        <span className="logo" style={{ fontSize: 'inherit', color: 'var(--color-primary-white)' }}>
          Talk<span>Y</span>
        </span>{' '}
        is built specifically for macOS and requires MacOS 15.6 or later.
      </>,
    ],
  },
];

export function FaqScreen() {
  return (
    <section className="faqScreen">
      <h2 className="faqScreen__title">FAQ</h2>
      <ul className="faqScreen__list">
        <div className="faqScreen__questionMark">?</div>
        {FAQ_ITEMS.map((item, index) => (
          <li key={index}>
            <details className="faqScreen__item">
              <summary className="faqScreen__question">
                {item.question}
                <span className="faqScreen__icon" />
              </summary>
              <ul className="faqScreen__answer">
                {item.answer.map((line, lineIndex) => (
                  <li key={lineIndex}>{line}</li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
