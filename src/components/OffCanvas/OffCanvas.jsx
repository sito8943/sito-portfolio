/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Button, Link, Text } from "@nextui-org/react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

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
    <div
      onClick={handleClose}
      className={css({
        top: 0,
        left: 0,
        height: "100vh",
        position: "fixed",
        width: visible ? "100vw" : 0,
        transition: "background zIndex width 500ms ease",
      })}
    >
      <div
        className={css({
          pointerEvents: "none",
          width: visible ? "100vw" : 0,
          height: "100vh",
          background: "#222222ce",
          position: "absolute",
          zIndex: 99999,
        })}
      />
      <div
        className={css({
          position: "absolute",
          pointerEvents: "auto",
          flexDirection: "column",
          transition: "all 500ms ease",
          height: "100%",
          width: "300px",
          transform: `translateX(${visible ? 0 : "-300px"})`,
          background: "#333444",
          zIndex: 999999,
        })}
      >
        <div
          className={css({
            width: "100%",
            position: "relative",
            height: "40px",
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
        </div>
        <div className={css({ paddingLeft: "20px", flexDirection: "column" })}>
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
  );
};

OffCanvas.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default OffCanvas;
