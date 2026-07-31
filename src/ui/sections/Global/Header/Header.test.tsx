import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { Header } from "./Header";
import { mainMenuLinks } from "@content/navigation/mainMenuLinks";
import { expectNoA11yViolations } from "@test/a11y";

function renderHeader(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Header />
    </MemoryRouter>,
  );
}

const menuPanel = () => document.getElementById("mobile-menu");
const toggle = () => screen.getByRole("button", { name: /men[úu]/i });

describe("Header", () => {
  it("has no detectable accessibility violations", async () => {
    const { container } = renderHeader();
    await expectNoA11yViolations(container);
  });

  describe("mobile menu", () => {
    it("stays out of reach while it is closed", () => {
      renderHeader();

      // Closed, the panel is only clipped by max-height and opacity, so its
      // links kept their place in the tab order and a keyboard user on a phone
      // tabbed into a menu that was not on screen.
      expect(menuPanel()).toHaveAttribute("inert");
    });

    it("becomes reachable once opened", async () => {
      const user = userEvent.setup();
      renderHeader();

      await user.click(toggle());

      expect(menuPanel()).not.toHaveAttribute("inert");
      for (const link of mainMenuLinks) {
        expect(
          screen.getAllByRole("link", { name: link.name }).length,
        ).toBeGreaterThan(0);
      }
    });

    it("names the panel it controls and reports its state", async () => {
      const user = userEvent.setup();
      renderHeader();

      // aria-expanded on its own says something opened without saying what.
      expect(toggle()).toHaveAttribute("aria-controls", "mobile-menu");
      expect(toggle()).toHaveAttribute("aria-expanded", "false");

      await user.click(toggle());
      expect(toggle()).toHaveAttribute("aria-expanded", "true");
    });

    it("closes again on a second press", async () => {
      const user = userEvent.setup();
      renderHeader();

      await user.click(toggle());
      await user.click(toggle());

      expect(toggle()).toHaveAttribute("aria-expanded", "false");
      expect(menuPanel()).toHaveAttribute("inert");
    });
  });
});
