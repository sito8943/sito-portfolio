import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { ToTop as ScrollToTop } from "@sito/ui";

import PropTypes from "prop-types";

// utils
import { scrollTo } from "../../utils/functions";

const ToTop = () => {
  const { t } = useTranslation();

  const [bottom, setBottom] = useState("15px");
  const [push, setPush] = useState(false);

  const onScroll = useCallback((e) => {
    const top = window.pageYOffset || document.documentElement.scrollTop;

    const fullHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    if (fullHeight - top === window.innerHeight) setPush(true);
    else setPush(false);
  }, []);

  useEffect(() => {
    if (!push) setBottom("15px");
    else setBottom("60px");
  }, [push]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <ScrollToTop
      name="to-top"
      aria-label={t("_common:ariaLabels.toTop")}
      onClick={() => scrollTo(0)}
      color="primary"
      shape="filled"
      className={`${css({
        bottom,
        svg: {
          marginLeft: "-1px",
        },
      })} right-3`}
    />
  );
};

ToTop.defaultProps = {
  footerVisible: false,
};

ToTop.propTypes = {
  footerVisible: PropTypes.bool,
};

export default ToTop;
