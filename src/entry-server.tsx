import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router-dom";

import App from "./App";

import { IS_INDEXABLE, SITE_URL } from "@config/config";
import { listSiteRoutes } from "@routes/siteRoutes";

export { listSiteRoutes, IS_INDEXABLE, SITE_URL };

/**
 * Written by hand right here, so splitting the output on it is exact rather
 * than a guess at how React formatted the markup.
 */
const ROOT_OPEN = '<div id="root">';

export interface RenderedPage {
  /** Hoistable tags React lifted out of the tree: title, meta, canonical. */
  head: string;
  /** The full <div id="root">…</div> element, ready to replace the empty one. */
  body: string;
}

/**
 * Renders one route to static markup.
 *
 * prerender is used rather than renderToString because the route components are
 * lazy(): renderToString would emit the Suspense fallback and every prerendered
 * page would be a spinner. prerender waits for the boundaries to settle, so the
 * markup contains the real page.
 *
 * React hoists <title>, <meta> and <link> to the very front of the stream —
 * ahead of the <div id="root"> written above — which is what makes the split
 * below possible. Crawlers that never run JS need those tags in <head>, and
 * this is how they get there.
 */
export async function renderPage(url: string): Promise<RenderedPage> {
  let failure: unknown = null;

  const { prelude } = await prerender(
    <div id="root">
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </div>,
    {
      // React streams: it flushes the shell as soon as the buffer passes this
      // size, and any Suspense boundary that resolves after that flush can no
      // longer be written in place. It goes out instead as a <div hidden> at
      // the end of the document plus an inline $RC(…) script that moves it
      // where it belongs — markup that only exists once JavaScript runs, which
      // is precisely what this build step is meant to stop depending on.
      //
      // Every route sits behind a lazy() import, so every route resolves after
      // the shell. A ceiling well above any page here keeps React from
      // flushing early, and the content is written inline.
      progressiveChunkSize: 100_000_000,
      // Without this a thrown error becomes a silent Suspense fallback and the
      // build would happily ship a broken page.
      onError(error) {
        failure ??= error;
      },
    },
  );

  const reader = prelude.getReader();
  const decoder = new TextDecoder();
  let html = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    html += decoder.decode(value, { stream: true });
  }
  html += decoder.decode();

  if (failure) {
    throw failure instanceof Error
      ? failure
      : new Error(`Prerendering ${url} failed: ${JSON.stringify(failure)}`);
  }

  const rootAt = html.indexOf(ROOT_OPEN);
  if (rootAt === -1) {
    throw new Error(`Prerendering ${url} produced no ${ROOT_OPEN} element.`);
  }

  return { head: html.slice(0, rootAt), body: html.slice(rootAt) };
}
