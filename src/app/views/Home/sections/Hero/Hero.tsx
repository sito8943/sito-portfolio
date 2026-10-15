import { useTranslation } from "react-i18next";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { SECTIONS, SOCIALS } from "@/shared/config";
import { LazyImage } from "@/shared/ui/atoms";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";
import { buttonClassName, scrollToSection } from "@/shared/utils";

import { AVATAR_SRC } from "./constants";
import { FloatingIcons } from "./FloatingIcons";

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section id={SECTIONS.home} className="inner-section hero-gradient">
      <FloatingIcons />
      <div className="relative flex items-center justify-start flex-col gap-4 mt-5">
        <InView delay="100ms">
          <h1 className="text-center sm:text-3xl text-5xl font-bold">
            {t("_pages:home.hero.title")}
          </h1>
        </InView>
        <InView delay="200ms">
          <LazyImage
            alt="sito"
            src={AVATAR_SRC}
            loading="eager"
            fetchPriority="high"
            className="w-60 h-60 rounded-full object-cover object-bottom"
          />
        </InView>
        <InView delay="300ms">
          <p className="text-center sm:px-4">{t("_pages:home.hero.text")}</p>
        </InView>
        <InView delay="400ms">
          <nav className="hero-social appear">
            <ul className="flex justify-center gap-6 items-center">
              {SOCIALS.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-slight"
                    aria-label={`${t("_common:ariaLabels.linkTo")} ${item.text}`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </InView>
        <div className="float-y !absolute -bottom-[70px]">
          <InView delay="500ms">
            <a
              href={`#${SECTIONS.projects}`}
              className={buttonClassName({
                color: "primary",
                variant: "submit",
                icon: true,
                className: "m-2 scale-100 hover:scale-110",
              })}
              aria-label={t("_common:ariaLabels.toProjects")}
              onClick={() => scrollToSection(SECTIONS.projects)}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </InView>
        </div>
      </div>
    </Section>
  );
}
