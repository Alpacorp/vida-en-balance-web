import { FC } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';

import { Clock, Users, ChefHat } from 'lucide-react';

import { NotFoundPage } from "@pages/NotFound/NotFoundPage.tsx";

import { recipesDetails } from "@content/recipes/recipesDetails.ts";

export const RecipeDetailPage: FC = () => {
  const { productSlug, recipeId } = useParams<{ productSlug: string, recipeId: string }>();
  const recipe = recipesDetails[recipeId as keyof typeof recipesDetails];
  const navigate = useNavigate();

  if (!recipe) {
    return <NotFoundPage type="recipe" goBack={() => navigate(-1)} />;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <Link
        to={`/recetas/${productSlug}`}
        className="inline-flex items-center text-violet hover:underline mb-8 font-montserrat-medium"
      >
        <span className="mr-2">←</span> Volver a recetas
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-violet mr-2" />
              <span className="font-montserrat-medium">{recipe.timePrep}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-violet mr-2" />
              <span className="font-montserrat-medium">{recipe.portions}</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="w-5 h-5 text-violet mr-2" />
              <span className="font-montserrat-medium">{recipe.difficulty}</span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-montserrat-bold mb-6">{recipe.title}</h1>

          <div className="mb-8">
            <h2 className="text-2xl font-montserrat-semiBold mb-4 text-violet">Ingredientes</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center font-montserrat-medium"
                >
                  <span className="w-2 h-2 bg-violet rounded-full mr-3"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-montserrat-semiBold mb-4 text-violet">Preparación</h2>
            <ol className="space-y-4">
              {recipe.preparation.map((step, index) => (
                <li
                  key={index}
                  className="flex font-montserrat-medium"
                >
                  <span className="font-montserrat-bold mr-4">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
