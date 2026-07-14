export function initHeroWaterfallPlaceholder(): void {
  const wrapper = document.querySelector('.hero__videoWrapper');
  const video = document.querySelector<HTMLVideoElement>('.hero__waterfall');
  if (!wrapper || !video) return;

  video.addEventListener('canplaythrough', () => {
    wrapper.classList.add('hero__videoWrapper--videoReady');
  }, { once: true });
}

/**
 * On narrow viewports, drop the desktop `<source>` entries and keep only the
 * mobile ones so the browser doesn't have to (mis)pick via `media` queries.
 * Mirrors the inline `<script>` that used to sit right after the hero video tag.
 */
export function initHeroWaterfallMobileSourceSwap(): void {
  const video = document.querySelector<HTMLVideoElement>('.hero__waterfall');
  if (!video) return;
  const isMobile = window.innerWidth <= 1024;
  if (!isMobile) return;

  video.innerHTML =
    '<source src="/videos/01_waterfall_v9_mobile.webm" type="video/webm; codecs=vp9">' +
    '<source src="/videos/01_waterfall_h265_mobile.mp4" type="video/mp4; codecs=hvc1">';
  video.load();
}
