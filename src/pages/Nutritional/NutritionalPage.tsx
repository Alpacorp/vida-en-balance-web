import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import { NutritionalHeader, NutritionalDetails, NutritionalInfo } from "@ui/index";
import { NotFoundPage } from "@pages/NotFound/NotFoundPage";
import { SEO } from "@utils/SEO";

import { productsData } from "@content/nutritional/products";
import { BASE_URL } from "@config/config";

import { Product } from "@interfaces/interfaces";


export const NutritionalPage = () => {
  const navigate = useNavigate();
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
    return <NotFoundPage type="page" goBack={() => navigate(-1)} />;
  }

  const seoData = {
    title: `${activeProduct.name} - Información Nutricional`,
    description: `Descubre la información nutricional detallada de ${activeProduct.name} de Balance.`,
    keywords: `${activeProduct.name}, información nutricional, balance, salud`,
    url: `${BASE_URL}/productos/${productSlug}`,
    imageSeo: activeProduct.image,
    type: 'product' as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": activeProduct.name,
      "image": activeProduct.presentations[0].image,
      "description": `Información nutricional de ${activeProduct.name}`,
      "brand": {
        "@type": "Brand",
        "name": "Balance"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      },
      "nutrition": {
        "@type": "NutritionInformation",
        "Energia": activeProduct.nutritionalInfo.find(n => n.label === 'Energía')?.value,
        "Grasas totales": activeProduct.nutritionalInfo.find(n => n.label === 'Grasas totales')?.value,
        "Grasa saturada": activeProduct.nutritionalInfo.find(n => n.label === 'Grasa saturada')?.value,
        "Grasa Trans": activeProduct.nutritionalInfo.find(n => n.label === 'Grasa Trans')?.value,
        "Azucares": activeProduct.nutritionalInfo.find(n => n.label === 'Azúcares')?.value,
        "Sodio": activeProduct.nutritionalInfo.find(n => n.label === 'Sodio')?.value,
      }
    }
  };

  return (
    <>
      <SEO {...seoData} />
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
    </>
  );
}
