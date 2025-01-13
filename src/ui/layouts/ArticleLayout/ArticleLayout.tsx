import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

import { ArticleLayoutProps } from "@interfaces/interfaces";

export const ArticleLayout: FC<ArticleLayoutProps> = ({ title, subtitle, coverImage, author, date, readingTime, content, relatedArticles}) => {
  const navigate = useNavigate();

  return (
    <article className="min-h-screen bg-white">
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 p-8 text-white">
          <div className="mx-auto max-w-4xl">
            <button
              onClick={() => navigate('/tips-balance')}
              className="mb-6 inline-flex items-center text-sm font-medium text-white/80 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Tips Balance
            </button>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-xl text-white/90 sm:text-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="mr-2 h-4 w-4" />
                {readingTime}
              </div>
              <div className="text-sm text-gray-600">
                Por <span className="font-medium">{author}</span>
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
                <Share2 className="mr-2 h-4 w-4" />
                Compartir
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                  className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${title}`, '_blank')}
                  className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                  className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-700"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </div>

      <div className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-8 text-2xl font-bold">Artículos relacionados</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                to={`/tips-balance/${article.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                  <p className="text-gray-600">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
