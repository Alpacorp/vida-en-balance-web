import { FC } from "react";
import { Link } from "react-router-dom";

import { RecipeCardProps } from "@interfaces/interfaces";

export const RecipeCard: FC<RecipeCardProps> = ({
  id,
  title,
  description,
  image,
  productSlug,
}) => {
  return (
    <Link to={`/recetas/${productSlug}/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover"
          height="320"
          width="384"
        />
        <div className="p-4">
          <h3 className="text-xl font-montserrat-bold mb-2 text-gray-800 group-hover:text-violet">
            {title}
          </h3>
          <p className="text-gray-600 font-montserrat-medium">{description}</p>
        </div>
      </div>
    </Link>
  );
};
