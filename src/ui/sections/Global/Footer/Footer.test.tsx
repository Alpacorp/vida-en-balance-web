import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Footer } from "./Footer";
import { expectNoA11yViolations } from "@test/a11y";

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );
}

afterEach(() => vi.useRealTimers());

describe("Footer", () => {
  it("has no detectable accessibility violations", async () => {
    const { container } = renderFooter();
    await expectNoA11yViolations(container);
  });

  it("labels its navigation in Spanish", () => {
    // It read "Footer" on a site that is otherwise entirely in Spanish.
    expect(
      renderFooter().container.querySelector("nav"),
    ).toHaveAccessibleName("Pie de página");
  });

  it("shows the year the bundle was built", () => {
    renderFooter();
    expect(
      screen.getByText(new RegExp(`${__BUILD_YEAR__}\\s+San Rafael`)),
    ).toBeInTheDocument();
  });

  it("does not read the year from the visitor's clock", () => {
    // The old version called new Date().getFullYear() during render. Every
    // route is prerendered, so the HTML held the build year while the browser
    // computed today's: identical all year, different on the first of January.
    // That mismatch makes React discard the hydrated tree and re-render the
    // whole root on the client, for everyone, until the next deploy.
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2099-01-01T00:00:00Z"));

    renderFooter();

    expect(screen.queryByText(/2099/)).not.toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${__BUILD_YEAR__}\\s+San Rafael`)),
    ).toBeInTheDocument();
  });
});
