import React from "react";

import {
  ContentCard,
  NutritionalItem,
  Presentation,
  Product,
  RelatedArticle,
  Stamp,
} from "./content";

/**
 * Props of individual components.
 *
 * Each of these belongs to exactly one component, so a new one is better
 * declared next to the component that uses it than added here. What lives here
 * is what was already here when the two concerns were pulled apart.
 */

export interface NutritionalHeaderProps {
  products: Product[];
  activeProduct: Product;
}

export interface ProductDetailsProps {
  product: Product;
  presentations: Presentation[];
  ingredients: string;
  stamps: Stamp[];
}

export interface NutritionalInfoProps {
  nutritionalInfo: NutritionalItem[];
}

export interface ContentProps {
  title?: string;
  description?: string;
  image?: string;
  nutritional_link?: string;
  recipes_link: string;
  types?: {
    id: number;
    url: string;
    name: string;
    description: string[];
  }[];
}

export interface NotFoundProps {
  type?: "recipe" | "page";
  goBack?: () => void;
}

export interface ArticleLayoutProps {
  title: string;
  subtitle: string;
  coverImage: string;
  author: string;
  date: string;
  readingTime: string;
  content: React.ReactNode;
  relatedArticles: RelatedArticle[];
}

export interface RecipeCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  productSlug: string;
}

export interface ProductHeaderRecipesProps {
  productName: string;
  productDescription: string;
  productImage: string;
  gradient?: { from: string; to: string };
}

/** The card renders a content card as-is, so it takes exactly that shape. */
export type NutritionCardProps = ContentCard;

export interface HeadingProps {
  text: string;
  tag: "h1" | "h2";
  id?: string;
  isUppercase?: boolean;
  customClassName?: string;
}

export interface ButtonProps {
  text: string;
  to: string;
}

interface ImageProps {
  alt: string;
  src: string;
}

export interface HeroBalanceProps {
  description: string;
  image: ImageProps;
  title: string;
}

export interface ArticleProps {
  article: ContentCard[];
}
