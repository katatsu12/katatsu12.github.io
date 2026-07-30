/**
 * Cloudflare Web Analytics beacon token.
 *
 * Get it from the Cloudflare dashboard: Analytics & Logs → Web Analytics →
 * add katatsu12.github.io, then copy the `token` value out of the snippet it
 * shows you. It is a public identifier (it ships in the HTML of every page),
 * so it belongs in the repo rather than in a secret.
 *
 * Leave empty to disable — no beacon script is emitted at all.
 */
export const cfBeaconToken = '5039e047241c4b1b945a92c335ada01e';

/**
 * Umami website ID.
 *
 * Cloudflare reports "visits" (page views arriving from off-site) but never
 * unique people — it holds no per-visitor identity at all. Umami fills that
 * gap: it derives a daily-rotating identifier, so it reports unique visitors
 * per day without cookies or a consent banner. It also supports the
 * `data-umami-event` click tracking that Cloudflare has no equivalent for.
 *
 * Get it from umami.is → Cloud → add katatsu12.github.io → Website ID. Like
 * the Cloudflare token it ships in the page HTML, so it is not a secret.
 *
 * Leave empty to disable — no script is emitted at all.
 */
export const umamiWebsiteId = '83d2697a-838d-4ff3-a2f7-dab9e519ea7b';
