import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { Tabs } from "./Tabs";
import { tabsContent } from "@content/home/tabs/tabs";
import { expectNoA11yViolations } from "@test/a11y";

function renderTabs() {
  return render(
    <MemoryRouter>
      <Tabs />
    </MemoryRouter>,
  );
}

describe("Tabs", () => {
  it("has no detectable accessibility violations", async () => {
    const { container } = renderTabs();
    await expectNoA11yViolations(container);
  });

  it("never renders an empty heading", () => {
    const { container } = renderTabs();

    // Several product presentations carry no name. Rendering the heading
    // regardless put empty <h3> elements into the document outline, which a
    // screen reader announces as headings containing nothing.
    const empty = [...container.querySelectorAll("h1, h2, h3, h4, h5, h6")]
      .filter((h) => !h.textContent?.trim())
      .map((h) => h.outerHTML);

    expect(empty).toEqual([]);
  });

  it("still shows the presentations that do have a name", () => {
    renderTabs();

    const named = tabsContent[0]?.types?.filter((t) => t.name) ?? [];
    expect(named.length).toBeGreaterThan(0);

    for (const type of named) {
      expect(
        screen.getAllByRole("heading", { name: type.name }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("labels the product selector in Spanish", () => {
    renderTabs();
    expect(
      screen.getByRole("navigation", { name: "Productos" }),
    ).toBeInTheDocument();
  });

  it("marks the selected product without claiming it is a page", async () => {
    const user = userEvent.setup();
    renderTabs();

    const nav = screen.getByRole("navigation", { name: "Productos" });
    const buttons = [...nav.querySelectorAll("button")];
    expect(buttons.length).toBe(tabsContent.length);

    // aria-current="page" made a screen reader announce "current page" for a
    // button that selects a product and navigates nowhere.
    expect(buttons[0]).toHaveAttribute("aria-current", "true");
    expect(buttons[1]).not.toHaveAttribute("aria-current");

    await user.click(buttons[1]!);

    expect(buttons[1]).toHaveAttribute("aria-current", "true");
    expect(buttons[0]).not.toHaveAttribute("aria-current");
  });
});
