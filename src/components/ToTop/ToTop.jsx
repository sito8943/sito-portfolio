import React, { useState, useCallback, useEffect } from "react";

// @sito/ui
import { IconButton } from "@sito/ui";

// fortawesome
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// utils
import { scrollTo } from "some-javascript-utils/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(
    (e) => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 100) setVisible(true);
      else setVisible(false);
    },
    [setVisible]
  );

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <IconButton
      onClick={() => scrollTo(0)}
      icon={<FontAwesomeIcon icon={faArrowUp} />}
      style={{
        zIndex: visible ? 10 : -1,
        transform: visible ? "scale(1)" : "scale(0)",
      }}
      shape="filled"
      name="to-top"
      className="transition-all to-top fixed bottom-5 right-5 rounded-full primary !text-white pr-[1px]"
    />
  );
};

export default ToTop;
