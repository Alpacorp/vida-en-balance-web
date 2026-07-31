import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import mainLogo from "@assets/images/san-rafael-balance-logo.webp";
import { ArticleLayout } from "@ui/layouts/ArticleLayout/ArticleLayout";
import NotFoundPage from "@pages/NotFound/NotFoundPage";

import { getArticle, getRelatedArticles } from "@utils/getArticleContent";

import { Article } from "@interfaces/interfaces";
import { BASE_URL } from "@config/config";

import { Seo } from "@utils/Seo.tsx";

const ArticlePage: FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const navigate = useNavigate();

  // Derived from the URL instead of mirrored into state: the state version
  // rendered the 404 page on the first pass, so a valid article flashed
  // "not found" before the effect replaced it.
  const found = category && slug ? getArticle(category, slug) : undefined;
  const article: Article | undefined = found && {
    ...found,
    relatedArticles: getRelatedArticles(category!, slug!),
  };

  if (!article) {
    return <NotFoundPage type="page" goBack={() => void navigate(-1)} />;
  }

  const seoData = {
    title: `${article.title} - San Rafael Balance®`,
    description: article.description,
    keywords: `${article.title}, San Rafael Balance, ${category}, artículo`,
    url: `${BASE_URL}/${category}/${slug}`,
    imageSeo: article.coverImage,
    type: "article" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      image: article.coverImage,
      author: {
        "@type": "Person",
        name: article.author,
      },
      datePublished: article.date,
      publisher: {
        "@type": "Organization",
        name: "Balance",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/assets/images/${mainLogo}`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/${category}/${slug}`,
      },
    },
  };

  return (
    <>
      <Seo {...seoData} />
      <ArticleLayout {...article} />
    </>
  );
};

export default ArticlePage;
