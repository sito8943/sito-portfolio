import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from "@/features/i18n";

import { NAV_LINKS, SOCIALS } from "@/shared/config";
import { SitoLogo } from "@/shared/ui/atoms";
import { scrollToSection } from "@/shared/utils";

/** Closing bar: brand and copyright, quick section links and every social profile. */
export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer">
      <div className="footer-bar">
        <div className="footer-brand">
          <SitoLogo className="footer-logo" />
          <p className="footer-copy">{`© ${new Date().getFullYear()}`}</p>
        </div>
        <nav
          className="footer-nav"
          aria-label={t("_common:ariaLabels.footerNav")}
        >
          <ul className="footer-links">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="footer-link"
                  onClick={() => scrollToSection(item)}
                >
                  {t(`_pages:routes.${item}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-socials">
          {SOCIALS.map((item) => (
            <a
              key={item.link}
              href={item.link}
              rel="noreferrer"
              target="_blank"
              aria-label={item.text}
              className="footer-social"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
