import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { ContentProps } from "@interfaces/interfaces";
import {
  nutritionalPageLoader,
  recipesProductPageLoader,
} from "@utils/loaders";

export const ContentTab: FC<ContentProps> = ({
  title,
  description,
  image,
  types,
  nutritional_link,
  recipes_link,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.classList.add("animate-fade-in-right");
    }

    return () => {
      if (divRef["current"]) {
        divRef["current"].classList.remove("animate-fade-in-right");
      }
    };
  }, []);

  return (
    <div ref={divRef} className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-2 sm:px-2 sm:py-10 lg:px-4">
        <div className="mx-auto max-w-2xl py-2 px-4 lg:max-w-none">
          <div className="flex flex-wrap gap-x-16 gap-y-10 lg:flex-nowrap justify-center items-center">
            <div>
              <h2 className="text-4xl font-montserrat-medium tracking-tight text-gray-900">
                {title}
              </h2>
              <p className="mt-4 text-base font-montserrat-medium text-gray-800">
                {description}
              </p>
              <div className="mt-5 flex gap-1">
                {nutritional_link && (
                  <Link
                    className="inline-flex items-center rounded-md bg-main hover:bg-secondary px-3 py-2 text-sm font-montserrat-medium text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main transition-transform duration-500 ease-in-out"
                    to={nutritional_link || ""}
                    onMouseEnter={() => nutritionalPageLoader()}
                  >
                    Información nutrimental
                  </Link>
                )}
                {recipes_link && (
                  <Link
                    className="inline-flex items-center rounded-md bg-violet px-3 py-2 text-sm font-montserrat-medium text-white shadow-xs hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 transition-transform duration-500 ease-in-out"
                    to={recipes_link || ""}
                    onMouseEnter={() => recipesProductPageLoader()}
                  >
                    Recetas
                  </Link>
                )}
              </div>
              <div>
                <div className="mt-10 flex justify-center items-baseline gap-8 h-auto">
                  {types?.map((type) => {
                    const validateImage = type.name === "Granel";
                    return (
                      <div
                        key={type.id}
                        className="sm:flex flex-col items-center gap-4 justify-center"
                      >
                        <div className="sm:shrink-0">
                          <img
                            alt={`Presentación ${type.name}`}
                            src={type.url}
                            title={`Presentación ${type.name}`}
                            className={`${validateImage ? "h-60" : "h-40"} w-40 object-contain aspect-auto hover:-translate-y-1 transform transition-transform duration-300 ease-in-out`}
                            height="160"
                            width="160"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-sm font-montserrat-medium text-gray-900">
                            {type.name}
                          </h3>
                          {type.description.map((description) => (
                            <p
                              className="text-sm font-montserrat-regular text-gray-700"
                              key={description}
                            >
                              {description}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <img
              alt={title}
              src={image}
              className="aspect-square w-full max-w-xs h-96 rounded-lg bg-gray-100 object-cover shadow-2xl"
              height="320"
              width="384"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
