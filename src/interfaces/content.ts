import React from "react";

/**
 * The shape of everything under `src/content/`.
 *
 * These describe data, not components. Props belong in `componentProps.ts`,
 * which imports from here — the dependency only ever runs in that direction.
 */

export interface Stamp {
  label: string;
  image: string;
  alt: string;
}

export interface Presentation {
  id: number;
  label: string;
  image: string;
}

export interface NutritionalItem {
  label: string;
  value: string;
  unit: string;
}

export interface Product {
  id: string | number;
  name: string;
  slug: string;
  nutritionalInfo: NutritionalItem[];
  ingredients: string;
  presentations: Presentation[];
  stamps: Stamp[];
  weight: string;
  image: string;
  url: string;
  gradient: { from: string; to: string };
}

export interface Article {
  id: string;
  category: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  author: string;
  date: string;
  readingTime: string;
  content: React.ReactNode;
  relatedArticles: RelatedArticle[];
}

export interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  category: string;
}

export interface Menu {
  id: string;
  name: string;
  path: string;
  icon?: string;
}

export interface RecipeDetail {
  id: string;
  /**
   * Canonical URL segment, derived from the title. Written out rather than
   * computed so that rewording a title cannot silently change a live URL.
   */
  slug: string;
  description: string;
  title: string;
  image: string;
  /**
   * Landscape crop for social previews. `image` is portrait, and Facebook and
   * WhatsApp only render the large preview for roughly landscape images.
   * Optional: without one the page falls back to the site image.
   */
  ogImage?: string;
  ingredients: string[];
  preparation: string[];
  timePrep: string;
  portions: string;
  difficulty: "Fácil" | "Media" | "Difícil";
  datePublished: string;
}

export interface Slide {
  id: number;
  title?: string;
  subtitle?: string;
  image: string;
  /**
   * Banner alternative text. Required: these images carry the campaign copy
   * baked in, so the alt has to reproduce it (WCAG 1.1.1).
   */
  alt: string;
  mobileImage?: string;
  ctaPrimary: SlideCta;
  ctaSecondary?: SlideCta;
}

export interface SlideCta {
  text: string;
  url: string;
  isExternal?: boolean;
}

/**
 * A promo card: picture, a line of copy and a call to action.
 *
 * One shape that had been written out three times under three names —
 * NutritionCardProps, CardSectionProps and ArticlesProps — so a change to the
 * card meant finding all three.
 */
export interface ContentCard {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  to: string;
}

export interface BalancePageContent {
  hero: {
    description: string;
    title: string;
    image: { alt: string; src: string };
  };
  articles: ContentCard[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}
