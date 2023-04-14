import React, { useEffect, useState, useCallback, Suspense } from "react";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// utils
import { scrollTo } from "../../utils/functions";

// @nextui-org
const Button = loadable(() => import("../../components/NextUI/Button"));

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
    <Suspense>
      <div
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
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      </div>
    </Suspense>
  );
};

ToTop.defaultProps = {
  footerVisible: false,
};

ToTop.propTypes = {
  footerVisible: PropTypes.bool,
};

export default ToTop;
