import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { ContentProps } from "@interfaces/interfaces";

export const ContentTab: FC<ContentProps> = ({ title, description, image, types, nutritional_link, recipes_link }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.classList.add('animate-slide-in-bottom');
    }

    return () => {
      if (divRef["current"]) {
        divRef["current"].classList.remove('animate-slide-in-bottom');
      }
    };
  }, []);

  return (
      <div ref={divRef} className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-2 sm:px-2 sm:py-10 lg:px-4">
          <div className="mx-auto max-w-2xl py-2 px-4 lg:max-w-none">
            <div className="flex flex-wrap gap-x-16 gap-y-10 lg:flex-nowrap justify-center">
              <div>
                <h2 className="text-4xl font-montserrat-medium tracking-tight text-gray-900">
                  {title}
                </h2>
                <p className="mt-4 text-base font-montserrat-medium text-gray-500">{description}</p>
                <div className="mt-5 flex gap-1">
                  {
                    nutritional_link && (
                      <Link
                        className="inline-flex items-center rounded-md bg-amber-600 hover:bg-amber-700 px-3 py-2 text-sm font-montserrat-medium text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-transform duration-500 ease-in-out"
                        to={nutritional_link || ""}
                      >
                        Información nutrimental
                      </Link>
                    )
                  }
                  {
                    recipes_link && (
                      <Link
                          className="inline-flex items-center rounded-md bg-cyan-500 px-3 py-2 text-sm font-montserrat-medium text-white shadow-xs hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 transition-transform duration-500 ease-in-out"
                          to={recipes_link || ""}
                      >
                        Recetas
                      </Link>
                    )
                  }
                </div>
                <div>
                  <div className="mt-10 flex items-end justify-center gap-8 h-auto">
                    {types?.map((type) => (
                        <div key={type.id} className="sm:flex flex-col items-center justify-center">
                          <div className="sm:shrink-0">
                            <img alt={type.name} src={type.url} title={type.name} className="max-h-40 h-full max-w-28 w-full aspect-auto hover:-translate-y-1 transform transition-transform duration-300 ease-in-out" />
                          </div>
                          <div className="mt-2 sm:mt-0 sm:ml-6 lg:mt-2 lg:ml-0 text-center">
                            <h3 className="text-sm font-montserrat-medium text-gray-900">{type.name}</h3>
                            <p className="text-sm font-montserrat-regular text-gray-500">{type.description}</p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <img
                  alt={title}
                  src={image}
                  className="aspect-square w-full max-w-xs h-96 rounded-lg bg-gray-100 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
  );
};
