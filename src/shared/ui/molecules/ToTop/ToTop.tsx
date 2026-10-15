import { useState, useEffect } from "react";

// @sito/ui
import { IconButton } from "@sito/ui";

// fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// utils
import { scrollTo } from "some-javascript-utils/browser";

import { SHOW_AFTER } from "./constants";
import type { ToTopProps } from "./types";

/** Floating button that scrolls back to the top once the page is scrolled. */
export function ToTop({ label }: ToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <IconButton
      onClick={() => scrollTo(0)}
      icon={<FontAwesomeIcon icon={faArrowUp} />}
      aria-label={label}
      color="primary"
      variant="submit"
      name="to-top"
      tabIndex={visible ? 0 : -1}
      // `scale` (appear/leave) is separate from `transform` (@sito/ui :active press)
      className={`fixed bottom-5 right-5 transition-[scale,transform,background-color,color] duration-300 ${visible ? "z-10 scale-100" : "-z-10 scale-0"}`}
    />
  );
}
