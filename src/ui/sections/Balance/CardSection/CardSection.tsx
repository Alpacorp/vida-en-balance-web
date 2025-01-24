import { FC, Key } from "react";

import { ArticleCard } from "@ui/index";

import { ArticleProps } from "@interfaces/interfaces";

export const CardSection: FC<ArticleProps> = ({ article }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {article.map((card, index: Key | null | undefined) => (
          <ArticleCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
