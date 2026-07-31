import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import { balanceContent } from "@content/balance/balance";
import { articles } from "@content/blogs/articles";
import { productsData as nutritionalProducts } from "@content/nutritional/products";
import { productsData as recipeProducts } from "@content/recipes/recipes";
import { recipesDetails } from "@content/recipes/recipesDetails";

/**
 * Smoke test for every route.
 *
 * The route table leans on dynamic segments — /:balanceType and
 * /:category/:slug are effectively catch-alls — so precedence is decided by
 * react-router's ranking rather than by declaration order. That makes it
 * fragile across router upgrades: a change in ranking silently sends
 * /productos to BalancePage instead of ProductsPage, and nothing in the type
 * system or the build would notice.
 *
 * Expectations are derived from the content modules so the test tracks the
 * data instead of hardcoding copy.
 */

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

/**
 * Waits for the lazy chunk to resolve and returns the page's <h1>.
 *
 * Every route is code-split, so the first paint is the Suspense fallback. The
 * default 1s findBy timeout is not enough for the heavier pages once their
 * content module is pulled in.
 */
async function heading(name: string | RegExp) {
  return screen.findByRole("heading", { level: 1, name }, { timeout: 10_000 });
}

const [firstArticle] = articles;
const [firstProduct] = nutritionalProducts;
const [firstRecipeSlug, firstRecipeProduct] = Object.entries(recipeProducts)[0]!;
const firstRecipe = firstRecipeProduct.recipes[0]!;
const balanceKeys = Object.keys(balanceContent);

// Each case mounts a lazily loaded page plus its content module.
describe("AppRoutes", { timeout: 20_000 }, () => {
  it("renders the home page at /", async () => {
    renderAt("/");
    expect(await heading(/Productos San Rafael Balance/i)).toBeInTheDocument();
  });

  it("renders the products page at /productos", async () => {
    renderAt("/productos");
    expect(await heading(/Nuestros Productos/i)).toBeInTheDocument();
  });

  it("renders the recipes index at /recetas", async () => {
    renderAt("/recetas");
    expect(await heading(/Recetas San Rafael Balance/i)).toBeInTheDocument();
  });

  it("renders a balance page at /:balanceType", async () => {
    const key = balanceKeys[0]!;
    const expected = balanceContent[key as keyof typeof balanceContent].hero.title;

    renderAt(`/${key}`);
    expect(await heading(expected)).toBeInTheDocument();
  });

  it("renders the nutritional page at /productos/:productSlug", async () => {
    renderAt(`/productos/${firstProduct!.slug}`);
    expect(await heading(firstProduct!.name)).toBeInTheDocument();
  });

  it("renders an article at /:category/:slug", async () => {
    renderAt(`/${firstArticle!.category}/${firstArticle!.slug}`);
    expect(await heading(firstArticle!.title)).toBeInTheDocument();
  });

  it("renders the recipes of a product at /recetas/:productSlug", async () => {
    renderAt(`/recetas/${firstRecipeSlug}`);
    expect(await heading(new RegExp(firstRecipeProduct.name, "i"))).toBeInTheDocument();
  });

  it("renders a recipe at /recetas/:productSlug/:recipeId", async () => {
    const expected = recipesDetails[firstRecipe.id]!.title;

    renderAt(`/recetas/${firstRecipeSlug}/${firstRecipe.id}`);
    expect(await heading(expected)).toBeInTheDocument();
  });

  describe("precedence over the catch-all segments", () => {
    it("keeps /productos on the products page, not the balance page", async () => {
      // /:balanceType would also match this path.
      renderAt("/productos");
      expect(await heading(/Nuestros Productos/i)).toBeInTheDocument();
    });

    it("keeps /productos/:slug on the nutritional page, not the article page", async () => {
      // /:category/:slug would also match this path.
      renderAt(`/productos/${firstProduct!.slug}`);
      expect(await heading(firstProduct!.name)).toBeInTheDocument();
    });

    it("routes an article whose category is also a balance page", async () => {
      // Article categories reuse the balance keys, so /tips-balance is a
      // balance page while /tips-balance/<slug> must be the article.
      expect(balanceKeys).toContain(firstArticle!.category);

      renderAt(`/${firstArticle!.category}/${firstArticle!.slug}`);
      expect(await heading(firstArticle!.title)).toBeInTheDocument();
    });
  });

  describe("unknown paths", () => {
    it("shows the not-found page for an unknown single segment", async () => {
      renderAt("/ruta-que-no-existe");
      expect(await heading(/no encontrada/i)).toBeInTheDocument();
    });

    it("shows the not-found page for an unknown category and slug", async () => {
      renderAt("/categoria-inventada/articulo-inventado");
      expect(await heading(/no encontrada/i)).toBeInTheDocument();
    });

    it("shows the not-found page for an unknown recipe", async () => {
      renderAt(`/recetas/${firstRecipeSlug}/id-inexistente`);
      expect(await heading(/no encontrada/i)).toBeInTheDocument();
    });

    it("falls through to the wildcard for a deep unknown path", async () => {
      renderAt("/a/b/c/d");
      expect(await heading(/no encontrada/i)).toBeInTheDocument();
    });
  });
});
