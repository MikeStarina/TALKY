import { Logo } from './Logo';

const NAV = (
  <nav className="footer__nav">
    <a href="/refund" target="_blank" className="footer__navItem" rel="noreferrer">
      Refund
    </a>
    <a href="/privacy" target="_blank" className="footer__navItem" rel="noreferrer">
      Privacy
    </a>
    <a href="/terms" target="_blank" className="footer__navItem" rel="noreferrer">
      Terms
    </a>
  </nav>
);

/** Full footer with the TalkY heading, used on the homepage. */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__header">
          <div className="footer__titleWrapper">
            <Logo className="logo logo_footer" />
            <h2 className="footer__title">- Teleprompter</h2>
          </div>
          <span className="footer__title footer__title_add">for macOS</span>
        </div>
        <p className="footer__note">MacOS 15.6 or later</p>
      </div>
      {NAV}
    </footer>
  );
}

/** Nav-only footer, used on the privacy/terms/refund text pages. */
export function NavFooter() {
  return <footer className="footer">{NAV}</footer>;
}
