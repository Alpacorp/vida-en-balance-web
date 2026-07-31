export const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Origins whose pages are allowed into a search index. Anything else — the
 * Vercel test deployments, a local preview, a future staging slot — is built
 * with `noindex` on every page and a `Disallow: /` robots.txt.
 *
 * Deriving this from the build's own base URL keeps it zero-config: the Azure
 * pipeline already injects VITE_BASE_URL, so no extra variable has to be kept
 * in sync across two hosting providers.
 */
const PRODUCTION_ORIGINS = [
  "https://webapp-vida-en-balance-prd.azurewebsites.net",
  "https://vidaenbalance.com",
  "https://www.vidaenbalance.com",
];

/** Trailing slashes vary between providers; compare without one. */
export const SITE_URL = (BASE_URL ?? "").replace(/\/+$/, "");

export const IS_INDEXABLE = PRODUCTION_ORIGINS.includes(SITE_URL);

/**
 * Preview image for pages that have none of their own.
 *
 * It has to be landscape. Facebook and WhatsApp only render the large preview
 * for images around 1.91:1 and fall back to a thumbnail — or to nothing — for
 * portrait ones, which is why the recipe pages shared without an image even
 * though their photo existed and was reachable.
 */
export const DEFAULT_SOCIAL_IMAGE = "/assets/images/disfruta-cuidandote.webp";

/** Turns a site-relative asset path into the absolute URL crawlers require. */
export const toAbsoluteUrl = (path: string): string =>
  /^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
