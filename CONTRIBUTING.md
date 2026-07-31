# Working on this project

Conventions, and the traps that are not visible from the code. Read the
[README](README.md) first for what the build does; this is about how we work.

Written in English, like the comments, tests and commit messages. Only what a
visitor reads — copy, `alt` text, `aria-label`s, everything under
`src/content/` — is in Spanish.

## Branches and commits

- **Never commit to `main`.** One branch per block of work, merged through a PR.
  Prefixes in use: `feat/`, `fix/`, `chore/`, `perf/`, `refactor/`, `test/`,
  `ci/`, `a11y/`.
- Commit messages explain **why**, not what — the diff already says what. If a
  change looks arbitrary without context, that context belongs in the message.
- Do not add tool signatures or `Co-Authored-By` trailers for AI assistants.
- Beware of `git checkout -b <branch> origin/main`: it sets `origin/main` as the
  upstream, so a bare `git push` targets `main`. Run `git branch
  --unset-upstream` and push with `-u origin <branch>`.

Git warns `LF will be replaced by CRLF` on Windows. That is the normal
`core.autocrlf` behaviour, not a problem to fix — the repository stores LF.

## Before you push

```bash
npm run lint && npm run typecheck && npm test && npm run build
```

The build is part of it, not an afterthought: it is where the prerendering
guards live, and they catch things no test does.

## Testing

The suites here are meant to guard behaviour, not to raise a coverage number.
Two habits are worth keeping:

**Prove a test fails.** Break the code it covers, on purpose, and check the test
goes red. Twice this session a suite passed against the very bug it claimed to
prevent. A test that cannot fail is worse than no test — it reads as a
guarantee.

**Verify against build output, not source.** Several defects here were invisible
in the code and obvious in `dist/`: metadata in the wrong place, content hidden
behind a script, an `og:image` pointing at a file that does not exist.

Note that `render` from Testing Library runs inside `act()` and flushes effects,
so it cannot see a first-render bug. `src/pages/pages.test.tsx` uses
`renderToString` for exactly this reason.

## Adding content

Articles, products and recipes live in `src/content/`. Adding an entry there is
enough: it is picked up by `listSiteRoutes()`, prerendered, and added to the
sitemap on the next build.

Adding a new *kind* of page needs two edits — `src/routes/AppRoutes.tsx` and
`src/routes/siteRoutes.ts`. `src/routes/siteRoutes.test.ts` fails until the
second one is done, so you will not ship a page that no crawler can find.

Recipes are addressed by `slug`, written out in the content rather than derived
from the title, so that rewording a title cannot silently change a live URL.
Changing a published slug orphans its inbound links; if you must,
`listLegacyRecipeRedirects()` in `siteRoutes.ts` is where old URLs are kept
alive.

## Where components go

- `ui/components/` — reusable and presentational, driven entirely by props, with
  no knowledge of which page is showing them.
- `ui/sections/` — a block belonging to one area of the site, grouped by that
  area (`Home/`, `Global/`, `Nutritional/`). It may read content modules
  directly.
- `ui/layouts/` — arranges a whole page type, e.g. `ArticleLayout`.

Shared types live in `src/interfaces/interfaces.d.ts`. Despite the extension it
is a normal module — it has top-level exports, so every type is imported where
it is used. It does hold two unrelated things at once: the shape of the content
under `src/content/`, and the props of individual components. Prefer defining
new props next to the component that uses them, and keep that file for types
more than one place needs.

## Things that will bite you

**`npm run preview` cannot verify prerendering.** It falls back to `index.html`
for every path, so every route looks like the home page. To check the real
output, serve `dist/` under the `try_files $uri $uri/ /index.html` rule from
`nginx.conf`.

**`progressiveChunkSize` in `src/entry-server.tsx` is load-bearing.** React
flushes the shell once its buffer passes that size, and any Suspense boundary
resolving afterwards is written as a hidden `<div>` plus a script that moves it
on load — content that only exists if JavaScript runs, which is what
prerendering exists to avoid. Every route sits behind a `lazy()` import, so
every route is affected. `scripts/prerender.mjs` fails the build if it
reappears.

**CI installs with `npm install`, not `npm ci`.** Do not change it back. The
wasm fallbacks of `@tailwindcss/oxide` and `@rolldown/binding` reach `@emnapi/*`
through optional, platform-gated dependencies, and npm on Windows leaves parts
of those subtrees out of the lockfile it writes; Linux then refuses to install.
Regenerating the lockfile on Windows makes it worse, and pinning the npm version
does not help. The Dockerfile that builds production installs the same way.

**`Dockerfile` and `nginx.conf` are off limits** by agreement with the client.
This is why redirects are prerendered pages with a canonical rather than real
301s, and why `vite-plugin-compression` stays (Nginx serves the `.gz` files with
`gzip_static`).

**Only the origins in `PRODUCTION_ORIGINS`** (`src/config/config.ts`) are
indexable. Any other build — a Vercel preview, a local one — ships `noindex` on
every page and a `Disallow: /` robots.txt. If the site moves to a new domain and
it is not in that list, it will quietly refuse to be indexed.

**Social preview images must be landscape.** Facebook and WhatsApp only render
the large preview for roughly 1.91:1 images; a portrait one previews as nothing
at all, even though the file exists and is reachable. The build fails if an
`og:image` is missing from the output, but it cannot judge the shape.

**Anything hidden must be hidden from the keyboard too.** `opacity-0`,
`max-height: 0` and `overflow: hidden` remove something from sight and from
nothing else: its links stay in the tab order, and focus disappears off screen.
Use `inert`. This bit twice — the carousel slides and the mobile menu.

**Do not read the clock during render.** Every route is prerendered, so the HTML
carries the value from build time while the browser computes a fresh one; the
mismatch makes React discard the hydrated tree and re-render the whole root. The
copyright year comes from `__BUILD_YEAR__`, defined in `vite.config.ts`.
