import { FC } from "react";

import { CardSection, HeroSection } from '@ui/sections';

import tipsBalanceContent from "@content/balance/tipsBalanceContent.json";

export const Tips: FC = () => {
  return (
    <div className="font-sans">
      <HeroSection { ...tipsBalanceContent.hero } />
      <CardSection article={ tipsBalanceContent.articles } />
    </div>
  );
};
