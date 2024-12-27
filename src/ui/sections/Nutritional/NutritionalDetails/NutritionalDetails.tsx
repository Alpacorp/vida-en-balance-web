import React from 'react';

interface Product {
  id: string;
  name: string;
  weight: string;
  image: string;
  ingredients: string;
}

interface ProductDetailsProps {
  product: Product;
}

export const NutritionalDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <h2 className="text-[#2A2A72] text-2xl font-bold mb-4">
        {product.name}
      </h2>
      <p className="text-lg text-gray-600 mb-6">{product.weight}</p>

      <div className="mb-8">
        <h3 className="text-[#2A2A72] text-xl font-bold mb-4">INGREDIENTES</h3>
        <p className="text-gray-700">
          {product.ingredients}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={product.image}
              alt={`Presentación ${i}`}
              className="w-32 h-32 object-contain mb-4"
            />
            <div className="grid grid-cols-2 gap-2">
              {[1, 2].map((icon) => (
                <div
                  key={icon}
                  className="w-8 h-8 bg-[#2A2A72] rounded-full"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
