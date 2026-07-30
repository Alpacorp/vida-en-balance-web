import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { act } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { Hero } from "./Hero";
import { slides } from "@content/home/hero/slides";
import { expectNoA11yViolations } from "@test/a11y";

function renderHero() {
  return render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>,
  );
}

/** The slide images, in DOM order. */
function slideImages() {
  return screen
    .getAllByRole("img")
    .filter((img) => img.getAttribute("src")?.includes("/assets/images/"));
}

/**
 * Index of the visible slide.
 *
 * This has to read a CSS class because the carousel exposes no accessible
 * state: the dots carry no aria-current and there is no live region, so
 * nothing tells assistive tech — or a test — which slide is showing. Replace
 * this helper with a role/state query once the accessibility pass lands.
 */
function visibleSlideIndex(container: HTMLElement) {
  // Only the slide panels animate their opacity; the inner image wrapper and
  // the gradient overlay share `absolute inset-0` and must not be matched.
  const panels = [...container.querySelectorAll<HTMLElement>("div.transition-opacity")];
  return panels.findIndex((p) => p.classList.contains("opacity-100"));
}

describe("Hero", () => {
  it("renders one image per slide, all with alternative text", () => {
    renderHero();
    const images = slideImages();

    expect(images).toHaveLength(slides.length);
    for (const img of images) {
      // Regression guard: alt used to come from an optional `title` that no
      // slide defined, so React dropped the attribute entirely.
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")?.trim()).not.toBe("");
    }
  });

  it("never renders an empty heading or paragraph", () => {
    const { container } = renderHero();
    // The three slides carry their copy inside the image. Rendering the
    // heading unconditionally produced three empty <h1> on the home page.
    for (const node of container.querySelectorAll("h1, h2, h3, p")) {
      expect(node.textContent?.trim(), `empty <${node.tagName.toLowerCase()}>`).not.toBe("");
    }
  });

  it("marks only the first slide as the LCP candidate", () => {
    renderHero();
    const images = slideImages();

    expect(images[0]).toHaveAttribute("fetchpriority", "high");
    expect(images[0]).toHaveAttribute("loading", "eager");
    for (const img of images.slice(1)) {
      expect(img).toHaveAttribute("fetchpriority", "low");
      expect(img).toHaveAttribute("loading", "lazy");
    }
  });

  it("renders external CTAs as anchors with a safe rel", () => {
    renderHero();
    const external = slides.filter((s) => s.ctaPrimary.isExternal);
    expect(external.length).toBeGreaterThan(0);

    for (const slide of external) {
      const link = screen.getByRole("link", { name: slide.ctaPrimary.text });
      expect(link).toHaveAttribute("href", slide.ctaPrimary.url);
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = renderHero();
    await expectNoA11yViolations(container);
  });

  describe("navigation", () => {
    it("advances and goes back with the arrow buttons", async () => {
      const user = userEvent.setup();
      const { container } = renderHero();
      expect(visibleSlideIndex(container)).toBe(0);

      await user.click(screen.getByRole("button", { name: /next slide/i }));
      expect(visibleSlideIndex(container)).toBe(1);

      await user.click(screen.getByRole("button", { name: /previous slide/i }));
      expect(visibleSlideIndex(container)).toBe(0);
    });

    it("wraps around when going back from the first slide", async () => {
      const user = userEvent.setup();
      const { container } = renderHero();

      await user.click(screen.getByRole("button", { name: /previous slide/i }));
      expect(visibleSlideIndex(container)).toBe(slides.length - 1);
    });

    it("jumps to a slide from its dot", async () => {
      const user = userEvent.setup();
      const { container } = renderHero();

      await user.click(
        screen.getByRole("button", { name: `Go to slide ${slides.length}` }),
      );
      expect(visibleSlideIndex(container)).toBe(slides.length - 1);
    });
  });

  describe("autoplay", () => {
    beforeEach(() => vi.useFakeTimers());
    afterEach(() => vi.useRealTimers());

    it("advances on its own and clears the timer on unmount", () => {
      const clear = vi.spyOn(globalThis, "clearInterval");
      const { unmount, container } = renderHero();

      // The interval updates state, so the tick has to run inside act() for
      // React to flush the re-render before we assert.
      void act(() => vi.advanceTimersByTime(10_000));
      expect(visibleSlideIndex(container)).toBe(1);

      unmount();
      expect(clear).toHaveBeenCalled();
    });
  });
});
