import { describe, it, expect } from "vitest";

import { listSiteRoutes } from "./siteRoutes";

import { balanceContent } from "@content/balance/balance";
import { articles } from "@content/blogs/articles";
import { productsData as nutritionalProducts } from "@content/nutritional/products";
import { productsData as recipeProducts } from "@content/recipes/recipes";

/**
 * This list drives two things at build time: which pages get prerendered into
 * static HTML, and what goes in the sitemap. A page missing from it is not
 * broken — it still works in the browser — it is just invisible: no crawlable
 * markup and no sitemap entry. Nothing else in the build would complain, so
 * these tests are what notices.
 */
describe("listSiteRoutes", () => {
  const routes = listSiteRoutes();

  it("lists no duplicates", () => {
    const duplicates = routes.filter((r, i) => routes.indexOf(r) !== i);
    expect(duplicates).toEqual([]);
  });

  it("every entry is a root-relative path with no trailing slash", () => {
    const malformed = routes.filter(
      (route) => !route.startsWith("/") || (route !== "/" && route.endsWith("/")),
    );
    expect(malformed).toEqual([]);
  });

  it("covers the three static pages", () => {
    expect(routes).toEqual(
      expect.arrayContaining(["/", "/productos", "/recetas"]),
    );
  });

  it("covers every balance section", () => {
    for (const balanceType of Object.keys(balanceContent)) {
      expect(routes).toContain(`/${balanceType}`);
    }
  });

  it("covers every article", () => {
    for (const article of articles) {
      expect(routes).toContain(`/${article.category}/${article.slug}`);
    }
  });

  it("covers every nutritional product", () => {
    for (const product of nutritionalProducts) {
      expect(routes).toContain(`/productos/${product.slug}`);
    }
  });

  it("covers every recipe and its product page", () => {
    for (const [productSlug, product] of Object.entries(recipeProducts)) {
      expect(routes).toContain(`/recetas/${productSlug}`);
      for (const recipe of product.recipes) {
        expect(routes).toContain(`/recetas/${productSlug}/${recipe.id}`);
      }
    }
  });

  it("adds up to exactly the content it is derived from", () => {
    // A count keeps an extra route from creeping in unnoticed — the checks
    // above only prove nothing is missing, not that nothing was invented.
    const expected =
      3 +
      Object.keys(balanceContent).length +
      articles.length +
      nutritionalProducts.length +
      Object.entries(recipeProducts).reduce(
        (total, [, product]) => total + 1 + product.recipes.length,
        0,
      );

    expect(routes).toHaveLength(expected);
  });
});
