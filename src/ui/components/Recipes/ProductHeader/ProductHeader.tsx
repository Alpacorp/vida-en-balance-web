import { FC } from "react";
import { Link } from "react-router-dom";

import { ProductHeaderRecipesProps } from "@interfaces/interfaces";

export const ProductHeader: FC<ProductHeaderRecipesProps> = ({
  productName,
  productDescription,
  productImage,
}) => {
  return (
    <div className="relative bg-[#2E2B6F] min-h-[400px] py-16 mt-20">
      <div className="container mx-auto px-4">
        <Link
          to={`/recetas`}
          className="inline-flex items-center text-white hover:underline mb-8 font-montserrat-medium"
        >
          <span className="mr-2">←</span> Volver a recetas
        </Link>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-montserrat-bold mb-6 leading-tight">
              RECETAS - {productName}
            </h1>
            <p className="text-lg md:text-xl font-montserrat-medium leading-relaxed max-w-2xl">
              {productDescription}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={productImage}
              alt={productName}
              className="w-auto h-[300px] object-contain animate-fade-in-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
