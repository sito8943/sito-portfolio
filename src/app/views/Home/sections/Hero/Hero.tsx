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
    <Section id={SECTIONS.home} className="inner-section">
      <FloatingIcons />
      <div className="hero-stack">
        <InView delay="100ms">
          <h1 className="hero-title">{t("_pages:home.hero.title")}</h1>
        </InView>
        <InView delay="200ms">
          <LazyImage
            alt="sito"
            src={AVATAR_SRC}
            loading="eager"
            fetchPriority="high"
            className="hero-avatar"
          />
        </InView>
        <InView delay="300ms">
          <p className="hero-text">{t("_pages:home.hero.text")}</p>
        </InView>
        <InView delay="400ms">
          <nav className="hero-social">
            <ul className="hero-social-list">
              {SOCIALS.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    className="hero-social-link"
                    aria-label={`${t("_common:ariaLabels.linkTo")} ${item.text}`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </InView>
        <div className="hero-cue float-y">
          <InView delay="500ms">
            <a
              href={`#${SECTIONS.projects}`}
              className={buttonClassName({
                color: "primary",
                variant: "submit",
                icon: true,
                className: "hero-cue-button",
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
