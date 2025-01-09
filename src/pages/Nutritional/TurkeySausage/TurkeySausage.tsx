import { useState } from 'react';

import { NutritionalDetails } from "@ui/sections/Nutritional/NutritionalDetails/NutritionalDetails.tsx";
import { NutritionalHeader } from "@ui/sections/Nutritional/NutritionalHeader/NutritionalHeader.tsx";
import { NutritionalInfo } from "@ui/sections/Nutritional/NutritionalInfo/NutritionalInfo.tsx";

import { products } from "@content/nutritional/header.json";
import { nutritionalInfo, presentations, ingredients } from "@content/nutritional/TurkeySausage.json";

import { Product } from "@interfaces/interfaces";

export const TurkeySausage = () => {
  const [activeProduct, setActiveProduct] = useState<Product>(products[2]);

  const handleProductChange = (newActiveProduct: Product) => {
    setActiveProduct(newActiveProduct);
  };

  return (
    <div className="min-h-screen bg-white">
      <NutritionalHeader
        products={products}
        onProductChange={handleProductChange}
        activeProduct={activeProduct}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <NutritionalDetails product={activeProduct} ingredients={ingredients} presentations={presentations} />
          <NutritionalInfo nutritionalInfo={nutritionalInfo} />
        </div>
      </div>
    </div>
  );
}

