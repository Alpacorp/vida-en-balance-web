import { FC } from "react";
import { Link } from "react-router-dom";

import { healthOptions } from "@content/home/health/healthOptions";

export const Health: FC = () => {
  return (
    <div className="bg-white py-10 sm:py-10">
      <div className="px-6 lg:px-8">
        <div className="mx-auto mt-5 flex flex-wrap justify-center max-w-2xl gap-8 sm:mt-6 lg:mx-0 lg:max-w-none">
          {healthOptions.map((post) => (
            <article
              key={post.id}
              className="w-full max-w-xs relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <img
                alt={post.title}
                src={post.imageUrl}
                className="absolute inset-0 -z-10 size-full object-cover"
                height="auto"
                width="auto"
                loading="lazy"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <div>
                <h3 className="mt-3 text-3xl font-montserrat-medium text-white">
                  <Link to={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-white font-montserrat-medium">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
