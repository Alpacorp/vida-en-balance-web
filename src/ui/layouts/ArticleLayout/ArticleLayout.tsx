import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ArticleLayoutProps } from "@interfaces/interfaces";

export const ArticleLayout: FC<ArticleLayoutProps> = ({
  title,
  subtitle,
  coverImage,
  author,
  date,
  readingTime,
  content,
  relatedArticles,
}) => {
  const navigate = useNavigate();

  return (
    <article className="min-h-screen bg-white">
      <div className="relative h-[60vh] min-h-[500px] w-full mt-20">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 p-8 text-white">
          <div className="mx-auto max-w-4xl">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex items-center text-sm font-montserrat-medium text-white/80 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left mr-2 h-4 w-4"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Volver atrás
            </button>
            <h1 className="mb-4 text-4xl font-montserrat-bold sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-xl text-white/90 sm:text-2xl font-montserrat-medium">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center font-montserrat-medium gap-6">
              <div className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {readingTime}
              </div>
              <div className="text-sm text-gray-600">
                Por <span>{author}</span>
              </div>
              <time className="text-sm text-gray-600">{date}</time>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: title,
                      text: subtitle,
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-share-2 mr-2 h-4 w-4"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
                Compartir
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                      "_blank",
                    )
                  }
                  className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
                      "_blank",
                    )
                  }
                  className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none font-montserrat-medium">
          {content}
        </div>
      </div>

      <div className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-8 text-2xl font-montserrat-bold text-gray-800">
            Artículos relacionados
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                to={`/${article.category}/${article.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-48 max-w-96 w-full object-cover transition group-hover:scale-105"
                    height="192"
                    width="384"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-montserrat-bold text-gray-800 group-hover:text-violet">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-montserrat-medium group-hover:text-gray-800">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
