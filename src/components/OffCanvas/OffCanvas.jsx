/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @nextui-org
import { Button, Link, Text } from "@nextui-org/react";

// @mui/icons-material
import ClearIcon from "@mui/icons-material/Clear";

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
    <SitoContainer
      extraProps={{ onClick: handleClose }}
      sx={{
        top: 0,
        left: 0,
        height: "100vh",
        position: "fixed",
        width: visible ? "100vw" : 0,
        transition: "background zIndex width 500ms ease",
      }}
    >
      <SitoContainer
        sx={{
          width: visible ? "100vw" : 0,
          height: "100vh",
          background: "#222222ce",
          position: "absolute",
          zIndex: 999999,
        }}
      />
      <SitoContainer
        flexDirection="column"
        sx={{
          transition: "all 500ms ease",
          height: "100%",
          width: "300px",
          transform: `translateX(${visible ? 0 : "-300px"})`,
          background: "#333444",
          zIndex: 999999,
        }}
      >
        <SitoContainer
          sx={{ width: "100%", position: "relative", height: "40px" }}
        >
          <Button
            flat
            rounded
            css={{
              margin: "10px",
              width: "40px",
              minWidth: "0",
              position: "absolute",
              right: "15px",
            }}
            onPress={handleClose}
          >
            <ClearIcon />
          </Button>
        </SitoContainer>
        <SitoContainer flexDirection="column" sx={{ paddingLeft: "20px" }}>
          <Text h3>Sito</Text>
          {languageState.texts.Navbar.Links.map((item) => (
            <Link key={item.to} href={item.to}>
              <Button
                flat
                rounded
                color="primary"
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
        </SitoContainer>
      </SitoContainer>
    </SitoContainer>
  );
};

OffCanvas.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default OffCanvas;
