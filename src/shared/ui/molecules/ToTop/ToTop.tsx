import { useState, useEffect } from "react";

// @sito/ui
import { IconButton, Tooltip } from "@sito/ui";

// fortawesome
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@/shared/ui/atoms";

// utils
import { scrollTo } from "some-javascript-utils/browser";

import { SHOW_AFTER } from "./constants";
import type { ToTopProps } from "./types";
import { useDockLift } from "./useDockLift";

/**
 * Floating button that scrolls back to the top once the page is scrolled. With `dockTo`, it
 * lines up with that element when the page reaches it.
 */
export function ToTop({ label, tooltip, dockTo }: ToTopProps) {
  const [visible, setVisible] = useState(false);
  const buttonRef = useDockLift(dockTo);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Tooltip label={tooltip} align="end" className="to-top-anchor">
      <IconButton
        ref={buttonRef}
        onClick={() => scrollTo(0)}
        icon={<Icon icon={faArrowUp} />}
        aria-label={label}
        color="primary"
        variant="submit"
        name="to-top"
        tabIndex={visible ? 0 : -1}
        data-shown={visible}
        className="to-top"
      />
    </Tooltip>
  );
}
