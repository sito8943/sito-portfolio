import React, { memo, Suspense } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

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
    <Suspense>
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
          <FontAwesomeIcon
            icon={faLightbulb}
            className={`float-y ${css({
              fontSize: "5rem",
              color: "#F0D81D",
              opacity: 0.5,
            })}`}
          />
        </m.div>
      </m.div>
    </Suspense>
  );
};

const FloatingIconsMemo = memo((props) => <FloatingIcons {...props} />);

export default FloatingIconsMemo;
