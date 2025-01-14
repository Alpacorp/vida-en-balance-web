import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CardSection, HeroSection } from '@ui/index';

import { balanceContent } from "@content/balance/balance";

import { NotFoundPage } from "@pages/NotFound/NotFoundPage.tsx";

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

  return (
    <>
      <HeroSection {...pageContent.hero} />
      <CardSection article={pageContent.articles} />
    </>
  );
};

