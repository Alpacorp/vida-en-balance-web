import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CardSection, HeroSection } from "@ui/index";

import { balanceContent } from "@content/balance/balance";

import { Seo } from "@utils/Seo.tsx";
import NotFoundPage from "@pages/NotFound/NotFoundPage";

import { BalancePageContent } from "@interfaces/interfaces";
import { BASE_URL } from "@config/config";

const BalancePage: FC = () => {
  const navigate = useNavigate();
  const { balanceType } = useParams<{ balanceType: string }>();
  const [pageContent, setPageContent] = useState<BalancePageContent | null>(
    null,
  );

  useEffect(() => {
    if (balanceType && balanceType in balanceContent) {
      setPageContent(
        balanceContent[balanceType as keyof typeof balanceContent],
      );
    }
  }, [balanceType]);

  if (!pageContent) {
    return <NotFoundPage type="page" goBack={() => navigate(-1)} />;
  }

  const seoData = {
    ...pageContent.seo,
    url: `${BASE_URL}/${balanceType}`,
    imageSeo: pageContent.hero.image.src,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageContent.seo.title,
      description: pageContent.seo.description,
      url: `${BASE_URL}/${balanceType}`,
    },
  };

  return (
    <>
      <Seo {...seoData} />
      <HeroSection {...pageContent.hero} />
      <CardSection article={pageContent.articles} />
    </>
  );
};

export default BalancePage;
