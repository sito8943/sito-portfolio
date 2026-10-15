import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import loadable from "@loadable/component";

import { scrollTo } from "some-javascript-utils/browser";

// @sito/ui
import { IconButton } from "@sito/ui";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NAV_LINKS } from "@/shared/config";
import { useActiveSection } from "@/shared/hooks";
import { SitoLogo } from "@/shared/ui/atoms";
import { buttonClassName, scrollToSection } from "@/shared/utils";

import { DESKTOP_QUERY } from "./constants";

const Drawer = loadable(() => import("./Drawer"));

/** Fixed top bar: logo, section links and the mobile drawer toggle. */
export function Header() {
  const { t } = useTranslation();

  const { activeLink, atTop } = useActiveSection();

  const [showDrawer, setShowDrawer] = useState(false);

  const closeDrawer = () => setShowDrawer(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (media.matches) setShowDrawer(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header data-at-top={atTop} className="header">
      <Drawer
        links={NAV_LINKS}
        visible={showDrawer}
        handleClose={closeDrawer}
      />
      <div className="header-bar">
        <a
          href="#home"
          className="header-logo logo"
          aria-label={t("_common:ariaLabels.toHome")}
          onClick={() => scrollTo(0)}
        >
          <SitoLogo className="header-logo-mark" />
        </a>
        <nav className="header-nav">
          <ul className="header-links">
            {NAV_LINKS.map((item) => {
              const active = activeLink === `#${item}`;
              const isContact = item === "contact";
              return (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    id={`link-${item}`}
                    aria-current={active ? "location" : undefined}
                    data-filled={active || isContact}
                    aria-label={t("_common:ariaLabels.clickToSection").replace(
                      "[target]",
                      t(`_pages:routes.${item}`),
                    )}
                    className={buttonClassName({
                      color: isContact && !active ? "secondary" : "primary",
                      variant: active || isContact ? "submit" : "text",
                      className: "header-link",
                    })}
                    onClick={() => scrollToSection(item)}
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
            className="header-menu"
            aria-label={t("_common:ariaLabels.openDrawer")}
            aria-expanded={showDrawer}
            onClick={() => setShowDrawer(!showDrawer)}
            icon={<FontAwesomeIcon icon={faBars} />}
          />
        </nav>
      </div>
    </header>
  );
}
