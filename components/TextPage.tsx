import type { ReactNode } from 'react';
import Link from 'next/link';

export function TextPage({
  heading,
  meta,
  intro,
  children,
}: {
  heading: string;
  meta: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="textPage">
      <div className="textPage__inner">
        <Link href="/" className="textPage__backLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to TalkY
        </Link>

        <h1 className="textPage__heading">{heading}</h1>
        <p className="textPage__meta">{meta}</p>
        {intro && (
          <p className="textPage__text" style={{ marginBottom: 40 }}>
            {intro}
          </p>
        )}

        {children}
      </div>
    </main>
  );
}

export function TextPageSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="textPage__section">
      <h2 className="textPage__sectionTitle">{title}</h2>
      {children}
    </section>
  );
}

export function TextPageDivider() {
  return <hr className="textPage__divider" />;
}
