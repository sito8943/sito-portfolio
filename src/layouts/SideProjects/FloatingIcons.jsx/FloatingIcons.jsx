import React from "react";

// @mui/icons-material
import {Lightbulb} from "@mui/icons-material";

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
        className={`scale-animation ${css({ left: "10%", bottom: "10%" })}`}
      >
        <Lightbulb
          className="float-y"
          sx={{ fontSize: "5rem", color: "#F0D81D", opacity: 0.5 }}
        />
      </m.div>
    </m.div>
  );
};

export default FloatingIcons;
