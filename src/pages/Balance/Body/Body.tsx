import { FC } from "react";

import { CardSection, HeroSection } from '@ui/sections';

import bodyBalanceContent from "@content/balance/bodyBalanceContent.json";

export const Body: FC = () => {
  return (
    <div className="font-sans">
      <HeroSection { ...bodyBalanceContent.hero } />
      <CardSection article={ bodyBalanceContent.articles }/>
    </div>
  );
};
