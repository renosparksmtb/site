import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching location.hash after route changes.
 */
export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Small delay to let the page render after route change
    const timeout = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [hash, pathname]);
}
