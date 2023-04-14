/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// @nextui-org
const Button = loadable(() => import("../../components/NextUI/Button"));
const Link = loadable(() => import("../../components/NextUI/Link"));
const Text = loadable(() => import("../../components/NextUI/Text"));

const OffCanvas = (props) => {
  const location = useLocation();
  const { visible, handleClose } = props;

  const { languageState } = useLanguage();

  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const { hash } = location;
    setActiveLink(hash.length ? hash : activeLink);
  }, [location]);

  return (
    <Suspense>
      <div
        onClick={handleClose}
        className={css({
          top: 0,
          left: 0,
          height: "100vh",
          position: "fixed",
          width: "100%",
          pointerEvents: !visible ? "none" : "auto",
          opacity: visible ? 1 : 0,
          transition: "opacity 500ms ease",
          background: "#222222ce",
        })}
      >
        <div
          className={css({
            position: "relative",
            pointerEvents: "auto",
            flexDirection: "column",
            height: "100%",
            width: "300px",
            transform: `translateX(${visible ? 0 : "-300px"})`,
            transition: "all 500ms ease",
            background: "#333444",
            zIndex: 999999,
          })}
        >
          <Button
            flat
            rounded
            css={{
              margin: "10px",
              width: "40px",
              minWidth: "0",
              position: "absolute",
              right: "0px",
            }}
            onPress={handleClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </Button>
          <div
            className={css({
              paddingLeft: "20px",
              paddingTop: "40px",
              flexDirection: "column",
            })}
          >
            <Text h3>Sito</Text>
            {languageState.texts.Navbar.Links.map((item) => (
              <Link key={item.to} href={item.to}>
                <Button
                  flat
                  rounded
                  color="inherit"
                  key={item.Label}
                  onPress={handleClose}
                  light={item.to !== activeLink}
                  css={{
                    margin: "5px 0",
                    justifyContent: "start",
                    span: {
                      justifyContent: "flex-start !important",
                      width: "100%",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

OffCanvas.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default OffCanvas;
