export const routesLoaders: Record<string, () => Promise<never>> = {
  "/recetas": () => import("@pages/Recipes/RecipesHomePage") as Promise<never>,
  "/cuerpo-en-balance": () =>
    import("@pages/Balance/BalancePage") as Promise<never>,
  "/tips-balance": () => import("@pages/Balance/BalancePage") as Promise<never>,
  "/mente-en-balance": () =>
    import("@pages/Balance/BalancePage") as Promise<never>,
};

export const nutritionalPageLoader = () =>
  import("@pages/Nutritional/NutritionalPage");

export const recipesProductPageLoader = () =>
  import("@pages/Recipes/RecipesProductPage");

export const recipeDetailPageLoader = () => () =>
  import("@pages/Recipes/RecipeDetailPage");

export const articlePageLoader = () => import("@pages/Blogs/ArticlePage");

export const homePageLoader = () => import("@pages/Home/HomePage");
