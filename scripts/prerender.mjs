/**
 * Turns the SPA build into one static HTML file per route.
 *
 * Why: social crawlers (WhatsApp, Facebook, LinkedIn, X) never execute
 * JavaScript. Against a plain SPA they only ever saw the empty index.html, so
 * every shared link previewed with the same generic title and no image no
 * matter which article it pointed at. Search engines do run JS, but they do it
 * on a second pass and on their own schedule.
 *
 * Writing the markup at build time means the first byte already contains the
 * page, its <title>, its canonical and its Open Graph tags. React then hydrates
 * the same markup in the browser, so behaviour is unchanged for real users.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle);
 * see the "build" script in package.json.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SERVER_ENTRY = join(ROOT, "dist-ssr", "entry-server.js");

const { renderPage, listSiteRoutes, IS_INDEXABLE, SITE_URL } = await import(
  pathToFileURL(SERVER_ENTRY).href
);

const ROOT_PLACEHOLDER = '<div id="root"></div>';

const template = await readFile(join(DIST, "index.html"), "utf8");

if (!template.includes(ROOT_PLACEHOLDER)) {
  throw new Error(
    `dist/index.html does not contain ${ROOT_PLACEHOLDER}; the prerendered ` +
      `markup would have nowhere to go.`,
  );
}

/** `/` -> `index.html`, `/recetas/x` -> `recetas/x/index.html`. */
const fileFor = (route) =>
  join(DIST, route === "/" ? "index.html" : join(route, "index.html"));

const escapeXml = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[char],
  );

const routes = listSiteRoutes();

/**
 * index.html carries a generic title and description so `npm run dev` is not
 * blank before React mounts. Both have to go before the real ones are injected:
 * browsers and crawlers keep the first occurrence they parse, so leaving them
 * would give every prerendered page the same generic metadata.
 */
const stripPlaceholderMeta = (html) =>
  html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/?>/i, "");

for (const route of routes) {
  const { head, body } = await renderPage(route);

  // A boundary React deferred is markup that only appears once the browser runs
  // the inline $RC script — invisible to anything that does not execute
  // JavaScript, which is the entire reason this step exists. The
  // progressiveChunkSize set in entry-server should prevent it; if one slips
  // through, the page is not really prerendered and shipping it silently would
  // be worse than failing here.
  if (body.includes('<div hidden id="S:')) {
    throw new Error(
      `${route} still has a deferred Suspense boundary: its content would be ` +
        `hidden until JavaScript runs.`,
    );
  }

  const html = stripPlaceholderMeta(template)
    .replace("</head>", `${head}</head>`)
    .replace(ROOT_PLACEHOLDER, body);

  const file = fileFor(route);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${escapeXml(SITE_URL + route)}</loc></url>`).join("\n")}
</urlset>
`;
await writeFile(join(DIST, "sitemap.xml"), sitemap, "utf8");

// The test deployments answer on their own hostname. Left crawlable they
// compete with production for the same content, which is how a staging URL
// ends up outranking the real site.
const robots = IS_INDEXABLE
  ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
  : `User-agent: *\nDisallow: /\n`;
await writeFile(join(DIST, "robots.txt"), robots, "utf8");

console.log(
  `prerendered ${routes.length} routes · sitemap written · ` +
    `robots: ${IS_INDEXABLE ? "indexable" : "noindex"} (${SITE_URL || "no VITE_BASE_URL"})`,
);
