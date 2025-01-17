import { FC } from "react";

import { Heading, Hero, Health, Tabs } from "@ui/index";
import { SEO } from "@utils/SEO";

import { BASE_URL } from "@config/config";

export const HomePage: FC = () => {

  const seoData = {
    title: 'Vida en Balance - Productos saludables para tu bienestar',
    description: 'Descubre nuestra gama de productos Balance para una vida más saludable y equilibrada.',
    keywords: 'balance, salud, bienestar, productos saludables',
    url: `${BASE_URL}/`,
    imageSeo: `${BASE_URL}/assets/images/disfruta-cuidandote.png`,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Balance",
      "url": `${BASE_URL}/`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  };

  return (
    <main>
      <SEO {...seoData} />
      <Hero />
      <Heading tag="h1" text="Productos San Rafael Balance" customClassName="bg-amber-400" />
      <Tabs />
      <Heading tag="h2" text="Aprende a Cuidarte" customClassName="bg-amber-100"/>
      <Health />
    </main>
  );
};
