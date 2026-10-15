import { useTranslation } from "react-i18next";

import { scrollTo } from "some-javascript-utils/browser";

// @sito/ui
import { IconButton } from "@sito/ui";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// components
import InViewComponent from "../InViewComponent/InViewComponent";
import SitoLogo from "../Logo/SitoLogo";

// hooks
import { useActiveSection } from "../../hooks/useActiveSection";

// lib
import { buttonClassName } from "../../lib/buttonClassName";

type OffCanvasProps = {
  visible: boolean;
  links: string[];
  handleClose: () => void;
};

const OffCanvas = ({ visible, links, handleClose }: OffCanvasProps) => {
  const { t } = useTranslation();

  const { activeLink } = useActiveSection();

  return (
    <div
      aria-hidden={!visible}
      onClick={handleClose}
      className={`top-0 left-0 h-screen fixed w-full bg-dark-drawer-background transition duration-300 ${
        visible
          ? "opacity-100 backdrop-blur-sm"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <aside
        className={`${
          !visible ? "-translate-x-4 opacity-0" : ""
        } relative flex-col flex w-[300px] h-full bg-dark-background2 z-50 delay-150 transition duration-500`}
      >
        <IconButton
          name="close-drawer"
          aria-label={t("_common:ariaLabels.closeDrawer")}
          className="!absolute top-1 right-1 !text-white hover:!text-error"
          onClick={handleClose}
          icon={<FontAwesomeIcon icon={faClose} />}
        />
        <nav className="pt-10 flex flex-col">
          {visible ? (
            <InViewComponent delay="150ms">
              <a
                href="#home"
                className="text-secondary logo"
                aria-label={t("_common:ariaLabels.toHome")}
                onClick={() => scrollTo(0)}
              >
                <SitoLogo className="w-20 h-[42px] ml-5" />
              </a>
            </InViewComponent>
          ) : null}
          <ul className="flex flex-col mt-5">
            {visible
              ? links.map((item, i) => {
                  const active = activeLink === `#${item}`;
                  return (
                    <li key={item} className="w-full">
                      <InViewComponent delay={`${(i + 2) * 150}ms`}>
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
                            className:
                              "w-full !justify-start !rounded-none !text-white",
                          })}
                        >
                          {t(`_pages:routes.${item}`)}
                        </a>
                      </InViewComponent>
                    </li>
                  );
                })
              : null}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default OffCanvas;
