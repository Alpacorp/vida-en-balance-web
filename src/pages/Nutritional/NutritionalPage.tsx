import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { NutritionalHeader, NutritionalDetails, NutritionalInfo } from "@ui/index";

import { Product } from "@interfaces/interfaces";

import { productsData } from "@content/nutritional/products";

export const NutritionalPage = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  useEffect(() => {
    const product = productsData.find(p => p.slug === productSlug);
    if (product) {
      setActiveProduct(product);
    }
  }, [productSlug]);

  const handleProductChange = (newActiveProduct: Product) => {
    setActiveProduct(newActiveProduct);
  };

  if (!activeProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <NutritionalHeader
        products={productsData}
        onProductChange={handleProductChange}
        activeProduct={activeProduct}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <NutritionalDetails
            product={activeProduct}
            ingredients={activeProduct.ingredients}
            presentations={activeProduct.presentations}
          />
          <NutritionalInfo nutritionalInfo={activeProduct.nutritionalInfo} />
        </div>
      </div>
    </div>
  );
}
