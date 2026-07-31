import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import BalancePage from "@pages/Balance/BalancePage";
import ArticlePage from "@pages/Blogs/ArticlePage";
import NutritionalPage from "@pages/Nutritional/NutritionalPage";

import { balanceContent } from "@content/balance/balance";
import { articles } from "@content/blogs/articles";
import { productsData } from "@content/nutritional/products";

/**
 * These three pages used to mirror URL-derived data into state and fill it in
 * an effect. The first render therefore always saw an empty value and returned
 * the 404 page, which flashed on screen — and mounted its <Seo>, briefly
 * putting a "not found" title and canonical on a perfectly valid page.
 *
 * The flash lives entirely in the first commit, so it cannot be caught through
 * Testing Library: `render` runs inside act(), which flushes effects before it
 * returns, and even a synchronous getBy* query already sees the second render.
 * Verified by mutation — restoring the old useState + useEffect pattern kept
 * every DOM-based assertion green.
 *
 * renderToString does not run effects, so its output *is* the first render.
 * That is what the no-flash assertions below check.
 */

function tree(path: string, pattern: string, element: React.ReactElement) {
  return (
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={pattern} element={element} />
      </Routes>
    </MemoryRouter>
  );
}

function renderAt(path: string, pattern: string, element: React.ReactElement) {
  return render(tree(path, pattern, element));
}

/** Markup of the very first render, before any effect has run. */
function firstRender(path: string, pattern: string, element: React.ReactElement) {
  return renderToString(tree(path, pattern, element));
}

const NOT_FOUND = /no encontrada/i;

describe("pages render their content on the first pass", () => {
  it("BalancePage shows the balance content, never the 404 first", () => {
    const [key] = Object.keys(balanceContent);
    const expected =
      balanceContent[key as keyof typeof balanceContent].hero.title;

    const html = firstRender(`/${key}`, "/:balanceType", <BalancePage />);

    expect(html).toContain(expected);
    expect(html).not.toMatch(NOT_FOUND);
  });

  it("ArticlePage shows the article, never the 404 first", () => {
    const [article] = articles;

    const html = firstRender(
      `/${article!.category}/${article!.slug}`,
      "/:category/:slug",
      <ArticlePage />,
    );

    expect(html).toContain(article!.title);
    expect(html).not.toMatch(NOT_FOUND);
  });

  it("ArticlePage still resolves the related articles", () => {
    const article = articles.find((a) => a.relatedArticles.length > 0);
    expect(article, "no article has related entries").toBeDefined();

    renderAt(
      `/${article!.category}/${article!.slug}`,
      "/:category/:slug",
      <ArticlePage />,
    );

    // The related list was assembled inside the effect; it has to survive the
    // move to a derived value.
    for (const related of article!.relatedArticles) {
      expect(screen.getByText(related.title)).toBeInTheDocument();
    }
  });

  it("NutritionalPage shows the product, never the 404 first", () => {
    const [product] = productsData;

    const html = firstRender(
      `/productos/${product!.slug}`,
      "/productos/:productSlug",
      <NutritionalPage />,
    );

    expect(html).toContain(product!.name);
    expect(html).not.toMatch(NOT_FOUND);
  });

  it("NutritionalPage lists the other products without repeating the active one", () => {
    const [product] = productsData;

    renderAt(
      `/productos/${product!.slug}`,
      "/productos/:productSlug",
      <NutritionalPage />,
    );

    // otherProducts was state synced by an effect, so it lagged a render
    // behind and could briefly include the active product.
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
    for (const button of buttons) {
      expect(button).not.toHaveTextContent(product!.name);
    }
  });
});

describe("pages still show the 404 for unknown URLs", () => {
  it("BalancePage on an unknown type", () => {
    renderAt("/no-existe", "/:balanceType", <BalancePage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(NOT_FOUND);
  });

  it("ArticlePage on an unknown slug", () => {
    renderAt("/a/b", "/:category/:slug", <ArticlePage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(NOT_FOUND);
  });

  it("NutritionalPage on an unknown product", () => {
    renderAt("/productos/no-existe", "/productos/:productSlug", <NutritionalPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(NOT_FOUND);
  });
});
