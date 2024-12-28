import { useState } from 'react';
import {NutritionalDetails} from "@ui/sections/Nutritional/NutritionalDetails/NutritionalDetails.tsx";
import {NutritionalHeader} from "@ui/sections/Nutritional/NutritionalHeader/NutritionalHeader.tsx";
import {NutritionalInfo} from "@ui/sections/Nutritional/NutritionalInfo/NutritionalInfo.tsx";

import { products } from "@content/nutritional/header.json";
import { nutritionalInfo, presentations } from "@content/nutritional/SteppedTurkeyBreast.json";

interface Product {
  id: string;
  name: string;
  weight: string;
  image: string;
  url: string;
  ingredients: string;
}

export const SteppedTurkeyBreast = () => {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  const handleProductChange = (newActiveProduct: Product) => {
    setActiveProduct(newActiveProduct);
  };

  return (
    <div className="min-h-screen bg-white">
      <NutritionalHeader
        products={products}
        onProductChange={handleProductChange}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <NutritionalDetails product={activeProduct} presentations={presentations} />
          <NutritionalInfo nutritionalInfo={nutritionalInfo} />
        </div>
      </div>
    </div>
  );
}

