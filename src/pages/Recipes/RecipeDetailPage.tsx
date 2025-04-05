import { FC } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import NotFoundPage from "@pages/NotFound/NotFoundPage";
import { Seo } from "@utils/Seo.tsx";

import { recipesDetails } from "@content/recipes/recipesDetails";
import { BASE_URL } from "@config/config";
import { recipesProductPageLoader } from "@utils/loaders.ts";

const RecipeDetailPage: FC = () => {
  const navigate = useNavigate();
  const { productSlug, recipeId } = useParams<{
    productSlug: string;
    recipeId: string;
  }>();
  const recipe = recipesDetails[recipeId as keyof typeof recipesDetails];

  if (!recipe) {
    return <NotFoundPage type="recipe" goBack={() => navigate(-1)} />;
  }

  const seoData = {
    title: `${recipe.title} - Recetas Balance`,
    description: recipe.description,
    keywords: `receta, ${recipe.title}, balance, saludable`,
    url: `${BASE_URL}/recetas/${productSlug}/${recipeId}`,
    imageSeo: recipe.image,
    type: "article" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: recipe.title,
      image: recipe.image,
      description: recipe.description,
      keywords: `receta, ${recipe.title}, balance, saludable`,
      author: {
        "@type": "Organization",
        name: "Balance",
      },
      datePublished: recipe.datePublished,
      prepTime: recipe.timePrep,
      cookTime: recipe.timePrep,
      totalTime: recipe.timePrep,
      recipeYield: recipe.portions,
      recipeIngredient: recipe.ingredients,
      recipeInstructions: recipe.preparation.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text: step,
      })),
    },
  };

  return (
    <>
      <Seo {...seoData} />
      <div className="container mx-auto px-4 py-8 mt-20">
        <Link
          to={`/recetas/${productSlug}`}
          className="inline-flex items-center text-violet hover:underline mb-8 font-montserrat-medium"
          onMouseEnter={() => recipesProductPageLoader()}
          onFocus={() => recipesProductPageLoader()}
        >
          <span className="mr-2">←</span> Volver a recetas
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-[400px] w-auto object-contain rounded-lg shadow-lg mb-6 mx-auto"
              height="400"
              width="400"
            />
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock w-5 h-5 text-violet mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-montserrat-medium text-gray-800">
                  {recipe.timePrep}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users w-5 h-5 text-violet mr-2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="font-montserrat-medium text-gray-800">
                  {recipe.portions}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chef-hat w-5 h-5 text-violet mr-2"
                >
                  <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                  <path d="M6 17h12" />
                </svg>
                <span className="font-montserrat-medium text-gray-800">
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-montserrat-bold mb-6 text-gray-800">
              {recipe.title}
            </h1>
            <div className="mb-8">
              <h2 className="text-2xl font-montserrat-semiBold mb-4 text-violet">
                Ingredientes
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-center font-montserrat-medium text-gray-700"
                  >
                    <span className="w-2 h-2 bg-violet rounded-full mr-3"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat-semiBold mb-4 text-violet">
                Preparación
              </h2>
              <ol className="space-y-4">
                {recipe.preparation.map((step, index) => (
                  <li
                    key={index}
                    className="flex font-montserrat-medium text-gray-700"
                  >
                    <span className="font-montserrat-bold mr-4 text-violet">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetailPage;
