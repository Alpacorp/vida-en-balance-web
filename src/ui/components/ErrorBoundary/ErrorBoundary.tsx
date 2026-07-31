import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  /** Changing this clears the error — the route changed, so give it a go. */
  resetKey?: string;
}

interface ErrorBoundaryState {
  hasFailed: boolean;
}

/**
 * Catches a render error in the page and keeps the rest of the site usable.
 *
 * Every route is code-split, so loading one is a network request that can
 * fail: a connection that drops mid-navigation, or — more often — a tab left
 * open across a deploy, still asking for a chunk whose hashed filename no
 * longer exists. Without a boundary React unmounts the whole tree and the
 * visitor is left staring at a blank white page with nothing to click.
 *
 * It wraps only the routed page, so the header and footer survive and there is
 * still a way out.
 *
 * The recovery is a reload rather than a retry. React.lazy caches the promise
 * it got, rejection included, so re-rendering asks the same dead module again;
 * only a fresh document refetches, and that is also what picks up the new
 * filenames after a deploy.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasFailed: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasFailed: true };
  }

  componentDidCatch(error: unknown) {
    // A boundary that swallows the error is worse than the blank page it
    // replaced. reportError hands it to the global error handler, so it
    // surfaces in the console exactly like an uncaught one would and any error
    // tracking added later picks it up without this component knowing.
    if (typeof reportError === "function") reportError(error);
  }

  componentDidUpdate(previous: ErrorBoundaryProps) {
    if (this.state.hasFailed && previous.resetKey !== this.props.resetKey) {
      this.setState({ hasFailed: false });
    }
  }

  render() {
    if (!this.state.hasFailed) return this.props.children;

    return (
      <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-3xl font-montserrat-bold text-gray-800">
          No pudimos cargar esta página
        </h1>
        <p className="mb-8 font-montserrat-medium text-gray-600">
          Puede que la conexión se haya interrumpido. Vuelve a intentarlo o usa
          el menú para ir a otra sección.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-md bg-main px-6 py-3 font-montserrat-medium text-white transition-colors hover:bg-secondary"
        >
          Recargar la página
        </button>
      </div>
    );
  }
}
