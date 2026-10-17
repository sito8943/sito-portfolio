import { useTranslation } from "@/features/i18n";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LINKS, SECTIONS, SOCIALS } from "@/shared/config";
import { LazyImage, MiniLogo } from "@/shared/ui/atoms";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";
import { buttonClassName, scrollToSection } from "@/shared/utils";

import { AVATAR_SRC } from "./constants";

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section id={SECTIONS.home} className="inner-section hero-section">
      <div className="hero-panel">
        <div className="hero-layout">
          <div className="hero-copy">
            <InView delay="100ms">
              <h1 className="hero-title">
                <span className="hero-name">{t("_pages:home.hero.name")}</span>
                <span className="hero-role">{t("_pages:home.hero.role")}</span>
              </h1>
            </InView>
            <InView delay="200ms">
              <p className="hero-text">{t("_pages:home.hero.text")}</p>
            </InView>
            <InView delay="300ms">
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
            <InView delay="400ms">
              <nav
                className="hero-social"
                aria-label={t("_pages:home.hero.meet")}
              >
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
          </div>
          <div className="hero-visual">
            <div className="hero-logo" aria-hidden="true">
              <MiniLogo className="hero-logo-outline" />
              <MiniLogo className="hero-logo-trace" pathLength={100} />
            </div>
            <InView delay="200ms" className="hero-image-in-view">
              <LazyImage
                alt={t("_pages:home.hero.name")}
                src={AVATAR_SRC}
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
