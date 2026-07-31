import { FC } from "react";

import { Heading, Hero, Health, Tabs } from "@ui/index";
import { Seo } from "@utils/Seo.tsx";

import { BASE_URL } from "@config/config";

const HomePage: FC = () => {
  const seoData = {
    title: "San Rafael Balance® - Productos saludables para tu bienestar",
    description:
      "Descubre nuestra gama de productos San Rafael Balance® para una vida más saludable y equilibrada.",
    keywords: "San Rafael Balance, balance, salud, bienestar, productos saludables",
    url: `${BASE_URL}/`,
    // The file is .webp; the .png named here never existed, so sharing the
    // home page — the most shared URL of the site — previewed with no image.
    imageSeo: "/assets/images/disfruta-cuidandote.webp",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "San Rafael Balance®",
      url: `${BASE_URL}/`,
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  };

  return (
    <div className="overflow-x-hidden">
      <Seo {...seoData} />
      <Hero />
      <Heading tag="h1" text="Productos San Rafael Balance®" />
      <Tabs />
      <Heading tag="h2" text="Aprende a Cuidarte" />
      <Health />
    </div>
  );
};

export default HomePage;
