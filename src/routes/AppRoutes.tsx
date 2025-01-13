import { Route, Routes } from "react-router-dom";

import {
  ArticlePage,
  Body,
  HomePage,
  Mind,
  Tips,
  ProductRecipesPage,
  RecipeDetailPage,
  RecipesHomePage,
  NutritionalPage,
  NotFoundPage,
} from '@pages/index';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cuerpo-balance" element={<Body />} />
      <Route path="/mente-en-balance" element={<Mind />} />
      <Route path="/tips-balance" element={<Tips />} />
      <Route path="/productos/:productSlug" element={<NutritionalPage />} />
      <Route path="/:category/:slug" element={<ArticlePage />} />
      <Route path="/recetas" element={<RecipesHomePage />} />
      <Route path="/recetas/:productSlug" element={<ProductRecipesPage />} />
      <Route path="/recetas/:productSlug/:recipeId" element={<RecipeDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
