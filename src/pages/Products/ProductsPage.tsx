import { FC } from "react";
import { Link } from "react-router-dom";

import { Seo } from "@utils/Seo.tsx";
import { productsData } from "@content/nutritional/products";
import { BASE_URL } from "@config/config";
import { nutritionalPageLoader } from "@utils/loaders";

const ProductsPage: FC = () => {
  const seoData = {
    title: "Productos San Rafael Balance® - Línea completa de productos de pavo",
    description:
      "Conoce toda la línea de productos San Rafael Balance®: pechugas de pavo y salchichas bajas en grasa, sin gluten, sin nitritos añadidos y 100% carne de pavo.",
    keywords:
      "productos San Rafael Balance, pechuga de pavo, salchicha de pavo, bajo en grasa, sin gluten, productos saludables",
    url: `${BASE_URL}/productos`,
    imageSeo: productsData[0]?.image,
    type: "website" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Productos San Rafael Balance®",
      description: "Línea completa de productos San Rafael Balance® de pavo",
      url: `${BASE_URL}/productos`,
      hasPart: productsData.map((product) => ({
        "@type": "Product",
        name: product.name,
        url: `${BASE_URL}${product.url}`,
        image: product.image,
      })),
    },
  };

  return (
    <>
      <Seo {...seoData} />
      <div className="min-h-screen bg-gray-100 mt-20">
        {/* Hero header */}
        <div className="bg-linear-to-r from-[#40BFB4] to-[#2A9D8F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-montserrat-bold mb-4">
              Nuestros Productos
            </h1>
            <p className="text-xl font-montserrat-regular max-w-2xl">
              Toda nuestra línea de productos de pavo: nutritivos, bajos en
              grasa y sin conservadores artificiales.
            </p>
          </div>
        </div>

        {/* Products grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="bg-[#029FA7] flex items-center justify-center p-6 h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain"
                    height="192"
                    width="192"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <h2 className="text-xl font-montserrat-bold mb-1 text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-sm font-montserrat-medium text-secondary mb-4">
                    {product.weight}
                  </p>

                  {/* Stamps */}
                  {product.stamps.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.stamps.slice(0, 4).map((stamp) => (
                        <img
                          key={stamp.label}
                          src={stamp.image}
                          alt={stamp.alt}
                          title={stamp.label}
                          className="h-10 w-10 object-contain"
                          height="40"
                          width="40"
                        />
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    to={product.url}
                    className="mt-auto w-full bg-main font-montserrat-medium text-white py-2 px-4 rounded-md hover:bg-tertiary transition duration-300 ease-in-out transform hover:-translate-y-1 text-center"
                    onMouseEnter={() => nutritionalPageLoader()}
                    onFocus={() => nutritionalPageLoader()}
                  >
                    Ver producto
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
