import { FC } from "react";
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

  // Derived straight from the URL rather than mirrored into state. Holding it
  // in state meant the first render always saw null and returned the 404 page,
  // so a valid URL flashed "not found" — and mounted its <Seo> — before the
  // effect ran and swapped in the real content.
  const pageContent: BalancePageContent | undefined =
    balanceType && balanceType in balanceContent
      ? balanceContent[balanceType as keyof typeof balanceContent]
      : undefined;

  if (!pageContent) {
    return <NotFoundPage type="page" goBack={() => void navigate(-1)} />;
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
