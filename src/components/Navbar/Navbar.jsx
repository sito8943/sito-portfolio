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

  const onScroll = useCallback(() => {
    let sec = document.querySelectorAll("section");
    sec.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        setActiveLink(`#${id}`);
      }
    });
  }, [setActiveLink, languageState]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

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
          id="menu-button"
          aria-label={languageState.texts.AriaLabels.openDrawer}
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
                <Button
                  id="to-contact"
                  aria-label={languageState.texts.AriaLabels.toContact}
                  rounded
                  flat
                  css={{ minWidth: "120px" }}
                >
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
