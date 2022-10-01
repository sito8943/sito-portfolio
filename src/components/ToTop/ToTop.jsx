import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/icons-material
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
          minWidth: "0px !important",
          width: "40px",
          transition: "all 500ms ease",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <ArrowUpwardIcon />
      </Button>
    </Link>
  );
};

export default ToTop;
