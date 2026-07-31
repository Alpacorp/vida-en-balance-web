import { balanceContent } from "@content/balance/balance";
import { articles } from "@content/blogs/articles";
import { productsData as nutritionalProducts } from "@content/nutritional/products";
import { productsData as recipeProducts } from "@content/recipes/recipes";
import { recipesDetails } from "@content/recipes/recipesDetails";

/**
 * Every URL AppRoutes can answer with real content, expanded from the same
 * content modules the pages read. The build prerenders one HTML file per entry
 * and writes the sitemap from this list, so a new article or product shows up
 * in both without anyone editing a second file.
 *
 * The catch-all route is absent on purpose: a 404 is not a page worth
 * prerendering or advertising to crawlers.
 */
export function listSiteRoutes(): string[] {
  const routes = ["/", "/productos", "/recetas"];

  for (const balanceType of Object.keys(balanceContent)) {
    routes.push(`/${balanceType}`);
  }

  for (const article of articles) {
    routes.push(`/${article.category}/${article.slug}`);
  }

  for (const product of nutritionalProducts) {
    routes.push(`/productos/${product.slug}`);
  }

  for (const [productSlug, product] of Object.entries(recipeProducts)) {
    routes.push(`/recetas/${productSlug}`);
    for (const recipe of product.recipes) {
      const detail = recipesDetails[recipe.id];
      if (detail) routes.push(`/recetas/${productSlug}/${detail.slug}`);
    }
  }

  // Two content entries pointing at the same URL would otherwise be rendered
  // twice and listed twice in the sitemap.
  return [...new Set(routes)];
}

/**
 * The numeric recipe URLs the site published before slugs replaced them.
 *
 * They are in search results, shared messages and bookmarks. RecipeDetailPage
 * redirects them in the browser, but a crawler that does not run JavaScript
 * asks nginx for a file that is not there and gets the SPA fallback — the home
 * page, with a 200 — which reads as the recipe having become a duplicate of
 * the home page rather than having moved.
 *
 * Deliberately absent from listSiteRoutes: these are redirects, not pages, and
 * they have no place in the sitemap.
 */
export function listLegacyRecipeRedirects(): { from: string; to: string }[] {
  const redirects: { from: string; to: string }[] = [];

  for (const [productSlug, product] of Object.entries(recipeProducts)) {
    for (const recipe of product.recipes) {
      const detail = recipesDetails[recipe.id];
      if (!detail) continue;
      redirects.push({
        from: `/recetas/${productSlug}/${recipe.id}`,
        to: `/recetas/${productSlug}/${detail.slug}`,
      });
    }
  }

  return redirects;
}
