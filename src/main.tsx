import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Footer, Header } from "@ui/index";

import { ScrollToTop } from "@utils/scrollToTop";

import AppRoutes from "./routes/AppRoutes";

import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
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
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
