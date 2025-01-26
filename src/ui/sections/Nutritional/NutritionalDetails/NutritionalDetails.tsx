import React from "react";

import { ProductDetailsProps } from "@interfaces/interfaces";

export const NutritionalDetails: React.FC<ProductDetailsProps> = ({
  product,
  presentations,
  ingredients,
  stamps,
}) => {
  return (
    <div>
      <h2 className="text-[#2A2A72] text-2xl font-montserrat-bold mb-4">
        {product.name}
      </h2>
      <p className="text-lg text-gray-600 font-montserrat-medium mb-6">
        {product.weight}
      </p>

      <div className="mb-8">
        <h3 className="text-[#2A2A72] text-xl font-montserrat-bold mb-4">
          INGREDIENTES
        </h3>
        <p className="text-gray-700 font-montserrat-medium">{ingredients}</p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-center gap-6">
          {presentations.map((presentation) => {
            const validateImage = presentation.label === "Granel";
            return (
              <div key={presentation.id}>
                <img
                  src={presentation.image}
                  alt={`Presentación ${presentation.label}`}
                  title={`Presentación ${presentation.label}`}
                  className={`${validateImage ? "h-60" : "h-40"} w-40 object-contain object-bottom`}
                  height="160"
                  width="160"
                />
              </div>
            );
          })}
        </div>
        <div>
          {stamps && (
            <div className="flex justify-center flex-wrap gap-4">
              {stamps.map((stamp) => (
                <img
                  key={stamp.alt}
                  src={stamp.image}
                  alt={stamp.label}
                  title={stamp.label}
                  className="h-14 w-14 object-contain"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
