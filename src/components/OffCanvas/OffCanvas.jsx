/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

// @emotion/css

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// components
import PrintAfter from "../PrintAfter/PrintAfter";

const OffCanvas = (props) => {
  const location = useLocation();

  const { t } = useTranslation();

  const { visible, links, handleClose } = props;

  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const { hash } = location;
    setActiveLink(hash.length ? hash : activeLink);
  }, [location]);

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
  }, [setActiveLink]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div
      name="hide-drawer"
      aria-label={t("_common:ariaLabels.closeDrawer")}
      onClick={handleClose}
      className={`top-0 left-0 h-screen fixed w-full bg-dark-drawer-background transition duration-300 ${
        visible ? "opacity-1" : "opacity-0 pointer-events-none"
      }`}
    >
      <aside
        className={`${
          !visible ? "-translate-x-4 opacity-0" : ""
        } relative flex-col flex w-[300px] h-full bg-dark-background2 z-50 delay-150 transition duration-500`}
      >
        <button
          type="button"
          name="close-drawer"
          aria-label={t("_common:ariaLabels.closeDrawer")}
          className="icon-button top-1 right-1 absolute hover:text-error"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <nav className="pt-10 flex flex-col">
          {visible ? (
            <PrintAfter delay={150} animation="appear">
              <h1 className="font-bold text-4xl text-primary">
                <a
                  href="#"
                  name="logo"
                  className="text-plight"
                  aria-label={t("_common:ariaLabels.toHome")}
                  onClick={() => scrollTo(0)}
                >
                  {"<Sito />"}
                </a>
              </h1>
            </PrintAfter>
          ) : null}
          <ul className="flex flex-col mt-5">
            {visible
              ? links.map((item, i) => (
                  <li key={item.id} className="w-full">
                    <PrintAfter delay={(i + 2) * 150} animation="appear">
                      <a
                        href={`link-${item.id}`}
                        id={item.id}
                        name={item.id}
                        aria-label={t(
                          "_common:ariaLabels.clickToSection"
                        ).replace("[target]", t(`_pages:routes.${item.id}`))}
                        className={`link w-full p-5 inline-block ${
                          item.id === "contact" && activeLink !== `#${item.id}`
                            ? "secondary"
                            : "primary"
                        } ${activeLink === `#${item.id}` ? "!bg-primary" : ""}`}
                      >
                        {item.label}
                      </a>
                    </PrintAfter>
                  </li>
                ))
              : null}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

OffCanvas.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default OffCanvas;
