import { useTranslation } from "@/features/i18n";

import { Tooltip } from "@sito/ui";

import { LINKS, PROFESSIONAL_SOCIALS, SECTIONS } from "@/shared/config";
import { Icon, LazyImage } from "@/shared/ui/atoms";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";
import { buttonClassName, scrollToSection } from "@/shared/utils";

import { LOGO_ANCHORS } from "../../constants";

import { AVATAR_SIZES, AVATAR_SRC, AVATAR_SRCSET } from "./constants";

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section id={SECTIONS.home} className="inner-section hero-section">
      <div className="hero-panel">
        <div className="hero-layout">
          <div className="hero-copy">
            <InView appear delay="100ms">
              <h1 className="hero-title">
                <span className="hero-name">{t("_pages:home.hero.name")}</span>
                <span className="hero-role">{t("_pages:home.hero.role")}</span>
              </h1>
            </InView>
            <InView appear delay="200ms">
              <p className="hero-text">{t("_pages:home.hero.text")}</p>
            </InView>
            <InView appear delay="300ms">
              <div className="hero-actions">
                <a
                  href={`#${SECTIONS.projects}`}
                  className={buttonClassName({
                    color: "primary",
                    variant: "submit",
                    className: "hero-action",
                  })}
                  onClick={() => scrollToSection(SECTIONS.projects)}
                >
                  {t("_pages:home.hero.viewWork")}
                </a>
                <a
                  href={LINKS.CONTACT_CV_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClassName({
                    color: "primary",
                    variant: "outlined",
                    className: "hero-action hero-action-cv",
                  })}
                >
                  {t("_pages:home.hero.viewCv")}
                </a>
              </div>
            </InView>
            <InView appear delay="400ms">
              <nav
                className="hero-social"
                aria-label={t("_pages:home.hero.meet")}
              >
                <ul className="hero-social-list">
                  {PROFESSIONAL_SOCIALS.map((item) => (
                    <li key={item.link}>
                      <Tooltip label={item.text} align="start">
                        <a
                          href={item.link}
                          rel="noreferrer"
                          target="_blank"
                          className="hero-social-link"
                          aria-label={`${t("_common:ariaLabels.linkTo")} ${item.text}`}
                        >
                          <Icon icon={item.icon} />
                        </a>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </nav>
            </InView>
          </div>
          <div className="hero-visual">
            <span
              className="hero-logo-anchor"
              data-logo-anchor={LOGO_ANCHORS.hero}
              aria-hidden="true"
            />
            <InView appear delay="200ms" className="hero-image-in-view">
              <LazyImage
                alt={t("_pages:home.hero.name")}
                src={AVATAR_SRC}
                srcSet={AVATAR_SRCSET}
                sizes={AVATAR_SIZES}
                loading="eager"
                fetchPriority="high"
                className="hero-avatar"
              />
            </InView>
          </div>
        </div>
      </div>
    </Section>
  );
}
