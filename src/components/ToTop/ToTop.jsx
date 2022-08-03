import { useEffect, useState, useCallback } from "react";

// own components
import ButtonTo from "../ButtonTo/ButtonTo";

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
    <ButtonTo
      target={0}
      icon="fa-arrow-up"
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
    />
  );
};

export default ToTop;
