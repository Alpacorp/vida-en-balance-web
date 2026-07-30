/**
 * Precarga de chunks de ruta, disparada en hover/focus de los enlaces.
 * Cada loader debe EJECUTAR el import: si devuelve una función en vez de una
 * promesa, la precarga nunca ocurre.
 */
type RouteLoader = () => Promise<unknown>;

export const routesLoaders: Record<string, RouteLoader> = {
  "/productos": () => import("@pages/Products/ProductsPage"),
  "/recetas": () => import("@pages/Recipes/RecipesHomePage"),
  "/cuerpo-en-balance": () => import("@pages/Balance/BalancePage"),
  "/tips-balance": () => import("@pages/Balance/BalancePage"),
  "/mente-en-balance": () => import("@pages/Balance/BalancePage"),
};

export const nutritionalPageLoader: RouteLoader = () =>
  import("@pages/Nutritional/NutritionalPage");

export const recipesProductPageLoader: RouteLoader = () =>
  import("@pages/Recipes/RecipesProductPage");

export const recipeDetailPageLoader: RouteLoader = () =>
  import("@pages/Recipes/RecipeDetailPage");

export const articlePageLoader: RouteLoader = () =>
  import("@pages/Blogs/ArticlePage");

export const homePageLoader: RouteLoader = () => import("@pages/Home/HomePage");
