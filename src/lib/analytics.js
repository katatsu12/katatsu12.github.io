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
export const cfBeaconToken = '';
