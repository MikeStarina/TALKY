import { Logo } from '../Logo';
import { PurchaseButton } from '../PurchaseButton';

const CARDS = [
  { icon: '/pricing_block_icon_1.png', label: 'Full app access', variant: 'blue' as const },
  { icon: '/pricing_block_icon_2.png', label: 'Free future updates', variant: 'red' as const },
  { icon: '/pricing_block_icon_3.png', label: 'No subscriptions', variant: 'blue' as const },
  { icon: '/pricing_block_icon_4.png', label: 'No recurring payments', variant: 'red' as const },
];

export function PricingScreen() {
  return (
    <section className="pricingScreen">
      <div className="pricingScreen__header">
        <div className="pricingScreen__titleWrapper">
          <h2 className="pricingScreen__title">Simple pricing.</h2>
          <span className="pricingScreen__titleAdd">
            <span>No&nbsp;subscriptions.</span>
          </span>
        </div>
        <p className="pricingScreen__subtitle">
          <Logo style={{ fontSize: 'inherit' }} /> for macOS
        </p>
      </div>
      <ul className="pricingScreen__cards">
        {CARDS.map((card) => (
          <li className="pricingScreen__card" key={card.label}>
            <div className="pricingScreen__cardWrapper">
              <img src={card.icon} width="42" height="42" alt="" />
              <span className="pricingScreen__cardLabel">{card.label}</span>
            </div>
            {card.variant === 'blue' ? (
              <>
                <div className="pricingScreen__cardGlare" />
                <div className="pricingScreen__cardGlare_small" />
                <div className="pricingScreen__cardShadow_whiteBlue" />
                <div className="pricingScreen__cardShadow_lblue" />
                <div className="pricingScreen__cardShadow_blue" />
                <div className="pricingScreen__cardShadow_dblue" />
              </>
            ) : (
              <>
                <div className="pricingScreen__cardGlare_red" />
                <div className="pricingScreen__cardGlare_small" />
                <div className="pricingScreen__cardShadow_whiteRed" />
                <div className="pricingScreen__cardShadow_lred" />
                <div className="pricingScreen__cardShadow_red" />
                <div className="pricingScreen__cardShadow_dred" />
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="pricingScreen__cta">
        <PurchaseButton
          variant="pricing"
          mainText={
            <>
              Buy <Logo style={{ fontSize: 'inherit' }} />
            </>
          }
          wrapperContent="$24.50"
        />
        <p className="pricingScreen__note">One-time purchase • Free updates • Direct developer support</p>
      </div>
    </section>
  );
}
