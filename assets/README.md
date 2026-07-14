Place the distributable app file here (e.g. `TalkY.dmg`).

It is served only through the authenticated `/api/download` route (never from `public/`),
gated by a verified Stripe checkout session + a signed, time-limited download token.

The exact filename is controlled by the `TALKY_DOWNLOAD_FILE` env var (defaults to `TalkY.dmg`).



