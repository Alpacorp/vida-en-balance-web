import axe from "axe-core";
import { expect } from "vitest";

/**
 * Runs axe against a node and fails with the detail of every violation.
 *
 * Uses axe-core directly rather than a jest-axe/vitest-axe wrapper: those
 * packages lag well behind Vitest 4 and only a few lines are needed here.
 */
export async function expectNoA11yViolations(container: HTMLElement) {
  const results = await axe.run(container, {
    // Contrast rules need a real layout, which jsdom does not compute; leaving
    // them on would produce silent false negatives. Contrast is checked in the
    // browser, not here.
    rules: { "color-contrast": { enabled: false } },
  });

  const detail = results.violations
    .map(
      (v) =>
        `[${v.impact ?? "no impact"}] ${v.id}: ${v.help}\n` +
        v.nodes.map((n) => `    ${n.html}`).join("\n"),
    )
    .join("\n\n");

  expect(results.violations, detail).toHaveLength(0);
}
