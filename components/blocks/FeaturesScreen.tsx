const TELEPROMPTER_COLUMN = (
  <>
    <p className="demo__telepromterLead">Hello, this is Talky!</p>
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
    <p className="demo__telepromterOutro">Welcome to Talky.</p>
  </>
);

export function FeaturesScreen() {
  return (
    <section className="featuresScreen">
      <img
        src="/features_block_bg.webp"
        srcSet="/features_block_bg.png"
        width="1440"
        height="526"
        alt=""
        className="featuresScreen__bg"
      />
      <div className="featuresScreen__inner">
        <div className="featuresScreen__headingWrapper featuresScreen__headingWrapper_desktop">
          <h2 className="featuresScreen__heading">A teleprompter</h2>
          <span className="featuresScreen__heading" style={{ marginTop: -20 }}>
            designed for macOS
          </span>
        </div>
        <div className="featuresScreen__headingWrapper featuresScreen__headingWrapper_mobile">
          <h2 className="featuresScreen__heading">A teleprompter</h2>
          <span className="featuresScreen__heading" style={{ marginTop: -20 }}>
            designed
          </span>
          <span className="featuresScreen__heading" style={{ marginTop: -20 }}>
            for macOS
          </span>
        </div>
        <div className="featuresScreen__content">
          <div className="featuresScreen__mockupWrapper">
            <div className="featuresScreen__controlPanel" id="featuresScreenSpeedRoot">
              <div className="featuresScreen__controlPanelGrid" aria-hidden="true" />
              <div className="featuresScreen__scriptCard">
                <div className="featuresScreen__scriptCardRow">
                  <div className="featuresScreen__scriptCardText">
                    <p className="featuresScreen__scriptTitle">Hello, this is Talky!</p>
                    <p className="featuresScreen__scriptExcerpt">
                      Welcome to your camera teleprompter, designed to help you speak naturally and confidently on
                      camera. With Talky, your script appears right next to the camera, so you can read comfortably
                      while maintaining perfect eye contact with your audience. No more looking away from the lens or
                      losing your place in the script.
                      <br />
                      <br />
                      Talky is perfect for presentations, product demos, online meetings, and recording lessons or
                      tutorials. Whether you&rsquo;re creating content, teaching, or presenting to your team, Talky
                      helps you deliver your message clearly and naturally. You can easily adjust the speed of your
                      script, organize your notes, and stay focused on what matters most &mdash; your delivery.
                      <br />
                      <br />
                      And the best part? Talky stays completely invisible during screen sharing and recordings, so
                      your audience only sees you, not your script. Now you&rsquo;re ready to speak with confidence.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="featuresScreen__playBtn featuresScreen__playBtn_playing"
                    id="featuresScreenPlayBtn"
                    aria-label="Pause teleprompter preview"
                    aria-pressed="true"
                  >
                    <svg
                      className="featuresScreen__playSvg featuresScreen__playSvg_pause"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path fill="currentColor" d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
                    </svg>
                    <svg
                      className="featuresScreen__playSvg featuresScreen__playSvg_play"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path fill="currentColor" d="M8 5v14l11-7L8 5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="featuresScreen__speedCard">
                <span className="featuresScreen__speedLabel">Speed</span>
                <div className="featuresScreen__speedSlider" id="featuresScreenSpeedSlider">
                  <span className="featuresScreen__speedIcon featuresScreen__speedIcon_turtle" aria-hidden="true">
                    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.0605 5.2876C8.98698 5.2876 7.97152 5.08561 7.01416 4.68164C6.0568 4.27214 5.20182 3.65511 4.44922 2.83057C4.96387 2.17204 5.50342 1.63525 6.06787 1.22021C6.63786 0.805176 7.25212 0.498047 7.91064 0.298828C8.57471 0.0996094 9.31348 0.00276693 10.127 0.00830078C10.9349 0.00830078 11.6654 0.10791 12.3184 0.307129C12.9714 0.500814 13.5745 0.802409 14.1279 1.21191C14.6868 1.62142 15.2236 2.1416 15.7383 2.77246C14.9857 3.60807 14.1335 4.23617 13.1816 4.65674C12.2298 5.07731 11.1895 5.2876 10.0605 5.2876ZM4.59863 10.6748C4.2832 10.5641 3.95671 10.4728 3.61914 10.4009C3.28711 10.3234 2.91357 10.2847 2.49854 10.2847H1.54395C1.05143 10.2847 0.669596 10.2072 0.398438 10.0522C0.132812 9.8973 0 9.67594 0 9.38818C0 9.18896 0.0442708 9.01742 0.132812 8.87354C0.221354 8.72412 0.348633 8.56917 0.514648 8.40869C0.691732 8.23161 0.896484 8.02962 1.12891 7.80273C1.36133 7.57031 1.60482 7.28809 1.85938 6.95605C2.11393 6.62402 2.36296 6.22005 2.60645 5.74414C2.78906 5.38444 2.97445 5.04411 3.1626 4.72314C3.35628 4.39665 3.54997 4.08952 3.74365 3.80176C4.19743 4.27767 4.72314 4.70101 5.3208 5.07178C5.92399 5.44255 6.51888 5.73307 7.10547 5.94336C7.0446 6.48568 6.90072 7.05013 6.67383 7.63672C6.44694 8.21777 6.15365 8.77393 5.79395 9.30518C5.43978 9.83643 5.04134 10.293 4.59863 10.6748ZM10.0771 12.5342C9.45182 12.5342 8.88184 12.4512 8.36719 12.2852C7.85254 12.1191 7.38216 11.9255 6.95605 11.7041C6.52995 11.4827 6.13151 11.2974 5.76074 11.1479C6.22559 10.7218 6.62679 10.2404 6.96436 9.70361C7.30745 9.1613 7.57861 8.59684 7.77783 8.01025C7.98258 7.42367 8.10986 6.83984 8.15967 6.25879C8.46956 6.33626 8.78499 6.39437 9.10596 6.43311C9.42692 6.47184 9.75342 6.48844 10.0854 6.48291C10.7495 6.48291 11.4053 6.40267 12.0527 6.24219C12.0915 6.85091 12.2132 7.45133 12.418 8.04346C12.6227 8.63005 12.8994 9.1862 13.248 9.71191C13.5967 10.2376 14.009 10.7052 14.4849 11.1147C14.1086 11.2974 13.7018 11.4993 13.2646 11.7207C12.8275 11.9421 12.3433 12.133 11.812 12.2935C11.2863 12.4539 10.708 12.5342 10.0771 12.5342ZM15.5391 10.6333C15.0798 10.2183 14.6785 9.75065 14.3354 9.23047C13.9979 8.71029 13.724 8.1652 13.5137 7.59521C13.3034 7.02523 13.1733 6.46354 13.1235 5.91016C13.4777 5.77734 13.8485 5.60026 14.2358 5.37891C14.6232 5.15202 15.0023 4.89746 15.373 4.61523C15.7493 4.32747 16.0924 4.02311 16.4023 3.70215C16.5739 3.97331 16.7676 4.31917 16.9834 4.73975C17.1992 5.15479 17.4233 5.60579 17.6558 6.09277C17.8882 6.57975 18.1178 7.0695 18.3447 7.56201C18.5771 8.04899 18.7957 8.49723 19.0005 8.90674C19.2052 9.31624 19.3823 9.64827 19.5317 9.90283C19.3657 10.0024 19.1333 10.0799 18.8345 10.1353C18.5356 10.1851 18.223 10.2127 17.8965 10.2183C17.4538 10.2459 17.0387 10.2985 16.6514 10.376C16.2695 10.4479 15.8988 10.5337 15.5391 10.6333ZM2.34912 13.8706C1.76253 13.8706 1.27555 13.7516 0.888184 13.5137C0.506348 13.2757 0.31543 12.9409 0.31543 12.5093C0.31543 12.1883 0.437174 11.9448 0.680664 11.7788C0.929688 11.6128 1.20638 11.4993 1.51074 11.4385C1.7653 11.3776 2.00326 11.3306 2.22461 11.2974C2.4515 11.2642 2.67562 11.2144 2.89697 11.1479C3.42822 11.2365 3.97054 11.3997 4.52393 11.6377C5.07731 11.8812 5.59473 12.1413 6.07617 12.418C5.68327 12.8551 5.14648 13.2065 4.46582 13.4722C3.79069 13.7378 3.08512 13.8706 2.34912 13.8706ZM17.855 13.8872C17.368 13.8872 16.881 13.8263 16.394 13.7046C15.9126 13.5828 15.4671 13.4085 15.0576 13.1816C14.6536 12.9603 14.3244 12.6974 14.0698 12.3931C14.3631 12.216 14.6924 12.0389 15.0576 11.8618C15.4284 11.6903 15.8047 11.5409 16.1865 11.4136C16.5739 11.2863 16.9419 11.1978 17.2905 11.1479C17.5285 11.1756 17.7443 11.1978 17.938 11.2144C18.1372 11.231 18.353 11.2476 18.5854 11.2642C18.8123 11.2974 19.0282 11.3693 19.2329 11.48C19.4377 11.5851 19.6037 11.7235 19.731 11.895C19.8582 12.0721 19.9219 12.2796 19.9219 12.5176C19.9219 12.9548 19.7254 13.2923 19.3325 13.5303C18.9451 13.7682 18.4526 13.8872 17.855 13.8872ZM20.4531 9.5542C20.182 9.01742 19.908 8.47233 19.6313 7.91895C19.3602 7.36003 19.1222 6.88965 18.9175 6.50781C19.0835 6.38607 19.244 6.24495 19.3989 6.08447C19.5594 5.91846 19.7061 5.70817 19.8389 5.45361C19.9772 5.19906 20.1017 4.87809 20.2124 4.49072C20.3784 3.8654 20.6274 3.31755 20.9595 2.84717C21.297 2.37126 21.7148 2.00326 22.2129 1.74316C22.7165 1.48307 23.3031 1.35303 23.9727 1.35303C24.7474 1.35303 25.4253 1.55778 26.0063 1.96729C26.5929 2.37679 27.0467 2.94954 27.3677 3.68555C27.6886 4.41602 27.8491 5.26823 27.8491 6.24219C27.8491 6.66829 27.6969 7.03906 27.3926 7.35449C27.0882 7.66439 26.6566 7.90511 26.0977 8.07666C25.5443 8.24821 24.8885 8.33398 24.1304 8.33398C23.6047 8.33398 23.1426 8.39762 22.7441 8.5249C22.3457 8.65218 21.9666 8.81266 21.6069 9.00635C21.2528 9.1945 20.8682 9.37712 20.4531 9.5542ZM24.1802 5.45361C24.3905 5.45361 24.5731 5.37614 24.728 5.22119C24.8885 5.06624 24.9688 4.87533 24.9688 4.64844C24.9688 4.43262 24.8885 4.24723 24.728 4.09229C24.5731 3.9318 24.3905 3.85156 24.1802 3.85156C23.9533 3.85156 23.7624 3.9318 23.6074 4.09229C23.4525 4.24723 23.375 4.43262 23.375 4.64844C23.375 4.87533 23.4525 5.06624 23.6074 5.22119C23.7624 5.37614 23.9533 5.45361 24.1802 5.45361Z"
                        fill="#ABABAB"
                      />
                    </svg>
                  </span>
                  <div
                    className="featuresScreen__speedTrack"
                    role="slider"
                    aria-valuemin={10}
                    aria-valuemax={100}
                    aria-valuenow={45}
                    aria-label="Teleprompter scroll speed"
                    tabIndex={0}
                  >
                    <div className="featuresScreen__speedFill" />
                    <div className="featuresScreen__speedThumb" />
                  </div>
                  <span className="featuresScreen__speedIcon featuresScreen__speedIcon_rabbit" aria-hidden="true">
                    <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.397 17.606C13.0649 17.606 12.7329 17.5506 12.4009 17.4399C12.0688 17.3293 11.6925 17.0885 11.272 16.7178L7.86035 13.8623C7.78841 13.8623 7.71647 13.8651 7.64453 13.8706C7.57259 13.8706 7.50342 13.8706 7.43701 13.8706C6.60693 13.8706 5.84326 13.7848 5.146 13.6133C4.45426 13.4362 3.82894 13.154 3.27002 12.7666C2.71663 12.3792 2.23519 11.8646 1.82568 11.2227C1.29443 11.2282 0.857259 11.0926 0.51416 10.8159C0.171061 10.5337 -0.000488281 10.1574 -0.000488281 9.68701C-0.000488281 9.2609 0.148926 8.91781 0.447754 8.65771C0.752116 8.39209 1.13118 8.26481 1.58496 8.27588C1.96126 7.19124 2.45101 6.29476 3.0542 5.58643C3.65739 4.87809 4.34912 4.35238 5.12939 4.00928C5.9152 3.66064 6.76465 3.48633 7.67773 3.48633C8.375 3.48633 9.02523 3.56657 9.62842 3.72705C10.2316 3.882 10.8127 4.09782 11.3716 4.37451C11.936 4.64567 12.5088 4.95833 13.0898 5.3125C13.6764 5.66667 14.299 6.04297 14.9575 6.44141C15.4279 6.70703 15.854 6.93945 16.2358 7.13867C16.6232 7.33789 16.9884 7.4375 17.3315 7.4375C17.5695 7.4375 17.7743 7.39046 17.9458 7.29639C18.1229 7.19678 18.3027 7.06396 18.4854 6.89795L13.7871 3.90967C13.4385 3.68831 13.076 3.44482 12.6997 3.1792C12.3289 2.90804 12.0135 2.64242 11.7534 2.38232C11.4989 2.1167 11.3716 1.87598 11.3716 1.66016C11.3716 1.41667 11.4795 1.19531 11.6953 0.996094C11.9111 0.791341 12.1878 0.614258 12.5254 0.464844C12.863 0.309896 13.2144 0.193685 13.5796 0.116211C13.9504 0.038737 14.2879 0 14.5923 0C15.3504 0 16.103 0.196452 16.8501 0.589355C17.5972 0.982259 18.2695 1.59928 18.8672 2.44043L20.9424 5.37061C21.6396 5.354 22.2705 5.46468 22.835 5.70264C23.3994 5.94059 23.8864 6.27816 24.2959 6.71533C24.7054 7.15251 25.0208 7.66162 25.2422 8.24268C25.4635 8.82373 25.5742 9.44352 25.5742 10.1021C25.5742 10.8381 25.4552 11.4108 25.2173 11.8203C24.9849 12.2243 24.6335 12.5093 24.1631 12.6753C23.6982 12.8358 23.12 12.916 22.4282 12.916C21.9523 12.916 21.5151 12.8634 21.1167 12.7583C20.7183 12.6532 20.3447 12.512 19.9961 12.335C19.6475 12.1579 19.3154 11.9642 19 11.7539C18.6403 11.9255 18.311 12.0942 18.0122 12.2603C17.7189 12.4263 17.4395 12.5895 17.1738 12.75C16.9359 12.7057 16.6979 12.6753 16.46 12.6587C16.222 12.6366 15.9785 12.6255 15.7295 12.6255C15.4251 12.6255 15.1208 12.6393 14.8164 12.667C14.5176 12.6947 14.2298 12.7362 13.9531 12.7915L13.3887 11.4883C12.791 10.1104 12.0052 9.08382 11.0312 8.40869C10.0573 7.73356 8.93669 7.396 7.66943 7.396C7.26546 7.396 6.90299 7.4458 6.58203 7.54541C6.2666 7.64502 6.10889 7.84147 6.10889 8.13477C6.10889 8.31738 6.16699 8.45296 6.2832 8.5415C6.39941 8.63005 6.5516 8.67432 6.73975 8.67432H7.74414C8.4082 8.67432 9.02523 8.79883 9.59521 9.04785C10.1707 9.29688 10.6854 9.65934 11.1392 10.1353C11.5929 10.6112 11.9748 11.1867 12.2847 11.8618L13.231 13.9536C13.48 13.9038 13.7179 13.854 13.9448 13.8042C14.1772 13.7489 14.4401 13.7046 14.7334 13.6714C15.0267 13.6326 15.3864 13.6133 15.8125 13.6133C16.6592 13.6133 17.3813 13.7267 17.979 13.9536C18.5767 14.1805 19.0332 14.4904 19.3486 14.8833C19.6641 15.2707 19.8218 15.7051 19.8218 16.1865C19.8218 16.6348 19.6558 16.9834 19.3237 17.2324C18.9917 17.4814 18.5186 17.606 17.9043 17.606C17.6276 17.606 17.3896 17.5811 17.1904 17.5312C16.9912 17.4814 16.7754 17.4344 16.543 17.3901C16.3105 17.3459 16.009 17.3237 15.6382 17.3237C15.0959 17.3237 14.6587 17.3708 14.3267 17.4648C14.0002 17.5589 13.6903 17.606 13.397 17.606ZM7.06348 18.2783C6.17806 18.2783 5.46973 18.1095 4.93848 17.772C4.41276 17.4399 4.1499 16.9972 4.1499 16.4438C4.1499 16.0731 4.28271 15.777 4.54834 15.5557C4.8195 15.3288 5.18473 15.2153 5.64404 15.2153C5.882 15.2153 6.11442 15.2264 6.34131 15.2485C6.5682 15.2651 6.77572 15.2845 6.96387 15.3066C7.15755 15.3288 7.3208 15.3398 7.45361 15.3398C7.53662 15.3398 7.61133 15.3371 7.67773 15.3315C7.74414 15.326 7.80778 15.3205 7.86865 15.3149L10.4087 17.4565C10.0047 17.7222 9.53988 17.9242 9.01416 18.0625C8.48844 18.2064 7.83822 18.2783 7.06348 18.2783ZM21.9385 9.77832C22.1543 9.77832 22.3369 9.69808 22.4863 9.5376C22.6413 9.37158 22.7188 9.18066 22.7188 8.96484C22.7188 8.75456 22.644 8.57471 22.4946 8.42529C22.3452 8.27588 22.1626 8.20117 21.9468 8.20117C21.7365 8.20117 21.5539 8.28141 21.3989 8.44189C21.2495 8.60238 21.1748 8.78776 21.1748 8.99805C21.1748 9.20833 21.2495 9.39095 21.3989 9.5459C21.5483 9.70085 21.7282 9.77832 21.9385 9.77832Z"
                        fill="#ABABAB"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <p className="featuresScreen__text">Paste your script, adjust the scrolling speed, and start speaking.</p>
          </div>
          <div className="featuresScreen__mockupWrapper">
            <div className="featuresScreen__prompterDevice">
              <div className="featuresScreen__header">
                <img src="/camera_eye.avif" alt="" />
              </div>
              <div className="demo__telepromter">
                <div className="demo__shapes">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100" fill="none">
                    <path fill="black" d="M 100 0 L 0 0 Q 100 0 100 100 Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100" fill="none">
                    <path fill="black" d="M 0 0 L 100 0 Q 0 0 0 100 Z" />
                  </svg>
                </div>
                <div className="demo__telepromterViewport">
                  <div className="demo__telepromterTrack" id="featuresTeleprompterTrack">
                    <div className="demo__telepromterColumn">{TELEPROMPTER_COLUMN}</div>
                    <div className="demo__telepromterColumn" aria-hidden="true">
                      {TELEPROMPTER_COLUMN}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="featuresScreen__text">
              <span className="logo" style={{ fontSize: 'inherit' }}>
                Talk<span style={{ fontSize: 'inherit' }}>Y</span>
              </span>{' '}
              stays on top of your screen so your script is always visible while using any other app.
            </p>
          </div>
        </div>
        <div className="featuresScreen__info">
          <ul className="featuresScreen__tags">
            <li className="featuresScreen__tagWrapper">
              <div className="featuresScreen__tagBackground" />
              <div className="featuresScreen__tag">
                <div className="featuresScreen__tagIconBg" />
                <img src="/features_block_icon_1_test.png" width="42" height="42" alt="" style={{ zIndex: 2 }} />
                Smooth scrolling
              </div>
            </li>
            <li className="featuresScreen__tagWrapper">
              <div className="featuresScreen__tagBackground" />
              <div className="featuresScreen__tag">
                <div className="featuresScreen__tagIconBg" />
                <img src="/features_block_icon_2_test.png" width="42" height="42" alt="" style={{ zIndex: 2 }} />
                Adjustable speed
              </div>
            </li>
            <li className="featuresScreen__tagWrapper">
              <div className="featuresScreen__tagBackground" />
              <div className="featuresScreen__tag">
                <div className="featuresScreen__tagIconBg" />
                <img src="/features_block_icon_3_test.png" width="42" height="42" alt="" style={{ zIndex: 2 }} />
                Always on top
              </div>
            </li>
            <li className="featuresScreen__tagWrapper">
              <div className="featuresScreen__tagBackground" />
              <div className="featuresScreen__tag">
                <div className="featuresScreen__tagIconBg" />
                <img src="/features_block_icon_4_test.png" width="42" height="42" alt="" style={{ zIndex: 2 }} />
                Clean distraction-free interface
              </div>
            </li>
          </ul>
          <p className="featuresScreen__footnote">Built specifically for MacOS 15.6 or later.</p>
        </div>
      </div>
    </section>
  );
}
