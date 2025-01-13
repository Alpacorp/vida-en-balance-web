import {FC} from "react";

import { useNavigate, useParams } from 'react-router-dom';

import { ProductHeader, RecipeCard } from "@ui/index.tsx";

import { NotFoundPage } from "@pages/NotFound/NotFoundPage.tsx";

import { productsData } from "@content/recipes/recipes.ts";

export const ProductRecipesPage: FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const product = productsData[productSlug as keyof typeof productsData];
  const navigate = useNavigate();

  if (!product) {
    return <NotFoundPage type="page" goBack={() => navigate(-1)} />;
  }

  return (
    <div>
      <ProductHeader
        productName={product.name}
        productDescription={product.description}
        productImage={product.image}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.recipes.map((recipe: { id: string; title: string; description: string; image: string; }) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              productSlug={productSlug as string}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


