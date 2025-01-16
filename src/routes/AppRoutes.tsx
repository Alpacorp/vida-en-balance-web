import { Route, Routes } from "react-router-dom";

import {
  ArticlePage,
  HomePage,
  RecipesProductPage,
  RecipeDetailPage,
  RecipesHomePage,
  NutritionalPage,
  NotFoundPage, BalancePage,
} from '@pages/index';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:balanceType" element={<BalancePage />} />
      <Route path="/productos/:productSlug" element={<NutritionalPage />} />
      <Route path="/:category/:slug" element={<ArticlePage />} />
      <Route path="/recetas" element={<RecipesHomePage />} />
      <Route path="/recetas/:productSlug" element={<RecipesProductPage />} />
      <Route path="/recetas/:productSlug/:recipeId" element={<RecipeDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
