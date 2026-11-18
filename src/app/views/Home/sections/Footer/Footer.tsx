import { Tooltip } from "@sito/ui";

import { LanguageSelect } from "@/features/i18n";

import { SOCIALS } from "@/shared/config";
import { Icon, SitoLogo } from "@/shared/ui/atoms";

/** Closing bar: brand and copyright, every social profile and the language selector. */
export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-bar">
        <div className="footer-brand">
          <SitoLogo className="footer-logo" />
          <p className="footer-copy">{`© ${new Date().getFullYear()}`}</p>
        </div>
        <div className="footer-end">
          <div className="footer-socials">
            {SOCIALS.map((item) => (
              <Tooltip key={item.link} label={item.text}>
                <a
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={item.text}
                  className="footer-social"
                >
                  <Icon icon={item.icon} />
                </a>
              </Tooltip>
            ))}
          </div>
          <LanguageSelect placement="top-end" />
        </div>
      </div>
    </footer>
  );
}
