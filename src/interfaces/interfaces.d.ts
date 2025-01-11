import React from "react";

export interface Product {
  id: string;
  name: string;
  weight: string;
  image: string;
  url: string;
}

export interface ProductHeaderProps {
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
