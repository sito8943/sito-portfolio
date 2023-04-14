import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faBan,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

// framer-motion
import { m } from "framer-motion";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

// @nextui-org
const Text = loadable(() => import("../components/NextUI/Text"));
const Button = loadable(() => import("../components/NextUI/Button"));

const NotFound = () => {
  const { languageState } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const containerImage = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
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
    <Suspense>
      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div
          className={css({
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
          })}
        >
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
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className={`float-y ${css({
                    fontSize: "6rem",
                    color: "#f53b3b",
                    opacity: 0.5,
                  })}`}
                />
              </div>
            </m.div>
            <m.div
              variants={item}
              className={`scale-animation top-20 ${css({
                width: "100px",
                height: "100px",
                right: "5%",
              })}`}
            >
              <div className={css({ transform: "rotate(30deg)" })}>
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  className={`float-y ${css({
                    fontSize: "6rem",
                    color: "#9494f5",
                    opacity: 0.5,
                  })}`}
                />
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
              <FontAwesomeIcon
                icon={faBan}
                className={`float-y ${css({
                  fontSize: "6rem",
                  color: "#d908d9",
                  opacity: 0.5,
                })}`}
              />
            </m.div>
          </m.div>
          <div
            className={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <m.div variants={item}>
              <Text h2 className={css({ fontSize: "10rem" })}>
                4
              </Text>
            </m.div>
            <m.div variants={item}>
              <Text h2 className={css({ fontSize: "10rem" })}>
                0
              </Text>
            </m.div>
            <m.div variants={item}>
              <Text h2 className={css({ fontSize: "10rem" })}>
                4
              </Text>
            </m.div>
          </div>
          <m.div variants={item}>
            <Text css={{ marginBottom: "40px" }}>
              {languageState.texts.NotFound.Body}
            </Text>
          </m.div>
          <m.div variants={item}>
            <Link to="/" className={css({ textDecoration: "none" })}>
              <Button flat ghost>
                <i
                  className={`fa fa-home ${css({ marginRight: "10px" })}`}
                  aria-hidden="true"
                />
                {languageState.texts.NotFound.GoHome}
              </Button>
            </Link>
          </m.div>
        </div>
      </m.div>
    </Suspense>
  );
};

export default NotFound;
