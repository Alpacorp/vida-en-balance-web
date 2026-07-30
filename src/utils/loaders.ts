/**
 * Route chunk prefetching, triggered on link hover/focus.
 *
 * Loaders return `void` rather than the promise: they are always used as event
 * handlers, and returning a promise there leaves the rejection uncaught. A
 * network failure while prefetching is irrelevant — the real navigation will
 * request the chunk again — so it is swallowed silently.
 */
type RouteLoader = () => void;

const prefetch =
  (importer: () => Promise<unknown>): RouteLoader =>
  () => {
    void importer().catch(() => {
      /* prefetching is best-effort: if it fails, navigation retries */
    });
  };

export const routesLoaders: Record<string, RouteLoader> = {
  "/productos": prefetch(() => import("@pages/Products/ProductsPage")),
  "/recetas": prefetch(() => import("@pages/Recipes/RecipesHomePage")),
  "/cuerpo-en-balance": prefetch(() => import("@pages/Balance/BalancePage")),
  "/tips-balance": prefetch(() => import("@pages/Balance/BalancePage")),
  "/mente-en-balance": prefetch(() => import("@pages/Balance/BalancePage")),
};

export const nutritionalPageLoader = prefetch(
  () => import("@pages/Nutritional/NutritionalPage"),
);

export const recipesProductPageLoader = prefetch(
  () => import("@pages/Recipes/RecipesProductPage"),
);

export const recipeDetailPageLoader = prefetch(
  () => import("@pages/Recipes/RecipeDetailPage"),
);

export const articlePageLoader = prefetch(
  () => import("@pages/Blogs/ArticlePage"),
);

export const homePageLoader = prefetch(() => import("@pages/Home/HomePage"));
