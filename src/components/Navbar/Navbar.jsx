/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// @nextui-org
import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";

// own components
import OffCanvas from "../OffCanvas/OffCanvas";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useRoute } from "../../contexts/RouteProvider";

const SitoNavbar = () => {
  const location = useLocation();
  const { languageState } = useLanguage();

  const { isDark } = useTheme();

  const [variant, setVariant] = useState("default");
  const [activeColor, setActiveColor] = useState("primary");

  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const { hash } = location;
    setActiveLink(hash);
  }, [location]);

  return (
    <Navbar
      isBordered={isDark}
      variant="sticky"
      css={{ div: { maxWidth: "100vw" } }}
    >
      <Navbar.Brand>
        MyLogo
        <Text b color="inherit" hideIn="xs">
          ACME
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
