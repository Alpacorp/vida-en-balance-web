import React from "react";

export interface Product {
  id: string | number;
  name: string;
  slug: string;
  nutritionalInfo: NutritionalItem[];
  ingredients: string;
  presentations: Presentation[];
  weight: string;
  image: string;
  url: string
}

export interface NutritionalHeaderProps {
  products: Product[];
  onProductChange: (product: Product) => void;
  activeProduct: Product;
}

export interface Stamp {
  label: string;
  image: string;
  alt: string;
}

export interface Presentation {
  id: number;
  label: string;
  image: string;
  stamps: Stamp[];
}

export interface ProductDetailsProps {
  product: Product;
  presentations: Presentation[];
  ingredients: string;
}

export interface NutritionalItem {
  label: string;
  value: string;
  unit: string;
}

export interface NutritionalInfoProps {
  nutritionalInfo: NutritionalItem[];
}

export interface Article {
  id: string;
  category: string;
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  author: string;
  date: string;
  readingTime: string;
  content: React.ReactNode;
  relatedArticles: Array<{
    id: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    category: string;
  }>;
}

export interface Menu {
  id: string;
  name: string;
  path: string;
  icon?: string;
}

export interface ContentProps {
  title?: string;
  description?: string;
  image?: string;
  nutritional_link?: string | "";
  recipes_link: string | "";
  types?: {
    id: number;
    url: string;
    name: string;
    description: string;
  }[];
}

export interface NotFoundProps {
  type?: 'recipe' | 'page';
  goBack?: () => void;
}

export interface RecipeDetail {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
  preparation: string[];
  timePrep: string;
  portions: string;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaPrimary: {
    text: string;
    url: string;
  };
  ctaSecondary?: {
    text: string;
    url: string;
  };
}

export interface ArticleLayoutProps {
  title: string;
  subtitle: string;
  coverImage: string;
  author: string;
  date: string;
  readingTime: string;
  content: React.ReactNode;
  relatedArticles: Array<{
    id: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
  }>;
}

export interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  productSlug: string;
}

export interface ProductHeaderRecipesProps {
  productName: string;
  productDescription: string;
  productImage: string;
}

export interface NutritionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  to: string;
}

export interface HeadingProps {
  text: string;
  customClassName?: string;
  tag: "h1" | "h2";
}



