import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "@ui/components/Loader/Loader.tsx";

const ArticlePage = lazy(() => import("@pages/Blogs/ArticlePage"));

const BalancePage = lazy(() => import("@pages/Balance/BalancePage"));

const HomePage = lazy(() => import("@pages/Home/HomePage"));

const NotFoundPage = lazy(() => import("@pages/NotFound/NotFoundPage"));

const NutritionalPage = lazy(
  () => import("@pages/Nutritional/NutritionalPage"),
);

const RecipeDetailPage = lazy(() => import("@pages/Recipes/RecipeDetailPage"));

const RecipesHomePage = lazy(() => import("@pages/Recipes/RecipesHomePage"));

const RecipesProductPage = lazy(
  () => import("@pages/Recipes/RecipesProductPage"),
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:balanceType" element={<BalancePage />} />
        <Route path="/productos/:productSlug" element={<NutritionalPage />} />
        <Route path="/:category/:slug" element={<ArticlePage />} />
        <Route path="/recetas" element={<RecipesHomePage />} />
        <Route path="/recetas/:productSlug" element={<RecipesProductPage />} />
        <Route
          path="/recetas/:productSlug/:recipeId"
          element={<RecipeDetailPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
