import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
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

/**
 * The component renders the list twice — a horizontal strip for phones and a
 * vertical column for wider screens — and CSS hides one. jsdom applies no CSS,
 * so both are queryable and every assertion has to say which one it means.
 */
const tablist = (orientation: "horizontal" | "vertical") =>
  screen
    .getAllByRole("tablist")
    .find((el) => el.getAttribute("aria-orientation") === orientation)!;

const tabsIn = (orientation: "horizontal" | "vertical") =>
  within(tablist(orientation)).getAllByRole("tab");

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

  describe("tab semantics", () => {
    it("exposes a labelled tab list per layout", () => {
      renderTabs();

      for (const orientation of ["horizontal", "vertical"] as const) {
        expect(tablist(orientation)).toHaveAccessibleName("Productos");
        expect(tabsIn(orientation)).toHaveLength(tabsContent.length);
      }
    });

    it("pairs every tab with the panel it controls", () => {
      renderTabs();

      const [selected] = tabsIn("vertical");
      const panelRef = selected!.getAttribute("aria-controls")!;
      const panel = document.getElementById(panelRef);

      expect(panel).not.toBeNull();
      expect(panel).toHaveAttribute("role", "tabpanel");
      // Without this pairing, activating a tab swapped the content with
      // nothing to tell assistive tech that anything had changed.
      expect(panel).toHaveAttribute("aria-labelledby", selected!.id);
    });

    it("gives the two layouts distinct ids", () => {
      const { container } = renderTabs();

      const ids = [...container.querySelectorAll("[id]")].map((el) => el.id);
      const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);

      // Both copies are in the document at once; repeated ids would point the
      // wrong tab at the wrong panel.
      expect(duplicates).toEqual([]);
    });

    it("keeps the whole list to a single tab stop", () => {
      renderTabs();
      const tabs = tabsIn("vertical");

      // Roving tabindex. As plain buttons, reaching the content behind the
      // list meant tabbing past every product first.
      expect(tabs[0]).toHaveAttribute("tabindex", "0");
      for (const tab of tabs.slice(1)) {
        expect(tab).toHaveAttribute("tabindex", "-1");
      }
    });

    it("marks the selected tab and only that one", async () => {
      const user = userEvent.setup();
      renderTabs();
      const tabs = tabsIn("vertical");

      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
      expect(tabs[1]).toHaveAttribute("aria-selected", "false");

      await user.click(tabs[1]!);

      expect(tabs[1]).toHaveAttribute("aria-selected", "true");
      expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    });
  });

  describe("keyboard", () => {
    it("moves between products with the arrow keys", async () => {
      const user = userEvent.setup();
      renderTabs();
      const tabs = tabsIn("vertical");

      tabs[0]!.focus();
      await user.keyboard("{ArrowDown}");

      expect(tabs[1]).toHaveFocus();
      // Selection follows focus, so the panel shows each product as you go.
      expect(tabs[1]).toHaveAttribute("aria-selected", "true");
      expect(tabs[1]).toHaveAttribute("tabindex", "0");
      expect(tabs[0]).toHaveAttribute("tabindex", "-1");
    });

    it("wraps around at both ends", async () => {
      const user = userEvent.setup();
      renderTabs();
      const tabs = tabsIn("vertical");
      const last = tabs.length - 1;

      tabs[0]!.focus();
      await user.keyboard("{ArrowUp}");
      expect(tabs[last]).toHaveFocus();

      await user.keyboard("{ArrowDown}");
      expect(tabs[0]).toHaveFocus();
    });

    it("jumps to the ends with Home and End", async () => {
      const user = userEvent.setup();
      renderTabs();
      const tabs = tabsIn("vertical");

      tabs[0]!.focus();
      await user.keyboard("{End}");
      expect(tabs[tabs.length - 1]).toHaveFocus();

      await user.keyboard("{Home}");
      expect(tabs[0]).toHaveFocus();
    });

    it("uses left and right for the horizontal layout", async () => {
      const user = userEvent.setup();
      renderTabs();
      const tabs = tabsIn("horizontal");

      tabs[0]!.focus();
      await user.keyboard("{ArrowRight}");
      expect(tabs[1]).toHaveFocus();

      await user.keyboard("{ArrowLeft}");
      expect(tabs[0]).toHaveFocus();
    });

    it("steps from the selected tab into the panel content", async () => {
      const user = userEvent.setup();
      renderTabs();
      const tabs = tabsIn("vertical");
      const panel = document.getElementById(
        tabs[0]!.getAttribute("aria-controls")!,
      )!;

      tabs[0]!.focus();
      await user.tab();

      // The point of the whole pattern: one Tab off the list reaches the
      // content, instead of walking through the four remaining products.
      expect(panel.contains(document.activeElement)).toBe(true);
    });
  });
});
