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
    <div ref={divRef} className="bg-gray-100 flex items-center w-full">
      <div className="w-full max-w-5xl mx-auto px-6 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-x-12 gap-y-6 justify-center lg:items-center">
          {/* Recipe image — top on mobile (visual hook), right on desktop */}
          <img
            alt={title}
            src={image}
            className="order-first lg:order-last w-full max-w-xs h-52 sm:h-64 lg:h-96 rounded-lg bg-gray-100 object-cover shadow-2xl shrink-0 self-center"
            height="384"
            width="384"
            loading="lazy"
          />

          {/* Text + types */}
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl font-montserrat-medium tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-base font-montserrat-medium text-gray-800 max-w-md">
              {description}
            </p>
            <div className="mt-5 flex gap-2">
              {nutritional_link && (
                <Link
                  className="inline-flex items-center rounded-md bg-main hover:bg-secondary px-3 py-2 text-sm font-montserrat-medium text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main transition-colors duration-200"
                  to={nutritional_link}
                  onMouseEnter={() => nutritionalPageLoader()}
                >
                  Información nutrimental
                </Link>
              )}
              {recipes_link && (
                <Link
                  className="inline-flex items-center rounded-md bg-violet px-3 py-2 text-sm font-montserrat-medium text-white shadow-xs hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 transition-colors duration-200"
                  to={recipes_link}
                  onMouseEnter={() => recipesProductPageLoader()}
                >
                  Recetas
                </Link>
              )}
            </div>

            {/* Types: single horizontal row, scrollable if overflow */}
            <div className="mt-8 flex items-end overflow-x-auto gap-6 pb-2 snap-x snap-mandatory scrollbar-hide">
              {types?.map((type) => {
                const isGranel = type.name === "Granel";
                return (
                  <div
                    key={type.id}
                    className="flex flex-col items-center gap-2 shrink-0 snap-center"
                  >
                    {/* Fixed-height image slot so all products bottom-align ("shelf" effect) */}
                    <div className="flex items-end h-40 sm:h-52">
                      <img
                        alt={`Presentación ${type.name}`}
                        src={type.url}
                        title={`Presentación ${type.name}`}
                        className={`${isGranel ? "h-40 sm:h-52" : "h-32 sm:h-40"} w-28 sm:w-36 object-contain aspect-auto hover:-translate-y-1 transform transition-transform duration-300 ease-in-out`}
                        height={isGranel ? "208" : "160"}
                        width="144"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm font-montserrat-medium text-gray-900">
                        {type.name}
                      </h3>
                      {type.description.map((desc) => (
                        <p
                          className="text-sm font-montserrat-regular text-gray-700"
                          key={desc}
                        >
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
