export function FooterVideo({ deferred = false }: { deferred?: boolean }) {
  const sources = [
    { url: '/videos/05_waves.webm', type: 'video/webm' },
    { url: '/videos/05_waves_h265.mp4', type: 'video/mp4' },
    { url: '/videos/05_waves_av1.mp4', type: 'video/mp4' },
  ];

  return (
    <video
      className="footerVideo"
      width="1440"
      height="539"
      muted
      autoPlay
      loop
      playsInline
      // preload={deferred ? 'none' : undefined}
      poster="/placeholders/footer_v1_placeholder.webp"
    >
      {sources.map((source) =>
        deferred ? (
          <source key={source.url} src={source.url} type={source.type} />
        ) : (
          <source key={source.url} src={source.url} type={source.type} />
        ),
      )}
    </video>
  );
}
