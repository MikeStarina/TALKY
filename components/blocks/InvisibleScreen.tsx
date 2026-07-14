import { Logo } from '../Logo';

const CARDS: { style: React.CSSProperties; icon: string; width: number; height: number; label: string }[] = [
  {
    style: { '--bg-width': '200%', '--bg-height': '200%', '--bg-pos-left': '-50%', '--bg-pos-top': '-50%' } as React.CSSProperties,
    icon: '/third_block_icon_1.png',
    width: 64,
    height: 50,
    label: 'Recording tutorials',
  },
  {
    style: { '--bg-pos-left': '-10%', '--bg-pos-top': '-55%', '--bg-width': '150%', '--bg-height': '150%' } as React.CSSProperties,
    icon: '/third_block_icon_2.png',
    width: 41,
    height: 50,
    label: 'Product demos',
  },
  {
    style: { '--bg-pos-left': '3%', '--bg-pos-top': '-50%', '--bg-width': '150%', '--bg-height': '150%' } as React.CSSProperties,
    icon: '/third_block_icon_3.png',
    width: 66,
    height: 50,
    label: 'Presentations',
  },
  {
    style: { '--bg-pos-left': '0%', '--bg-pos-top': '0%', '--bg-width': '150%', '--bg-height': '150%' } as React.CSSProperties,
    icon: '/third_block_icon_4.png',
    width: 54,
    height: 50,
    label: 'Online meetings',
  },
];

export function InvisibleScreen() {
  return (
    <section className="invisibleScreen">
      <div className="invisibleScreen__bgVideoWrapper">
        <video
          className="invisibleScreen__bgVideo"
          autoPlay
          muted
          loop
          playsInline
          // preload="none"
          poster="/placeholders/lamps_test_placeholder.webp"
        >
          <source src="/videos/03_lamps_h265.mp4" type="video/mp4; codecs=hvc1" />
          <source src="/videos/03_lamps_av1.mp4" type="video/mp4; codecs=av01.0.05M.08" />
          <source src="/videos/03_lamps_v9.webm" type="video/webm" />
        </video>
      </div>
      <div className="invisibleScreen__info">
        <h2 className="invisibleScreen__subtitle">
          <Logo /> stays visible only to you.
        </h2>
        <p className="invisibleScreen__text">
          It does not appear in screen recordings or screen sharing, so your audience sees only your presentation,
          demo, or video.
        </p>
      </div>
      <ul className="invisibleScreen__cards">
        {CARDS.map((card) => (
          <li className="invisibleScreen__cardWrap" key={card.label}>
            <div className="invisibleScreen__cardGlow" aria-hidden="true" />
            <div className="invisibleScreen__card">
              <div className="invisibleScreen__cardContent">
                <div className="invisibleScreen__cardIcon" style={card.style}>
                  <img src={card.icon} width={card.width} height={card.height} alt="" />
                </div>
                <span className="invisibleScreen__cardLabel">{card.label}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
