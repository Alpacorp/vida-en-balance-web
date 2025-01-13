import {useState, useEffect, FC} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArticleLayout } from "@ui/layouts/ArticleLayout/ArticleLayout.tsx";
import { NotFoundPage } from "@pages/NotFound/NotFoundPage.tsx";

import { getArticle, getRelatedArticles } from "@utils/getArticleContent.tsx";

import { Article } from "@interfaces/interfaces";

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

  return <ArticleLayout {...article} />;
}

