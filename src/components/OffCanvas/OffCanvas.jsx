/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// @sito/ui
import { PrintAfter, useStyle } from "@sito/ui";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// components
import SitoLogo from "../Logo/SitoLogo";

const OffCanvas = (props) => {
  const location = useLocation();

  const { t } = useTranslation();

  const { colors } = useStyle();

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
        visible ? "opacity-1 backdrop-blur-sm" : "opacity-0 pointer-events-none"
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
              <a
                href="#"
                name="logo"
                className="text-plight logo"
                aria-label={t("_common:ariaLabels.toHome")}
                onClick={() => scrollTo(0)}
              >
                <SitoLogo
                  className="w-20 h-[42px] ml-5"
                  color={colors.primary.default}
                />
              </a>
            </PrintAfter>
          ) : null}
          <ul className="flex flex-col mt-5">
            {visible
              ? links.map((item, i) => (
                  <li key={item} className="w-full">
                    <PrintAfter delay={(i + 2) * 150} animation="appear">
                      <a
                        href={`#${item}`}
                        id={`link-${item}`}
                        name={item}
                        aria-label={t(
                          "_common:ariaLabels.clickToSection"
                        ).replace("[target]", t(`_pages:routes.${item}`))}
                        className={`button !cursor-pointer w-full !rounded-[0] p-5 inline-block link primary !text-white hover:!text-white ${
                          activeLink === `#${item}` ? "filled" : ""
                        }`}
                      >
                        {t(`_pages:routes.${item}`)}
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
