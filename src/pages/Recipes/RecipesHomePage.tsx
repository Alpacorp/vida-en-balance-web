import { FC } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '@content/recipes/recipes.ts';

export const RecipesHomePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      <div className="bg-violet text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-montserrat-bold mb-4">Recetas Balance</h1>
          <p className="text-xl font-montserrat-regular">Descubre deliciosas recetas con nuestros productos Balance</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(productsData).map(([slug, product]) => (
            <Link
              key={slug}
              to={`/recetas/${slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9 bg-[#029FA7]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-montserrat-bold mb-2 text-violet">{product.name}</h2>
                <p className="text-gray-600 font-montserrat-medium">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
