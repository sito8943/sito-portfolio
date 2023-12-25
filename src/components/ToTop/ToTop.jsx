import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { css } from "@emotion/css";

import PropTypes from "prop-types";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// utils
import { scrollTo } from "../../utils/functions";

const ToTop = () => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState("15px");
  const [push, setPush] = useState(false);

  const onScroll = useCallback(
    (e) => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setVisible(top > 100);

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
    },
    [setVisible]
  );

  useEffect(() => {
    if (!push) setBottom("15px");
    else setBottom("60px");
  }, [push]);

  useEffect(() => {
    setVisible(top > 100);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <button
      name="to-top"
      aria-label={t("_common:ariaLabels.toTop")}
      onClick={() => scrollTo(0)}
      className={`${
        visible ? "scale-[1]" : "scale-0 pointer-events-none"
      } primary submit cta icon-button ${css({
        bottom,
      })} z-50 rounded-full fixed right-3 mt-4 min-w-0 w-10 !transition-all hover:-translate-y-1`}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

ToTop.defaultProps = {
  footerVisible: false,
};

ToTop.propTypes = {
  footerVisible: PropTypes.bool,
};

export default ToTop;
