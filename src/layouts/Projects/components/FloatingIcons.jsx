import React from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faFaceLaughWink,
} from "@fortawesome/free-solid-svg-icons";

// framer-motion
import { m } from "framer-motion";

// @emotion/css
import { css } from "@emotion/css";

const FloatingIcons = () => {
  const containerImage = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <m.div
      variants={containerImage}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <m.div
        variants={item}
        className={`scale-animation ${css({ right: "10%", bottom: "10%" })}`}
      >
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={`float-y ${css({
            fontSize: "3rem",
            color: "#0fd908",
            opacity: 0.5,
          })}`}
        />
      </m.div>
      <m.div
        variants={item}
        className={`scale-animation ${css({ right: "15%", bottom: "15%" })}`}
      >
        <FontAwesomeIcon
          icon={faFaceLaughWink}
          className={`float-y ${css({
            fontSize: "4rem",
            color: "#0fd908",
            opacity: 0.5,
          })}`}
        />
      </m.div>
    </m.div>
  );
};

export default FloatingIcons;
