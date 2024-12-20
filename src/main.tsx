import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./ui/components/Header/Header.tsx";
import { Footer } from "./ui/components/Footer/Footer.tsx";

import AppRoutes from "./routes/AppRoutes";

import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <main className="grid min-h-dvh grid-rows-[auto,1fr,auto]">
        <Header />
        <AppRoutes />
        <Footer />
      </main>
    </BrowserRouter>
  </StrictMode>
);
