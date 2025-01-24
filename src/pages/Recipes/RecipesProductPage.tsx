import { FC } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { ProductHeader, RecipeCard } from "@ui/index";

import { NotFoundPage } from "@pages/NotFound/NotFoundPage";
import { SEO } from "@utils/SEO";

import { productsData } from "@content/recipes/recipes";
import { BASE_URL } from "@config/config";

export const RecipesProductPage: FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const product = productsData[productSlug as keyof typeof productsData];
  const navigate = useNavigate();

  if (!product) {
    return <NotFoundPage type="page" goBack={() => navigate(-1)} />;
  }

  const seoData = {
    title: `Recetas con ${product.name} - Balance`,
    description: `Descubre deliciosas recetas utilizando ${product.name} de Balance. ${product.description}`,
    keywords: `recetas ${product.name}, balance, comida saludable, recetas fáciles`,
    url: `${BASE_URL}/recetas/${productSlug}`,
    imageSeo: product.image,
    type: "website" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Recetas con ${product.name}`,
      description: product.description,
      url: `${BASE_URL}/recetas/${productSlug}`,
      itemListElement: product.recipes.map((recipe, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: recipe.title,
        url: `${BASE_URL}/recetas/${productSlug}/${recipe.id}`,
      })),
    },
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <ProductHeader
          productName={product.name}
          productDescription={product.description}
          productImage={product.imageHero}
        />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.recipes.map(
              (recipe: {
                id: string;
                title: string;
                description: string;
                image: string;
              }) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  description={recipe.description}
                  image={recipe.image}
                  productSlug={productSlug as string}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
};
