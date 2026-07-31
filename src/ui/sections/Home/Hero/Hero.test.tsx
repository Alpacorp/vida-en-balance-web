import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
 * Index of the slide being shown, read from the state the carousel exposes.
 *
 * This used to have to read a CSS class, because which slide was showing lived
 * nowhere else — assistive tech had no way to tell either. aria-current on the
 * dots is now the source of truth, so the test asks the same question a screen
 * reader would.
 */
function visibleSlideIndex() {
  const dots = screen.getAllByRole("button", { name: /^Ir a la diapositiva/ });
  return dots.findIndex((dot) => dot.getAttribute("aria-current") === "true");
}

/** The slide panels, in DOM order. */
function slidePanels() {
  return screen.getAllByRole("group", { hidden: true });
}

/**
 * Forces the reduced-motion media query on or off.
 *
 * jsdom implements matchMedia but answers `false` to everything, so the
 * reduced-motion path is unreachable without a stub.
 */
function stubReducedMotion(reduced: boolean) {
  vi.stubGlobal(
    "matchMedia",
    (query: string): MediaQueryList =>
      ({
        matches: query.includes("prefers-reduced-motion") ? reduced : false,
        media: query,
        onchange: null,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        addListener: () => undefined,
        removeListener: () => undefined,
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList,
  );
}

afterEach(() => vi.unstubAllGlobals());

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
      expect(
        node.textContent?.trim(),
        `empty <${node.tagName.toLowerCase()}>`,
      ).not.toBe("");
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

  describe("accessible structure", () => {
    it("announces itself as a carousel of slides", () => {
      renderHero();

      const carousel = screen.getByRole("region", { name: "Destacados" });
      expect(carousel).toHaveAttribute("aria-roledescription", "carrusel");

      const panels = slidePanels();
      expect(panels).toHaveLength(slides.length);
      panels.forEach((panel, index) => {
        expect(panel).toHaveAttribute("aria-roledescription", "diapositiva");
        expect(panel).toHaveAccessibleName(`${index + 1} de ${slides.length}`);
      });
    });

    it("labels its controls in Spanish", () => {
      renderHero();

      // These were shipped in English on a Spanish site, so a screen reader
      // read them with the wrong pronunciation rules.
      expect(
        screen.getByRole("button", { name: "Diapositiva anterior" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Diapositiva siguiente" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Ir a la diapositiva 1" }),
      ).toBeInTheDocument();
    });

    it("keeps every slide but the visible one out of reach", () => {
      renderHero();

      // opacity-0 hides a slide from sight only. Its links stayed in the tab
      // order, so keyboard users landed on controls they could not see.
      slidePanels().forEach((panel, index) => {
        if (index === 0) expect(panel).not.toHaveAttribute("inert");
        else expect(panel).toHaveAttribute("inert");
      });
    });

    it("moves inert and aria-current together with the slide", async () => {
      const user = userEvent.setup();
      renderHero();

      await user.click(
        screen.getByRole("button", { name: "Diapositiva siguiente" }),
      );

      expect(visibleSlideIndex()).toBe(1);
      expect(slidePanels()[1]).not.toHaveAttribute("inert");
      expect(slidePanels()[0]).toHaveAttribute("inert");
    });
  });

  describe("navigation", () => {
    it("advances and goes back with the arrow buttons", async () => {
      const user = userEvent.setup();
      renderHero();
      expect(visibleSlideIndex()).toBe(0);

      await user.click(
        screen.getByRole("button", { name: "Diapositiva siguiente" }),
      );
      expect(visibleSlideIndex()).toBe(1);

      await user.click(
        screen.getByRole("button", { name: "Diapositiva anterior" }),
      );
      expect(visibleSlideIndex()).toBe(0);
    });

    it("wraps around when going back from the first slide", async () => {
      const user = userEvent.setup();
      renderHero();

      await user.click(
        screen.getByRole("button", { name: "Diapositiva anterior" }),
      );
      expect(visibleSlideIndex()).toBe(slides.length - 1);
    });

    it("jumps to a slide from its dot", async () => {
      const user = userEvent.setup();
      renderHero();

      await user.click(
        screen.getByRole("button", {
          name: `Ir a la diapositiva ${slides.length}`,
        }),
      );
      expect(visibleSlideIndex()).toBe(slides.length - 1);
    });
  });

  describe("autoplay", () => {
    beforeEach(() => vi.useFakeTimers());
    afterEach(() => vi.useRealTimers());

    /** Runs one autoplay interval. */
    const tick = () => void act(() => vi.advanceTimersByTime(10_000));

    it("advances on its own and clears the timer on unmount", () => {
      const clear = vi.spyOn(globalThis, "clearInterval");
      const { unmount } = renderHero();

      // The interval updates state, so the tick has to run inside act() for
      // React to flush the re-render before we assert.
      tick();
      expect(visibleSlideIndex()).toBe(1);

      unmount();
      expect(clear).toHaveBeenCalled();
    });

    it("stops when the visitor presses pause, and resumes on play", () => {
      renderHero();

      // WCAG 2.2.2: content that moves for more than five seconds needs a way
      // to stop it. Ten seconds of unstoppable rotation failed that outright.
      fireEvent.click(
        screen.getByRole("button", { name: "Pausar la rotación automática" }),
      );

      tick();
      tick();
      expect(visibleSlideIndex()).toBe(0);

      fireEvent.click(
        screen.getByRole("button", { name: "Reanudar la rotación automática" }),
      );

      tick();
      expect(visibleSlideIndex()).toBe(1);
    });

    it("pauses while the pointer rests on a slide", () => {
      renderHero();
      const slideArea = slidePanels()[0]!.parentElement!;

      fireEvent.mouseEnter(slideArea);
      tick();
      expect(visibleSlideIndex()).toBe(0);

      fireEvent.mouseLeave(slideArea);
      tick();
      expect(visibleSlideIndex()).toBe(1);
    });

    it("does not rotate at all when the visitor asked for reduced motion", () => {
      stubReducedMotion(true);
      renderHero();

      tick();
      tick();
      expect(visibleSlideIndex()).toBe(0);

      // Offering to pause something that never moves is a dead control.
      expect(
        screen.queryByRole("button", { name: /rotación automática/ }),
      ).not.toBeInTheDocument();
    });
  });
});
