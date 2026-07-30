/**
 * Precarga de chunks de ruta, disparada en hover/focus de los enlaces.
 *
 * Los loaders devuelven `void`, no la promesa: se usan siempre como manejadores
 * de eventos y devolver una promesa ahí deja el rechazo sin capturar. Un fallo
 * de red al precargar es irrelevante —la navegación real volverá a pedir el
 * chunk—, así que se descarta en silencio.
 */
type RouteLoader = () => void;

const prefetch =
  (importer: () => Promise<unknown>): RouteLoader =>
  () => {
    void importer().catch(() => {
      /* la precarga es best-effort: si falla, la navegación reintenta */
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
