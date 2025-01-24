import { FC } from "react";
import { Link } from "react-router-dom";

import { Home, Search, ArrowLeft } from "lucide-react";
import { SEO } from "@utils/SEO";

import { NotFoundProps } from "@interfaces/interfaces";
import { BASE_URL } from "@config/config";

export const NotFoundPage: FC<NotFoundProps> = ({ type = "page", goBack }) => {
  const isRecipe = type === "recipe";

  const seoData = {
    title: isRecipe
      ? "Receta no encontrada - Balance"
      : "Página no encontrada - Balance",
    description: isRecipe
      ? "Lo sentimos, la receta que estás buscando no se encuentra en nuestro sitio."
      : "Lo sentimos, la página que estás buscando no existe en nuestro sitio.",
    keywords: "404, no encontrado, balance",
    url: `${BASE_URL}/404`,
    type: "website" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: isRecipe ? "Receta no encontrada" : "Página no encontrada",
      description: isRecipe
        ? "Lo sentimos, la receta que estás buscando no se encuentra en nuestro sitio."
        : "Lo sentimos, la página que estás buscando no existe en nuestro sitio.",
    },
  };

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 py-12">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-montserrat-bold text-gray-800 mb-2">
                {isRecipe
                  ? "¡Ups! Receta no encontrada"
                  : "¡Ups! Página no encontrada"}
              </h1>
              <p className="text-gray-600 font-montserrat-medium">
                {isRecipe
                  ? "Parece que la receta que buscas no está en nuestro menú."
                  : "Parece que la página que buscas no existe."}
              </p>
            </div>
            <div className="mb-8">
              <img
                src={
                  isRecipe
                    ? "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=800&h=600"
                    : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&q=80&w=800&h=600"
                }
                alt={isRecipe ? "Cocina vacía" : "Señal de camino"}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="flex items-center justify-center bg-violet text-white py-2 px-4 rounded-lg font-montserrat-medium hover:bg-violet-700 transition duration-300"
              >
                <Home className="mr-2 h-5 w-5" />
                Ir al inicio
              </Link>
              {isRecipe && (
                <Link
                  to="/recetas"
                  className="flex items-center justify-center bg-white text-violet border border-violet py-2 px-4 rounded-lg font-montserrat-medium hover:bg-violet hover:text-white transition duration-300"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Buscar otras recetas
                </Link>
              )}
              {goBack && (
                <button
                  onClick={goBack}
                  className="flex items-center justify-center bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-montserrat-medium hover:bg-gray-300 transition duration-300"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Volver atrás
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
