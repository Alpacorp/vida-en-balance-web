# Vida en Balance

Marketing site for San Rafael Balance®: articles, recipes and product pages.

React 19 + TypeScript + Vite 8, styled with Tailwind CSS v4. The site is a
client-side SPA that is **prerendered to static HTML at build time**, so every
route ships as a real HTML file.

## Getting started

```bash
npm install
npm run dev          # http://localhost:5173
```

Create a `.env` with the URL the build should treat as the site's own origin:

```
VITE_BASE_URL=https://vida-en-balance-web.vercel.app
```

It is used for canonical URLs, Open Graph images, the sitemap, and to decide
whether the build is indexable (see [Environments](#environments)).

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR. Nothing is prerendered here. |
| `npm run build` | Type-checks, builds the client, builds the server bundle, then prerenders. |
| `npm run preview` | Serves `dist/`. Note: it falls back to `index.html` for every path, so it cannot show you the prerendered per-route files. |
| `npm run typecheck` | `tsc -b` for app code, then a second pass for tests. |
| `npm test` | Vitest, single run. |
| `npm run test:watch` / `test:coverage` | Watch mode / coverage report. |
| `npm run lint` / `lint:fix` | ESLint, type-aware. |
| `npm run build:analyze` | Build with a bundle treemap at `bundle-report.html`. Skips prerendering. |

## How the build works

`npm run build` runs four steps in order:

1. `tsc -b` — type-checks the app.
2. `vite build` — the normal client bundle into `dist/`.
3. `vite build --ssr src/entry-server.tsx` — the same app bundled for Node, into
   `dist-ssr/`.
4. `node scripts/prerender.mjs` — renders every route and writes the output.

Step 4 produces, for each URL in [`src/routes/siteRoutes.ts`](src/routes/siteRoutes.ts):

- `dist/<route>/index.html` containing the fully rendered page, with its own
  `<title>`, description, canonical and Open Graph tags in `<head>`;
- `dist/sitemap.xml`, listing exactly those URLs;
- `dist/robots.txt`, which depends on the environment.

In the browser, `src/main.tsx` **hydrates** that markup rather than re-rendering
it, so React attaches to the existing DOM and the page is not repainted.

### Why prerender

Social crawlers — WhatsApp, Facebook, LinkedIn, X — do not execute JavaScript.
Against a plain SPA they only ever saw the empty `index.html`, so every shared
link previewed with the same generic title and no image regardless of which
article it pointed at. Search engines do run JS, but on a second pass and on
their own schedule.

### Adding a page

Routes are derived from the content modules in `src/content/`. Adding an article
or a product to those files is enough: `listSiteRoutes()` picks it up, and the
page is prerendered and added to the sitemap on the next build. If you add a new
*kind* of page, add it to `src/routes/AppRoutes.tsx` **and** to
`src/routes/siteRoutes.ts` — `src/routes/siteRoutes.test.ts` will fail until the
second one is done.

## Environments

Only the origins listed in `PRODUCTION_ORIGINS` (`src/config/config.ts`) are
allowed into a search index. Any other build — a Vercel preview, a local
`vite preview` — gets `noindex` on every page and a `Disallow: /` robots.txt.
This is derived from `VITE_BASE_URL`, so no extra variable has to be kept in
sync between hosting providers.

| Environment | Where | Indexable |
| --- | --- | --- |
| Production | Azure (Docker + Nginx), built by `azure-pipelines.yml` | yes |
| Test | Vercel | no |

Nginx serves the prerendered files through `try_files $uri $uri/ /index.html`:
`/recetas/x` resolves to `dist/recetas/x/index.html`, and anything unmatched
falls back to the SPA.

## Testing

Vitest with jsdom and Testing Library. The suites worth knowing about:

- `src/content/content.test.ts` — the highest-value one. Site content is
  hand-written data whose image paths and internal links TypeScript cannot
  check; a typo there ships as a broken image or a 404. This asserts every
  referenced asset exists under `public/`.
- `src/routes/AppRoutes.test.tsx` — smoke test for every route, pinning the
  precedence between overlapping dynamic segments.
- `src/routes/siteRoutes.test.ts` — that the prerender/sitemap list matches the
  content it is derived from.
- `src/pages/pages.test.tsx` — that pages render their content on the *first*
  render. These use `renderToString`, not Testing Library: `render` runs inside
  `act()` and flushes effects, so a first-render bug is invisible to it.

## Project layout

```
src/
  App.tsx            shell shared by the browser and the prerenderer
  main.tsx           browser entry — hydrates the prerendered markup
  entry-server.tsx   build-time entry — renders a route to HTML
  config/            environment-derived values (base URL, indexability)
  content/           all site copy and data
  interfaces/        shared types
  pages/             one component per route
  routes/            route table and the prerendered URL list
  ui/                components and sections
  utils/             Seo, route prefetching, scroll restoration
scripts/
  prerender.mjs      the build step described above
```
