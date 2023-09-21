/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useScreenWidth } from "use-screen-width";

import { scrollTo } from "some-javascript-utils";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./style.css";

// own components
import OffCanvas from "../OffCanvas/OffCanvas";

const SitoNavbar = () => {
  const location = useLocation();
  const { languageState } = useLanguage();

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
      console.log(top);
      setTransparency(top < 60);
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

  useEffect(() => {
    if (screenWidth > 1279) closeOffCanvas();
  }, [screenWidth]);

  return (
    <header
      className={`flex items-center justify-center w-full fixed top-0 left-0 min-h-[60px] transition duration-500 z-[50] ${
        transparency ? "" : "bg-dark-drawer-background backdrop-blur-lg"
      }`}
    >
      <OffCanvas visible={showOffCanvas} handleClose={closeOffCanvas} />
      <div
        className={`transition-all duration-500 flex items-center justify-between ${
          transparency ? "w-[85%] h-[100px]" : "w-[90%] h-[60px]"
        }`}
      >
        <h1 className="font-bold text-4xl text-primary">
          <a
            href="#"
            name="logo"
            className="text-plight"
            aria-label={languageState.texts.AriaLabels.toHome}
            onClick={() => scrollTo(0)}
          >
            {"<Sito />"}
          </a>
        </h1>
        <nav className="h-full flex items-center">
          <ul className="xl:hidden flex items-center h-full justify-around gap-3">
            {languageState.texts.Navbar.Links.map((item) => (
              <li key={item.id}>
                <a
                  href={item.to}
                  id={item.id}
                  name={item.id}
                  aria-label={item.ariaLabel}
                  className={`button ${
                    item.primary ? "secondary submit" : "primary link"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            name="menu-button"
            className="xl:opacity-[1] xl:pointer-events-auto opacity-0 pointer-events-none icon-button primary submit"
            aria-label={languageState.texts.AriaLabels.openDrawer}
            onClick={() => setShowOffCanvas(!showOffCanvas)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default SitoNavbar;
