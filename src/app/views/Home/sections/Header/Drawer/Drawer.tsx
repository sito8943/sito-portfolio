import { useTranslation } from "@/features/i18n";

import { scrollTo } from "some-javascript-utils/browser";

// @sito/ui
import { IconButton } from "@sito/ui";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { useActiveSection } from "@/shared/hooks";
import { SitoLogo } from "@/shared/ui/atoms";
import { InView } from "@/shared/ui/molecules";
import { buttonClassName } from "@/shared/utils";

import type { DrawerProps } from "./types";

/** Mobile navigation drawer. */
export function Drawer({ visible, links, handleClose }: DrawerProps) {
  const { t } = useTranslation();

  const { activeLink } = useActiveSection();

  return (
    <div
      aria-hidden={!visible}
      onClick={handleClose}
      data-open={visible}
      className="drawer"
    >
      <aside className="drawer-panel">
        <IconButton
          name="close-drawer"
          aria-label={t("_common:ariaLabels.closeDrawer")}
          className="drawer-close"
          onClick={handleClose}
          icon={<FontAwesomeIcon icon={faClose} />}
        />
        <nav className="drawer-nav">
          {visible ? (
            <InView delay="150ms">
              <a
                href="#home"
                className="drawer-logo logo"
                aria-label={t("_common:ariaLabels.toHome")}
                onClick={() => scrollTo(0)}
              >
                <SitoLogo className="drawer-logo-mark" />
              </a>
            </InView>
          ) : null}
          <ul className="drawer-links">
            {visible
              ? links.map((item, i) => {
                  const active = activeLink === `#${item}`;
                  return (
                    <li key={item} className="drawer-item">
                      <InView delay={`${(i + 2) * 150}ms`}>
                        <a
                          href={`#${item}`}
                          id={`drawer-link-${item}`}
                          aria-current={active ? "location" : undefined}
                          aria-label={t(
                            "_common:ariaLabels.clickToSection",
                          ).replace("[target]", t(`_pages:routes.${item}`))}
                          className={buttonClassName({
                            color: "primary",
                            variant: active ? "submit" : "text",
                            size: "lg",
                            className: "drawer-link",
                          })}
                        >
                          {t(`_pages:routes.${item}`)}
                        </a>
                      </InView>
                    </li>
                  );
                })
              : null}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
