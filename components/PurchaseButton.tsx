import type { ReactNode } from 'react';

type PurchaseButtonVariant = 'hero' | 'pricing';

const VARIANT_IDS: Record<PurchaseButtonVariant, { layout: string; left: string; right: string; wrapper: string; trigger: string }> = {
  hero: {
    layout: 'heroScreenPurchaseButton',
    left: 'purchase-button-spotlight-left',
    right: 'purchase-button-spotlight-right',
    wrapper: 'purchase-button-wrapper',
    trigger: 'heroScreenPurchaseButtonSpotlight',
  },
  pricing: {
    layout: 'pricingScreenPurchaseButton',
    left: 'purchase-button-spotlight-left-b',
    right: 'purchase-button-spotlight-right-b',
    wrapper: 'purchase-button-wrapper-b',
    trigger: 'pricingScreenPurchaseButtonSpotlight',
  },
};

type CommonProps = {
  variant: PurchaseButtonVariant;
  mainText: ReactNode;
  wrapperContent: ReactNode;
  extraClassName?: string;
};

type ButtonProps = CommonProps & {
  as?: 'button';
  href?: undefined;
};

type AnchorProps = CommonProps & {
  as: 'a';
  href: string;
};

export function PurchaseButton(props: ButtonProps | AnchorProps) {
  const { variant, mainText, wrapperContent, extraClassName } = props;
  const ids = VARIANT_IDS[variant];
  const className = ['purchaseButton', extraClassName].filter(Boolean).join(' ');

  const content = (
    <>
      <span className="purchaseButton__glare" aria-hidden="true" />
      <span className="purchaseButton__content">
        <span className="purchaseButton__text">{mainText}</span>
        <span className="purchaseButton__wrapper">{wrapperContent}</span>
      </span>
    </>
  );

  return (
    <div className="purchaseButton__layoutWrapper" id={ids.layout}>
      <div className="purchaseButton__spotlight" aria-hidden="true" id={ids.left} />
      <div className="purchaseButton__spotlight_right" aria-hidden="true" id={ids.right} />
      <div className="purchaseButton__mainWrapper" id={ids.wrapper}>
        {props.as === 'a' ? (
          <a className={className} id={ids.trigger} href={props.href}>
            {content}
          </a>
        ) : (
          <button className={className} type="button" id={ids.trigger}>
            {content}
          </button>
        )}
      </div>
    </div>
  );
}
