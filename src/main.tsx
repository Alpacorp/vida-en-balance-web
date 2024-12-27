import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Footer, Header } from "@ui/index.tsx";

import AppRoutes from "./routes/AppRoutes";

import "./styles.css";
import {ScrollToTop} from "@utils/scrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <main className="grid min-h-dvh grid-rows-[auto,1fr,auto]">
        <Header />
        <AppRoutes />
        <Footer />
      </main>
    </BrowserRouter>
  </StrictMode>
);
