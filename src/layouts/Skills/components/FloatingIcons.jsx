import React from "react";

// @mui/icons-material
import { Javascript } from "@mui/icons-material";

// @nextui-org
import { Link } from "@nextui-org/react";

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
        className={`scale-animation ${css({ left: "5%" })}`}
      >
        <div sx={{ transform: "rotate(-30deg)", display: "flex" }}>
          <Link
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
            target="_blank"
            rel="noopener"
          >
            <Javascript
              className="float-y"
              sx={{ fontSize: "6rem", color: "#F0D81D", opacity: 0.5 }}
            />
          </Link>
        </div>
      </m.div>
    </m.div>
  );
};

export default FloatingIcons;
