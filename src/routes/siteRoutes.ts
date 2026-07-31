import { balanceContent } from "@content/balance/balance";
import { articles } from "@content/blogs/articles";
import { productsData as nutritionalProducts } from "@content/nutritional/products";
import { productsData as recipeProducts } from "@content/recipes/recipes";

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
      routes.push(`/recetas/${productSlug}/${recipe.id}`);
    }
  }

  // Two content entries pointing at the same URL would otherwise be rendered
  // twice and listed twice in the sitemap.
  return [...new Set(routes)];
}
