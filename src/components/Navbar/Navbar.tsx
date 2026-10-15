import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import loadable from "@loadable/component";

import { scrollTo } from "some-javascript-utils/browser";

// @sito/ui
import { IconButton } from "@sito/ui";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// components
import SitoLogo from "../Logo/SitoLogo";

// hooks
import { useActiveSection } from "../../hooks/useActiveSection";

// lib
import { buttonClassName } from "../../lib/buttonClassName";

// own components
const OffCanvas = loadable(() => import("../OffCanvas/OffCanvas"));

const links = ["home", "features", "about", "skills", "projects", "contact"];

const DESKTOP_QUERY = "(min-width: 1280px)";

const Navbar = () => {
  const { t } = useTranslation();

  const { activeLink, atTop } = useActiveSection();

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const closeOffCanvas = () => setShowOffCanvas(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (media.matches) setShowOffCanvas(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`flex items-center justify-center w-full fixed top-0 left-0 min-h-[60px] transition duration-500 z-[50] ${
        atTop ? "" : "bg-dark-drawer-background backdrop-blur-lg"
      }`}
    >
      <OffCanvas
        links={links}
        visible={showOffCanvas}
        handleClose={closeOffCanvas}
      />
      <div
        className={`transition-all duration-500 flex items-center justify-between ${
          atTop ? "w-[85%] h-[100px]" : "w-[90%] h-[60px]"
        }`}
      >
        <a
          href="#home"
          className="text-secondary logo"
          aria-label={t("_common:ariaLabels.toHome")}
          onClick={() => scrollTo(0)}
        >
          <SitoLogo className="w-20 h-[42px]" />
        </a>
        <nav className="h-full flex items-center">
          <ul className="xl:hidden flex items-center h-full justify-around gap-3">
            {links.map((item) => {
              const active = activeLink === `#${item}`;
              const isContact = item === "contact";
              return (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    id={`link-${item}`}
                    aria-current={active ? "location" : undefined}
                    aria-label={t("_common:ariaLabels.clickToSection").replace(
                      "[target]",
                      t(`_pages:routes.${item}`),
                    )}
                    className={buttonClassName({
                      color: isContact && !active ? "secondary" : "primary",
                      variant: active || isContact ? "submit" : "text",
                      className: active || isContact ? "" : "!text-white",
                    })}
                    onClick={() =>
                      scrollTo(document.getElementById(item)?.offsetTop ?? 0)
                    }
                  >
                    {t(`_pages:routes.${item}`)}
                  </a>
                </li>
              );
            })}
          </ul>
          <IconButton
            name="menu-button"
            color="primary"
            variant="submit"
            className="xl:opacity-100 xl:pointer-events-auto opacity-0 pointer-events-none"
            aria-label={t("_common:ariaLabels.openDrawer")}
            aria-expanded={showOffCanvas}
            onClick={() => setShowOffCanvas(!showOffCanvas)}
            icon={<FontAwesomeIcon icon={faBars} />}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
