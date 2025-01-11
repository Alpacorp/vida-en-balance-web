import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ArticleLayout } from "@ui/layouts/ArticleLayout/ArticleLayout.tsx";

import { getArticle, getRelatedArticles } from "@utils/getArticleContent.tsx";
import {Article} from "@interfaces/interfaces";

export const ArticlePage = () => {

  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [article, setArticle] = useState<Article>();

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
    return <div>Artículo no encontrado</div>;
  }

  return <ArticleLayout {...article} />;
}

