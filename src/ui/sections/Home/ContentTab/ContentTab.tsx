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
        <div className="mx-auto max-w-7xl py-20 sm:px-2 sm:py-24 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
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
                  <div className="mt-16 flex items-end justify-start gap-8 h-auto">
                    {types?.map((type) => (
                        <div key={type.id} className="sm:flex flex-col h-1/2 items-center justify-center">
                          <div className="sm:shrink-0">
                            <img alt={type.name} src={type.url} title={type.name} className="h-auto w-28 aspect-auto hover:-translate-y-1 transform transition-transform duration-300 ease-in-out" />
                          </div>
                          <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 text-center">
                            <h3 className="text-sm font-montserrat-medium text-gray-900">{type.name}</h3>
                            <p className="mt-2 text-sm font-montserrat-regular text-gray-500">{type.description}</p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <img
                  alt={title}
                  src={image}
                  className="aspect-square w-full rounded-lg bg-gray-100 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
  );
};
