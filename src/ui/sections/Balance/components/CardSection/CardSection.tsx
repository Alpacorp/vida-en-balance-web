import { FC, Key} from 'react';

import {NutritionCard} from "@ui/components";

interface CardSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  to: string;
}

interface ArticleProps {
  article: CardSectionProps[];
}

export const CardSection: FC<ArticleProps> = ({ article }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {article.map((card, index: Key | null | undefined) => (
          <NutritionCard
            key={index}
            {...card}
          />
        ))}
      </div>
    </section>
  );
};

