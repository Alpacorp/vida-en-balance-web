import { useLocation } from "react-router-dom";

import { Footer, Header } from "@ui/index";

import { ErrorBoundary } from "@ui/components/ErrorBoundary/ErrorBoundary";

import { ScrollToTop } from "@utils/scrollToTop";

import AppRoutes from "@routes/AppRoutes";

/**
 * The shell rendered by both entry points: main.tsx in the browser and
 * entry-server.tsx while prerendering. It deliberately owns no router — each
 * entry supplies its own (BrowserRouter or StaticRouter).
 */
export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      {/*
        Header is position:fixed, so it is out of flow and never occupies a
        row or a flex slot. Only main and Footer are in flow. A three-row
        grid template silently handed the flexible row to the Footer and left
        a third row empty, stretching the Footer on short pages.

        Flex column avoids the trap: main takes the free space regardless of
        how many children are in flow. min-w-0 lets main shrink below its
        content's intrinsic width instead of widening the page.
      */}
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="min-w-0 flex-1">
          {/*
            Keyed to the path so that navigating away clears a failed page
            instead of leaving the visitor stuck on the error for the rest of
            the session. It is a prop rather than `key` on purpose: `key` would
            remount AppRoutes on every navigation and throw away the Suspense
            state of routes already loaded.
          */}
          <ErrorBoundary resetKey={pathname}>
            <AppRoutes />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
}
