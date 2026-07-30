import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { slides } from "@content/home/hero/slides";
import { tabsContent } from "@content/home/tabs/tabs";
import { healthOptions } from "@content/home/health/healthOptions";
import { balanceContent } from "@content/balance/balance";
import { articles } from "@content/blogs/articles";
import { mainMenuLinks } from "@content/navigation/mainMenuLinks";
import { productsData as nutritionalProducts } from "@content/nutritional/products";
import { productsData as recipeProducts } from "@content/recipes/recipes";
import { recipesDetails } from "@content/recipes/recipesDetails";

/**
 * Site content is hand-written static data: image paths, slugs and internal
 * links that TypeScript cannot validate because they are plain strings. A typo
 * here does not break the build, it ships as a broken image or a 404 in
 * production. These tests close that gap.
 */

const PUBLIC_DIR = join(process.cwd(), "public");
const ASSET_RE = /^\/assets\/.+\.(webp|png|jpe?g|svg|avif)$/i;

/** Collects every string that looks like an asset path, at any depth. */
function collectAssetPaths(value: unknown, seen = new WeakSet()): string[] {
  if (typeof value === "string") return ASSET_RE.test(value) ? [value] : [];
  if (value === null || typeof value !== "object") return [];
  if (seen.has(value)) return [];
  seen.add(value);
  return Object.values(value as Record<string, unknown>).flatMap((v) =>
    collectAssetPaths(v, seen),
  );
}

describe("referenced images", () => {
  const sources: Record<string, unknown> = {
    slides,
    tabsContent,
    healthOptions,
    balanceContent,
    articles,
    "products (nutritional)": nutritionalProducts,
    "products (recipes)": recipeProducts,
    recipesDetails,
  };

  for (const [name, data] of Object.entries(sources)) {
    it(`every image in ${name} exists under public/`, () => {
      const paths = [...new Set(collectAssetPaths(data))];
      expect(paths.length, `${name} references no image at all`).toBeGreaterThan(0);

      const missing = paths.filter((p) => !existsSync(join(PUBLIC_DIR, p)));
      expect(missing, `Missing images:\n  ${missing.join("\n  ")}`).toEqual([]);
    });
  }
});

describe("hero slides", () => {
  it("every slide has a non-empty alt", () => {
    // The banners carry the campaign copy baked into the image: without an alt
    // that text does not exist for screen readers or search engines.
    const withoutAlt = slides.filter((s) => !s.alt?.trim()).map((s) => s.id);
    expect(withoutAlt, `Slides missing alt: ${withoutAlt.join(", ")}`).toEqual([]);
  });

  it("no CTA points at an empty URL", () => {
    for (const slide of slides) {
      expect(slide.ctaPrimary.url, `slide ${slide.id}`).toBeTruthy();
      expect(slide.ctaPrimary.text, `slide ${slide.id}`).toBeTruthy();
    }
  });

  it("external CTAs are flagged as external", () => {
    const mislabelled = slides
      .flatMap((s) => [s.ctaPrimary, s.ctaSecondary])
      .filter((cta) => cta?.url.startsWith("http") && !cta.isExternal);
    expect(mislabelled).toEqual([]);
  });
});

describe("recipes", () => {
  const recipes = Object.values(recipeProducts).flatMap((p) => p.recipes);

  it("every listed recipe has a detail entry", () => {
    const withoutDetail = recipes
      .filter((r) => !(r.id in recipesDetails))
      .map((r) => `${r.id} (${r.title})`);
    expect(withoutDetail, `Recipes without detail: ${withoutDetail.join(", ")}`).toEqual([]);
  });

  it("no detail entry is orphaned", () => {
    const listed = new Set(recipes.map((r) => r.id));
    const orphans = Object.keys(recipesDetails).filter((id) => !listed.has(id));
    expect(orphans, `Details nothing links to: ${orphans.join(", ")}`).toEqual([]);
  });

  it("ids are unique across every product", () => {
    // RecipeDetailPage resolves by id and ignores productSlug, so two products
    // sharing a recipe id would render the same page for both.
    const ids = recipes.map((r) => r.id);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect([...new Set(duplicates)]).toEqual([]);
  });
});

describe("internal links", () => {
  it("every nutritional product points at its own slug", () => {
    for (const p of nutritionalProducts) {
      expect(p.url, `product ${p.name}`).toBe(`/productos/${p.slug}`);
    }
  });

  it("product slugs are unique", () => {
    const slugs = nutritionalProducts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("tab CTAs resolve to real content", () => {
    for (const tab of tabsContent) {
      const nutritionalSlug = tab.nutritional_link.replace("/productos/", "");
      expect(
        nutritionalProducts.some((p) => p.slug === nutritionalSlug),
        `${tab.name}: nutritional_link "${tab.nutritional_link}" does not exist`,
      ).toBe(true);

      const recipeSlug = tab.recipes_link.replace("/recetas/", "");
      expect(
        recipeSlug in recipeProducts,
        `${tab.name}: recipes_link "${tab.recipes_link}" does not exist`,
      ).toBe(true);
    }
  });

  it("health cards point at existing balance pages", () => {
    for (const option of healthOptions) {
      const key = option.href.replace("/", "");
      expect(key in balanceContent, `href "${option.href}" does not exist`).toBe(true);
    }
  });

  it("the main menu only links to known routes", () => {
    const staticRoutes = new Set(["/recetas", "/productos"]);
    for (const link of mainMenuLinks) {
      const isBalance = link.path.replace("/", "") in balanceContent;
      expect(
        staticRoutes.has(link.path) || isBalance,
        `"${link.name}" points at ${link.path}, which does not resolve`,
      ).toBe(true);
    }
  });
});

describe("articles", () => {
  it("slugs are unique per category", () => {
    const keys = articles.map((a) => `${a.category}/${a.slug}`);
    const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i);
    expect([...new Set(duplicates)]).toEqual([]);
  });

  it("related articles exist", () => {
    const existing = new Set(articles.map((a) => `${a.category}/${a.slug}`));
    const broken = articles.flatMap((a) =>
      a.relatedArticles
        .filter((r) => !existing.has(`${r.category}/${r.slug}`))
        .map((r) => `${a.slug} → ${r.category}/${r.slug}`),
    );
    expect(broken, `Broken related links:\n  ${broken.join("\n  ")}`).toEqual([]);
  });

  it("no article lists itself as related", () => {
    const selfReferences = articles
      .filter((a) => a.relatedArticles.some((r) => r.slug === a.slug))
      .map((a) => a.slug);
    expect(selfReferences).toEqual([]);
  });
});
