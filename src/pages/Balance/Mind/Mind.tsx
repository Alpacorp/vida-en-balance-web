import { FC } from "react";

import { CardSection, HeroSection } from '@ui/index';

import mindBalanceContent from "@content/balance/mindBalanceContent.json";

export const Mind: FC = () => {
  return (
    <div className="font-sans">
      <HeroSection { ...mindBalanceContent.hero } />
      <CardSection article={ mindBalanceContent.articles } />
    </div>
  );
};
