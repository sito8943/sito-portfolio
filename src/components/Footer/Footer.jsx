/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, forwardRef } from "react";

// @nextui-org
import { Navbar, Text, Link } from "@nextui-org/react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const Footer = forwardRef((props, ref) => {
  const { languageState } = useLanguage();

  const [variant] = useState("default");
  const [activeColor] = useState("primary");

  return (
    <Navbar
      ref={ref}
      css={{
        zIndex: "1 !important",
        div: {
          maxWidth: "100vw",
          height: "50px !important",
          zIndex: "1 !important",
          minHeight: "0 !important",
        },
      }}
    >
      <Navbar.Brand>
        <Text h3 b css={{ margin: 0 }}>
          <Link color="error" href="/sito-lib" target="_blank" rel="noopener">
            {"<Sito />"}
          </Link>
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        activeColor={activeColor}
        hideIn="xs"
        variant={variant}
      ></Navbar.Content>
    </Navbar>
  );
});

export default Footer;
