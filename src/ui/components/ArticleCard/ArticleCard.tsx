import React from 'react';
import { Link } from 'react-router-dom';

interface NutritionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  to: string;
}

export const ArticleCard: React.FC<NutritionCardProps> = ({title, description, imageUrl, imageAlt, ctaText, to}) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link
          to={to}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out transform hover:-translate-y-1 text-center"
        >
          {ctaText}
        </Link>
      </div>
    </article>
  );
};

