import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ACTIVE_PROBE, AT_TOP_OFFSET, BOTTOM_OFFSET } from "./constants";

/**
 * Tracks which <section> the page is scrolled into, as a `#id` hash, and keeps
 * the URL hash in sync (without adding history entries). The first section
 * clears the hash. Also reports whether the page is still near the top.
 */
export function useActiveSection(initial = "#home") {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(initial);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (location.hash.length) setActiveLink(location.hash);
  }, [location]);

  const onScroll = useCallback(() => {
    setAtTop(window.scrollY < AT_TOP_OFFSET);

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    if (!sections.length) return;

    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - BOTTOM_OFFSET;
    const current = atBottom
      ? sections[sections.length - 1]
      : sections.find((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          return top <= ACTIVE_PROBE && bottom > ACTIVE_PROBE;
        });
    if (!current) return;

    const hash = `#${current.id}`;
    setActiveLink(hash);

    const urlHash = current === sections[0] ? "" : hash;
    if (window.location.hash !== urlHash) {
      const { pathname, search } = window.location;
      window.history.replaceState(
        window.history.state,
        "",
        `${pathname}${search}${urlHash}`,
      );
    }
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { activeLink, atTop };
}
