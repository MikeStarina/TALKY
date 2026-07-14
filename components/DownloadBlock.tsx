import type { ReactNode } from 'react';
import { PurchaseButton } from './PurchaseButton';

export function DownloadBlock({
  titleLine,
  subtitle,
  ctaHref,
  ctaExtraClassName,
  ctaMainText,
  ctaWrapperContent,
  note,
}: {
  titleLine: ReactNode;
  subtitle: ReactNode;
  ctaHref: string;
  ctaExtraClassName?: string;
  ctaMainText: ReactNode;
  ctaWrapperContent: ReactNode;
  note: ReactNode;
}) {
  return (
    <section className="downloadBlock">
      <div className="downloadBlock__header">
        <div className="downloadBlock__titleWrapper">{titleLine}</div>
        <p className="downloadBlock__subtitle">{subtitle}</p>
      </div>
      <div className="downloadBlock__cta">
        <PurchaseButton
          variant="pricing"
          as="a"
          href={ctaHref}
          extraClassName={ctaExtraClassName}
          mainText={ctaMainText}
          wrapperContent={ctaWrapperContent}
        />
        <p className="downloadBlock__note">{note}</p>
      </div>
    </section>
  );
}

export function ThanksPageFooter({ children }: { children?: ReactNode }) {
  return (
    <footer className="footer footer_thanksPage">
      <div className="downloadBlock__footerContent">{children}</div>
    </footer>
  );
}
