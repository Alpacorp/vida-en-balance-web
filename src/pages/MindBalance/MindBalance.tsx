import { FC } from "react";

import { CardSection, HeroSection } from '@ui/sections';

import mindBalanceContent from "@content/balance/mindBalanceContent.json";

export const MindBalance: FC = () => {
  return (
    <div className="font-sans">
      <HeroSection { ...mindBalanceContent.hero } />
      <CardSection article={ mindBalanceContent.articles } />
    </div>
  );
};
