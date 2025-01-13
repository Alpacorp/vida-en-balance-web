import React from 'react';

import { ProductDetailsProps } from "@interfaces/interfaces";

export const NutritionalDetails: React.FC<ProductDetailsProps> = ({ product, presentations, ingredients }) => {

  return (
    <div>
      <h2 className="text-[#2A2A72] text-2xl font-montserrat-bold mb-4">
        {product.name}
      </h2>
      <p className="text-lg text-gray-600 font-montserrat-medium mb-6">{product.weight}</p>

      <div className="mb-8">
        <h3 className="text-[#2A2A72] text-xl font-montserrat-bold mb-4">INGREDIENTES</h3>
        <p className="text-gray-700 font-montserrat-medium">
          {ingredients}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {presentations.map((presentation, index) => (
          <div key={presentation.id} className="flex flex-col items-center">
            <img
              src={presentation.image}
              alt={`Presentación ${index}`}
              title={`Presentación ${index}`}
              className="w-32 h-32 object-contain mb-4"
            />
            <div className="grid grid-cols-2 gap-2">
              {presentation.stamps.map((icon) => (
                <img src={icon.image} alt={icon.alt} title={icon.label} key={icon.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
