/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// @mui/icons-material
import MenuIcon from "@mui/icons-material/Menu";

// @nextui-org
import { Navbar, Button, Text, Link } from "@nextui-org/react";

// own components
import OffCanvas from "../OffCanvas/OffCanvas";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./style.css";

const SitoNavbar = () => {
  const location = useLocation();
  const { languageState } = useLanguage();

  const [variant] = useState("default");
  const [activeColor] = useState("primary");

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const closeOffCanvas = () => setShowOffCanvas(false);

  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const { hash } = location;
    setActiveLink(hash.length ? hash : activeLink);
  }, [location]);

  return (
    <Navbar
      className="navbar"
      css={{
        position: "fixed",
      }}
    >
      <OffCanvas visible={showOffCanvas} handleClose={closeOffCanvas} />
      <Button
        light
        className="menu-button"
        onClick={() => setShowOffCanvas(!showOffCanvas)}
        css={{ margin: "10px", width: "40px", minWidth: "0" }}
      >
        <MenuIcon />
      </Button>
      <Navbar.Brand>
        <Text h3 b css={{ margin: 0 }}>
          <Link color="error" href="/sito-lib" target="_blank" rel="noopener">
            {"<Sito />"}
          </Link>
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
        {languageState.texts.Navbar.Links.map((item) => (
          <Navbar.Link
            key={item.id}
            isActive={item.to === activeLink}
            href={item.to}
          >
            {item.label}
          </Navbar.Link>
        ))}
      </Navbar.Content>
    </Navbar>
  );
};

export default SitoNavbar;
