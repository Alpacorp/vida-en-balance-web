import { useState, useEffect, FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArticleLayout } from "@ui/layouts/ArticleLayout/ArticleLayout";
import { NotFoundPage } from "@pages/NotFound/NotFoundPage";
import { SEO } from "@utils/SEO";

import { getArticle, getRelatedArticles } from "@utils/getArticleContent";

import { Article } from "@interfaces/interfaces";
import { BASE_URL } from "@config/config";

import mainLogo from "@assets/images/san-rafael-balance-logo.webp";

export const ArticlePage: FC = () => {

  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [article, setArticle] = useState<Article>();
  const navigate = useNavigate();

  useEffect(() => {
    if (category && slug) {
      const foundArticle = getArticle(category, slug);
      if (foundArticle) {
        setArticle({
          ...foundArticle,
          relatedArticles: getRelatedArticles(category, slug)
        });
      }
    }
  }, [category, slug]);


  if (!article) {
    return <NotFoundPage type="page" goBack={() => navigate(-1)} />;
  }

  const seoData = {
    title: `${article.title} - Balance`,
    description: article.description,
    keywords: `${article.title}, balance, ${category}, artículo`,
    url: `${BASE_URL}/${category}/${slug}`,
    imageSeo: article.coverImage,
    type: "article" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "image": article.coverImage,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "datePublished": article.date,
      "publisher": {
        "@type": "Organization",
        "name": "Balance",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/assets/images/${mainLogo}`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/${category}/${slug}`
      }
    }
  };

  return (
    <>
      <SEO {...seoData} />
      <ArticleLayout {...article} />
    </>
  )
}

