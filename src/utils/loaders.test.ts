import { describe, it, expect, vi } from "vitest";

import {
  homePageLoader,
  recipeDetailPageLoader,
  routesLoaders,
} from "./loaders";
import { mainMenuLinks } from "@content/navigation/mainMenuLinks";

// The factories run the first time each page module is imported, which is how
// we observe that a loader really triggered its dynamic import.
const imported = vi.hoisted(() => ({
  home: vi.fn(),
  recipeDetail: vi.fn(),
}));

vi.mock("@pages/Home/HomePage", () => {
  imported.home();
  return { default: () => null };
});

vi.mock("@pages/Recipes/RecipeDetailPage", () => {
  imported.recipeDetail();
  return { default: () => null };
});

describe("route loaders", () => {
  it("return void so they are safe as event handlers", () => {
    // Returning the promise from onMouseEnter/onFocus leaves rejections
    // uncaught, which is what @typescript-eslint/no-misused-promises flags.
    expect(homePageLoader()).toBeUndefined();
    expect(recipeDetailPageLoader()).toBeUndefined();
  });

  it("actually execute the dynamic import", async () => {
    homePageLoader();
    await vi.waitFor(() => expect(imported.home).toHaveBeenCalled());
  });

  it("recipeDetailPageLoader imports instead of returning another function", async () => {
    // Regression guard: this loader used to be `() => () => import(...)`, so
    // calling it returned a function and the chunk was never prefetched.
    expect(typeof recipeDetailPageLoader()).not.toBe("function");

    recipeDetailPageLoader();
    await vi.waitFor(() => expect(imported.recipeDetail).toHaveBeenCalled());
  });

  it("every main menu path has a loader", () => {
    // Header prefetches with routesLoaders[path]?.(), so a missing entry fails
    // silently and that link simply never preloads.
    const withoutLoader = mainMenuLinks
      .filter((link) => !(link.path in routesLoaders))
      .map((link) => `${link.name} (${link.path})`);

    expect(withoutLoader, `Menu entries without loader: ${withoutLoader.join(", ")}`).toEqual([]);
  });

  it("does not reject when the import fails", async () => {
    const onUnhandled = vi.fn();
    process.on("unhandledRejection", onUnhandled);

    const failing = routesLoaders["/productos"];
    expect(failing).toBeDefined();
    expect(failing!()).toBeUndefined();

    await new Promise((r) => setTimeout(r, 0));
    process.off("unhandledRejection", onUnhandled);
    expect(onUnhandled).not.toHaveBeenCalled();
  });
});
