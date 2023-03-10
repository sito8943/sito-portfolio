import React from "react";

// @mui/icons-material
import { CheckCircle, AddReaction } from "@mui/icons-material/";

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
        <CheckCircle
          className="float-y"
          sx={{ fontSize: "3rem", color: "#0fd908", opacity: 0.5 }}
        />
      </m.div>
      <m.div
        variants={item}
        className={`scale-animation ${css({ right: "15%", bottom: "15%" })}`}
      >
        <AddReaction
          className="float-y"
          sx={{ fontSize: "4rem", color: "#0fd908", opacity: 0.5 }}
        />
      </m.div>
    </m.div>
  );
};

export default FloatingIcons;
