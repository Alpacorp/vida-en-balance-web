import { Article } from "@interfaces/interfaces";
import { articles } from "@content/blogs/articles.tsx";

export const getArticle = (category: string, slug: string): Article | undefined => {
  return articles.find(article => article.category === category && article.slug === slug);
};

export const getRelatedArticles = (category: string, slug: string): Article['relatedArticles'] => {
  const article = getArticle(category, slug);
  return article ? article.relatedArticles : [];
};
