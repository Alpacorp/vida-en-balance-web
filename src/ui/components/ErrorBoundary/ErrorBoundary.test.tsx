import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import type { MockInstance } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ErrorBoundary } from "./ErrorBoundary";

function Boom(): React.ReactElement {
  throw new Error("chunk no disponible");
}

const Fine = () => <p>contenido</p>;

let consoleError: MockInstance<(...args: unknown[]) => void>;

beforeEach(() => {
  // React logs every caught error, and the boundary logs its own on top.
  consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);
});

afterEach(() => consoleError.mockRestore());

describe("ErrorBoundary", () => {
  it("renders its children while nothing is wrong", () => {
    render(
      <ErrorBoundary>
        <Fine />
      </ErrorBoundary>,
    );
    expect(screen.getByText("contenido")).toBeInTheDocument();
  });

  it("replaces a page that throws with a way out", () => {
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    );

    // Every route is code-split. Without this, a chunk that fails to load —
    // a dropped connection, or a tab open across a deploy asking for a
    // filename that no longer exists — left a blank page and nothing to click.
    expect(
      screen.getByRole("heading", { name: /no pudimos cargar esta página/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /recargar/i }),
    ).toBeInTheDocument();
  });

  it("reports the error instead of swallowing it", () => {
    const reported: unknown[] = [];
    vi.stubGlobal("reportError", (error: unknown) => reported.push(error));

    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    );

    // A boundary that hides the error is worse than the blank page it
    // replaced. reportError routes it to the global handler, so it shows up
    // like an uncaught error and any tracking added later receives it.
    expect(reported.map(String).join(" ")).toContain("chunk no disponible");

    vi.unstubAllGlobals();
  });

  it("reloads the document rather than re-rendering", async () => {
    const reload = vi.fn();
    vi.spyOn(window, "location", "get").mockReturnValue({
      ...window.location,
      reload,
    } as unknown as Location);

    const user = userEvent.setup();
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    );

    await user.click(screen.getByRole("button", { name: /recargar/i }));

    // React.lazy caches the promise it got, rejection included, so retrying
    // the render asks the same dead module again. Only a fresh document
    // refetches it — and picks up the filenames a deploy changed.
    expect(reload).toHaveBeenCalled();
  });

  it("clears itself when the visitor navigates elsewhere", () => {
    const { rerender } = render(
      <ErrorBoundary resetKey="/recetas">
        <Boom />
      </ErrorBoundary>,
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();

    // Otherwise one broken page poisons the rest of the session.
    rerender(
      <ErrorBoundary resetKey="/productos">
        <Fine />
      </ErrorBoundary>,
    );

    expect(screen.getByText("contenido")).toBeInTheDocument();
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
