import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import buttons from "@content/balance/buttonsBalanceContent.json"

interface ButtonProps {
  text: string;
  to: string;
}

interface ImageProps {
  alt: string;
  src: string;
}

interface HeroSectionProps {
  description: string;
  image: ImageProps;
  title: string;
}

export const HeroSection: FC<HeroSectionProps> = ({ title, description, image }) => {
  const location = useLocation();

  const isActive = (to: string) => location.pathname === to;

  return (
    <section className="relative h-[600px] text-white overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="absolute w-full h-full object-cover"
        title={title}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-orange-400/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl mb-8 opacity-90">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            {buttons.map((button: ButtonProps, index) => (
              <Link
                key={index}
                to={button.to}
                className={`px-6 py-3 font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 ${
                  isActive(button.to)
                    ? 'bg-white text-orange-500'
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500'
                }`}
                aria-current={isActive(button.to) ? 'page' : undefined}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

