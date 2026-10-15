import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Tracks which <section> the page is scrolled into, as a `#id` hash.
 * Also reports whether the page is still near the top.
 */
export function useActiveSection(initial = "#home") {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(initial);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (location.hash.length) setActiveLink(location.hash);
  }, [location]);

  const onScroll = useCallback(() => {
    const top = window.scrollY;
    setAtTop(top < 60);
    document.querySelectorAll("section").forEach((section) => {
      const offset = section.offsetTop;
      if (top >= offset && top < offset + section.offsetHeight) {
        setActiveLink(`#${section.id}`);
      }
    });
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { activeLink, atTop };
}
