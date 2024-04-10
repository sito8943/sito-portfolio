/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useScreenWidth } from "use-screen-width";
import { useTranslation } from "react-i18next";
import loadable from "@loadable/component";

import { scrollTo } from "some-javascript-utils/browser";

// @sito/ui
import { useStyle } from "@sito/ui";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// components
import SitoLogo from "../Logo/SitoLogo";

// styles
import "./style.css";

// own components
const OffCanvas = loadable(() => import("../OffCanvas/OffCanvas"));

const Navbar = () => {
  const location = useLocation();

  const { t } = useTranslation();

  const { colors } = useStyle();

  const { screenWidth } = useScreenWidth();

  const [transparency, setTransparency] = useState(true);

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const closeOffCanvas = () => setShowOffCanvas(false);

  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const { hash } = location;
    setActiveLink(hash.length ? hash : activeLink);
  }, [location]);

  const onScroll = useCallback(() => {
    let sec = document.querySelectorAll("section");
    sec.forEach((section) => {
      let top = window.scrollY;
      setTransparency(top < 60);
      let offset = section.offsetTop;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");
      if (top >= offset && top < offset + height) {
        setActiveLink(`#${id}`);
      }
    });
  }, [setActiveLink]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    if (screenWidth > 1279) closeOffCanvas();
  }, [screenWidth]);

  const links = ["home", "features", "about", "skills", "projects", "contact"];

  return (
    <header
      className={`flex items-center justify-center w-full fixed top-0 left-0 min-h-[60px] transition duration-500 z-[50] ${
        transparency ? "" : "bg-dark-drawer-background backdrop-blur-lg"
      }`}
    >
      <OffCanvas
        links={links}
        visible={showOffCanvas}
        handleClose={closeOffCanvas}
      />
      <div
        className={`transition-all duration-500 flex items-center justify-between ${
          transparency ? "w-[85%] h-[100px]" : "w-[90%] h-[60px]"
        }`}
      >
        <a
          href="#"
          name="logo"
          className="text-secondary logo"
          aria-label={t("_common:ariaLabels.toHome")}
          onClick={() => scrollTo(0)}
        >
          <SitoLogo className="w-20 h-[42px]" color={colors.primary.default} />
        </a>
        <nav className="h-full flex items-center">
          <ul className="xl:hidden flex items-center h-full justify-around gap-3">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  id={`link-${item}`}
                  name={item}
                  aria-label={t("_common:ariaLabels.clickToSection").replace(
                    "[target]",
                    t(`_pages:routes.${item}`)
                  )}
                  className={`button !cursor-pointer ${
                    item === "contact" && activeLink !== `#${item}`
                      ? "secondary filled"
                      : "primary link !text-white"
                  } ${activeLink === `#${item}` ? "filled" : ""}`}
                  onClick={() =>
                    scrollTo(document.getElementById(item)?.offsetTop)
                  }
                >
                  {t(`_pages:routes.${item}`)}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            name="menu-button"
            className="xl:opacity-[1] xl:pointer-events-auto opacity-0 pointer-events-none icon-button primary submit"
            aria-label={t("_common:ariaLabels.openDrawer")}
            onClick={() => setShowOffCanvas(!showOffCanvas)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
