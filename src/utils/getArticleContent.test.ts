import { describe, it, expect } from "vitest";

import { getArticle, getRelatedArticles } from "./getArticleContent";
import { articles } from "@content/blogs/articles";

describe("getArticle", () => {
  it("finds an article by category and slug", () => {
    const [first] = articles;
    expect(first).toBeDefined();

    const found = getArticle(first!.category, first!.slug);
    expect(found?.slug).toBe(first!.slug);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getArticle(articles[0]!.category, "no-existe")).toBeUndefined();
  });

  it("does not match a valid slug under the wrong category", () => {
    // ArticlePage routes on /:category/:slug, so a mismatched pair has to miss
    // rather than fall through to the article.
    expect(getArticle("categoria-inventada", articles[0]!.slug)).toBeUndefined();
  });
});

describe("getRelatedArticles", () => {
  it("returns the related list of an existing article", () => {
    const withRelated = articles.find((a) => a.relatedArticles.length > 0);
    expect(withRelated, "no article has related entries").toBeDefined();

    const related = getRelatedArticles(withRelated!.category, withRelated!.slug);
    expect(related).toEqual(withRelated!.relatedArticles);
  });

  it("returns an empty list for an unknown article", () => {
    expect(getRelatedArticles("nope", "nope")).toEqual([]);
  });
});
