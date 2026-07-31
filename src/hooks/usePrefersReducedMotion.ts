import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

/**
 * The prerenderer has no window, and no way to know what the visitor prefers.
 * Assuming "no preference" matches the markup React hydrates against; the real
 * value arrives on the first client render.
 */
const getServerSnapshot = () => false;

/**
 * Whether the visitor asked their system to reduce motion.
 *
 * useSyncExternalStore rather than useState + useEffect: it subscribes to the
 * media query, so a change to the system setting is picked up while the page is
 * open, and it is the only hook that takes a server snapshot — which this needs,
 * since the home page is prerendered.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
