/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import loadable from "@loadable/component";

import { scrollTo } from "some-javascript-utils";

// @emotion/css
import { css } from "@emotion/css";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./style.css";

// @nextui-org
const NavbarLink = loadable(() => import("../NextUI/NavbarLink"));
const NavbarBrand = loadable(() => import("../NextUI/NavbarBrand"));
const NavbarContent = loadable(() => import("../NextUI/NavbarContent"));
const Navbar = loadable(() => import("../../components/NextUI/Navbar"));
const Button = loadable(() => import("../../components/NextUI/Button"));
const Text = loadable(() => import("../../components/NextUI/Text"));
const Link = loadable(() => import("../../components/NextUI/Link"));

// own components
const OffCanvas = loadable(() => import("../OffCanvas/OffCanvas"));

const SitoNavbar = () => {
  const location = useLocation();
  const { languageState } = useLanguage();

  const [variant] = useState("default");
  const [activeColor] = useState("primary");

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const closeOffCanvas = useCallback(() => {
    setShowOffCanvas(false);
  }, []);

  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const { hash } = location;
    setActiveLink(hash.length ? hash : activeLink);
  }, [location]);

  const [hideMenuButton, setHideMenuButton] = useState(true);

  useEffect(() => {
    if (showOffCanvas) setHideMenuButton(false);
    else
      setTimeout(() => {
        setHideMenuButton(true);
      }, 499);
  }, [showOffCanvas]);

  return (
    <Suspense>
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
          css={{
            marginTop: "3",
            width: "40px",
            minWidth: "0",
            zIndex: !hideMenuButton ? -1 : 0,
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={css({ fontSize: "20px" })}
          />
        </Button>
        <NavbarBrand>
          <Text h3 b css={{ margin: 0 }}>
            <Link
              onClick={() => scrollTo(0)}
              color="error"
              href="#"
              className={css({ fontWeight: "bold" })}
            >
              {"<Sito />"}
            </Link>
          </Text>
        </NavbarBrand>
        <NavbarContent
          className="navbar-content"
          activeColor={activeColor}
          variant={variant}
        >
          {languageState.texts.Navbar.Links.map((item) => (
            <NavbarLink
              key={item.id}
              isActive={item.to === activeLink}
              href={item.to}
            >
              {item.primary ? (
                <Button rounded flat css={{ minWidth: "120px" }}>
                  {item.label}
                </Button>
              ) : (
                item.label
              )}
            </NavbarLink>
          ))}
        </NavbarContent>
      </Navbar>
    </Suspense>
  );
};

export default SitoNavbar;