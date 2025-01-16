import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CardSection, HeroSection } from '@ui/index';

import { balanceContent } from "@content/balance/balance";

import { SEO } from "@utils/SEO.tsx";
import { NotFoundPage } from "@pages/NotFound/NotFoundPage";

import { BalancePageContent } from "@interfaces/interfaces";

export const BalancePage: FC = () => {
  const navigate = useNavigate();
  const { balanceType } = useParams<{ balanceType: string }>();
  const [pageContent, setPageContent] = useState<BalancePageContent | null>(null);

  useEffect(() => {
    if (balanceType && balanceType in balanceContent) {
      setPageContent(balanceContent[balanceType as keyof typeof balanceContent]);
    }
  }, [balanceType]);

  if (!pageContent) {
    return <NotFoundPage type="page" goBack={() => navigate(-1)} />;
  }

  const seoData = {
    ...pageContent.seo,
    url: `https://www.vidaenbalance.com/${balanceType}`,
    imageSeo: pageContent.hero.image.src,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": pageContent.seo.title,
      "description": pageContent.seo.description,
      "url": `https://www.tudominio.com/${balanceType}`
    }
  };

  return (
    <>
      <SEO {...seoData} />
      <HeroSection {...pageContent.hero} />
      <CardSection article={pageContent.articles} />
    </>
  );
};

