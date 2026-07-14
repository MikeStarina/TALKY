import { Logo } from '../Logo';
import Script from 'next/script';

export function VideoScreen() {
  return (
    <section className="videoScreen">
      <div className="videoScreen__videoBlock">
        <div className="videoScreen__videoWrapper">
          <div className="videoScreen__mainVideoWrapper">
            <div className="videoScreen__mainVideo" id="vidalytics_embed_gNaiNBBi27wUbYNU"></div>
            <Script type="text/javascript">
              {`(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_gNaiNBBi27wUbYNU', 'https://fast.vidalytics.com/embeds/nPP99Lt9/gNaiNBBi27wUbYNU/');`}
            </Script>
            {/* <video
              className="videoScreen__mainVideo"
              width="815"
              height="529"
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholders/talky_poster.avif"
            >
              <source src="/videos/talky_main_hevc.mp4" type="video/mp4" />
              <source src="/videos/talky_main.webm" type="video/webm; codecs=vp9" />
              <source src="/videos/talky_main_av1.mp4" type="video/mp4" />
            </video> */}
            {/* <div className="videoScreen__muteIndicator" id="videoScreenMuteIndicator" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="22" y1="9" x2="16" y2="15" />
                <line x1="16" y1="9" x2="22" y2="15" />
              </svg>
            </div> */}
          </div>
        </div>
        <video
          className="videoScreen__bgVideo"
          width="935"
          height="659"
          autoPlay
          muted
          loop
          playsInline
          // preload="none"
          poster="/placeholders/borders_placeholder.webp"
        >
          <source data-deferred-src="/videos/02_borders_v9.webm" type="video/webm; codecs=vp9" />
          <source data-deferred-src="/videos/02_borders_av1.mp4" type="video/mp4; codecs=av01.0.05M.08" />
          <source data-deferred-src="/videos/02_borders_h265.mp4" type="video/mp4; codecs=hvc1" />
        </video>
      </div>
      <div className="videoScreen__textWrapper">
        <h2 className="videoScreen__title">
          <span className="videoScreen__titleGradient">See</span>
          <Logo style={{ fontSize: 'inherit' }} />
          <span className="videoScreen__titleGradient">in action</span>
        </h2>
        <p className="videoScreen__text">
          A quick look at how <Logo /> keeps your script flowing while you speak.
        </p>
      </div>
    </section>
  );
}
