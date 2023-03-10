import React from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
        className={`scale-animation ${css({
          width: "100px",
          height: "100px",
          right: "5%",
          top: "15%",
        })}`}
      >
        <div sx={{ transform: "rotate(30deg)", display: "flex" }}>
          <FontAwesomeIcon
            icon={faCamera}
            className={`float-y ${css({
              fontSize: "6rem",
              color: "#9494f5",
              opacity: 0.5,
            })}`}
          />
        </div>
      </m.div>
    </m.div>
  );
};

export default FloatingIcons;
