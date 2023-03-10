import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/icons-material
import { ArrowUpward } from "@mui/icons-material/";

// @nextui-org
import { Button } from "@nextui-org/react";

// utils
import { scrollTo } from "../../utils/functions";

const ToTop = (props) => {
  const { footerVisible } = props;

  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState("10px");

  const onScroll = useCallback(
    (e) => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 100) setVisible(true);
      else setVisible(false);
    },
    [setVisible]
  );

  useEffect(() => {
    if (!footerVisible) setBottom("10px");
    else setBottom("60px");
  }, [footerVisible]);

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
        zIndex: 99,
      })}
    >
      <Button
        onPress={() => scrollTo(0)}
        css={{
          transform: visible ? "scale(1)" : "scale(0)",
          zIndex: visible ? 99 : -1,
          position: "fixed",
          bottom,
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
        <ArrowUpward />
      </Button>
    </Link>
  );
};

ToTop.defaultProps = {
  footerVisible: false,
};

ToTop.propTypes = {
  footerVisible: PropTypes.bool,
};

export default ToTop;
