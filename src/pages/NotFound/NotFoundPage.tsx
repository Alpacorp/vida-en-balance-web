import { FC } from "react";
import { Link } from "react-router-dom";

import { Seo } from "@utils/Seo.tsx";

import { NotFoundProps } from "@interfaces/interfaces";
import { BASE_URL } from "@config/config";

const NotFoundPage: FC<NotFoundProps> = ({ type = "page", goBack }) => {
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
      <Seo {...seoData} />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-house mr-2 h-5 w-5"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                Ir al inicio
              </Link>
              {isRecipe && (
                <Link
                  to="/recetas"
                  className="flex items-center justify-center bg-white text-violet border border-violet py-2 px-4 rounded-lg font-montserrat-medium hover:bg-violet hover:text-white transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search mr-2 h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  Buscar otras recetas
                </Link>
              )}
              {goBack && (
                <button
                  onClick={goBack}
                  className="flex items-center justify-center bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-montserrat-medium hover:bg-gray-300 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-left mr-2 h-5 w-5"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
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

export default NotFoundPage;
