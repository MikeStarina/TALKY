export function SupportScreen() {
  return (
    <section className="supportScreen">
      <div className="supportScreen__inner">
        <div className="supportScreen__content">
          <div className="supportScreen__titleWrapper supportScreen__titleWrapper_desktop">
            <h2 className="supportScreen__title">Direct support</h2>
            <span className="supportScreen__title" style={{ marginTop: -20 }}>
              from&nbsp;the&nbsp;developers
            </span>
          </div>
          <div className="supportScreen__titleWrapper supportScreen__titleWrapper_mobile">
            <h2 className="supportScreen__title">Direct support</h2>
            <span className="supportScreen__title supportScreen__title_add">from&nbsp;the</span>
            <span className="supportScreen__title supportScreen__title_add">developers</span>
          </div>
          <p className="supportScreen__text">
            If you ever run into an issue or have a question, you can contact us directly.
          </p>
          <div className="supportScreen__feature">
            <div className="supportScreen__featureIcon">
              <img src="/6_1.png" width="42" height="42" alt="" />
            </div>
            <span className="supportScreen__featureText">You won&apos;t be left alone with a problem.</span>
          </div>
        </div>
        <div className="supportScreen__videoMobileWrapper">
          <video
            className="supportScreen__video"
            width="524"
            height="524"
            autoPlay
            muted
            loop
            playsInline
            // preload="none"
            poster="/placeholders/24_h_v2_placeholder.avif"
          >
            <source src="/videos/04_hours_av1_mobile.mp4" type="video/mp4" media="(max-width: 1024px)" />
            <source src="/videos/04_hours_h265_mobile.mp4" type="video/mp4" media="(max-width: 1024px)" />
            <source src="/videos/04_hours_v9_mobile.webm" type="video/webm" media="(max-width: 1024px)" />
            <source src="/videos/04_hours_av1.mp4" type="video/mp4" />
            <source src="/videos/04_hours_h265.mp4" type="video/mp4" />
            <source src="/videos/04_hours_v9.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
