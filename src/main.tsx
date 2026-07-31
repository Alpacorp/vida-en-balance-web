import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles.css";

const container = document.getElementById("root")!;

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// `npm run build` prerenders every route into static markup, so in production
// the container already holds the page and React only has to attach to it.
// `npm run dev` serves the untouched index.html with an empty container, where
// hydrateRoot would report a mismatch against nothing — mount normally there.
if (container.firstChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
