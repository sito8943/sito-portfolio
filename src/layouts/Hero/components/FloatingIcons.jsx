import React, { memo, Suspense } from "react";
import loadable from "@loadable/component";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faLaptop, faMusic } from "@fortawesome/free-solid-svg-icons";

// framer-motion
import { m } from "framer-motion";

// @emotion/css
import { css } from "@emotion/css";

// next components
const Link = loadable(() => import("../../../components/NextUI/Link"));

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
          className={`scale-animation ${css({ left: "5%" })}`}
        >
          <div className={css({ transform: "rotate(-30deg)" })}>
            <Link href="#about">
              <FontAwesomeIcon
                icon={faPlane}
                className={`float-y ${css({
                  fontSize: "3rem",
                  color: "#088cd9",
                  opacity: 0.5,
                })}`}
              />
            </Link>
          </div>
        </m.div>
        <m.div
          variants={item}
          className={`scale-animation ${css({
            width: "100px",
            height: "100px",
            right: "5%",
            top: "30%",
          })}`}
        >
          <div className={css({ transform: "rotate(30deg)" })}>
            <Link href="#about">
              <FontAwesomeIcon
                icon={faMusic}
                className={`float-y ${css({
                  fontSize: "3rem",
                  color: "#9494f5",
                  opacity: 0.5,
                })}`}
              />
            </Link>
          </div>
        </m.div>
        <m.div
          variants={item}
          className={`scale-animation ${css({
            width: "100px",
            height: "100px",
            bottom: "4%",
            right: "20%",
          })}`}
        >
          <div className={css({ transform: "rotate(10deg)" })}>
            <Link href="#projects">
              <FontAwesomeIcon
                icon={faLaptop}
                className={`float-y ${css({
                  fontSize: "3rem",
                  color: "#0fd908",
                  opacity: 0.5,
                })}`}
              />
            </Link>
          </div>
        </m.div>
      </m.div>
    </Suspense>
  );
};

const FloatingIconsMemo = memo((props) => <FloatingIcons {...props} />);

export default FloatingIconsMemo;
