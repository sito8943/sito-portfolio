import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Button } from "@nextui-org/react";

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
    <Link
      to="#hero"
      className={css({
        textDecoration: "none",
      })}
    >
      <Button
        css={{
          transform: visible ? "scale(1)" : "scale(0)",
          zIndex: visible ? 23 : -1,
          position: "fixed",
          bottom: "10px",
          right: "10px",
          borderRadius: "100%",
          marginTop: "15px",
          minWidth: "40px !important",
          transition: "all 500ms ease",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <i className="fa fa-arrow-up" aria-hidden="true" />
      </Button>
    </Link>
  );
};

export default ToTop;
