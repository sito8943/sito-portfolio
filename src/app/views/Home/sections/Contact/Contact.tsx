import { useRef } from "react";

import { useTranslation } from "@/features/i18n";

import { LINKS, PROFESSIONAL_SOCIALS, SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { Icon, MiniLogo, SitoLogo } from "@/shared/ui/atoms";
import { Section } from "@/shared/ui/templates";
import { buttonClassName } from "@/shared/utils";

import { LOGO_ANCHORS } from "../../constants";

import { Chevrons } from "./Chevrons";
import { RevealText } from "./RevealText";
import { useReadProgress } from "./useReadProgress";

/**
 * Contact as a signed brand card (ported from the presentation deck's About): navy, the
 * support chevrons, a statement lighting up word by word as it is read, then the ways to reach
 * me: "email me" as the call to action, the CV as the secondary one and the professional
 * profiles. The signature (isotype, logotype) closes it on the left.
 */
export function Contact() {
  const { t } = useTranslation();
  const { ref, inView } = useInViewOnce();
  const statement = useRef<HTMLParagraphElement>(null);
  const progress = useReadProgress(statement);

  return (
    <Section id={SECTIONS.contact} className="contact-section">
      <div ref={ref} className="contact-panel" data-shown={inView}>
        <Chevrons />
        <div className="contact-content">
          <h2 className="contact-title">{t("_pages:home.contact.title")}</h2>
          <RevealText
            ref={statement}
            className="body body-lg contact-lead"
            text={t("_pages:home.contact.body")}
            progress={progress}
          />
          <div className="contact-actions">
            <a
              href={`mailto:${LINKS.CONTACT_EMAIL}`}
              className={buttonClassName({
                color: "primary",
                variant: "submit",
                className: "contact-action contact-action-write",
              })}
            >
              {t("_pages:home.contact.write")}
            </a>
            <a
              href={LINKS.CONTACT_CV_URL}
              target="_blank"
              rel="noreferrer"
              className={buttonClassName({
                color: "primary",
                variant: "outlined",
                className: "contact-action contact-action-cv",
              })}
            >
              {t("_pages:home.contact.downloadCV")}
            </a>
          </div>
          <nav
            className="contact-socials"
            aria-label={t("_pages:home.contact.also")}
          >
            <span className="contact-socials-label">
              {t("_pages:home.contact.also")}
            </span>
            <ul className="contact-socials-list">
              {PROFESSIONAL_SOCIALS.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-link"
                  >
                    <Icon icon={item.icon} />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="contact-lockup">
          <span
            className="contact-lockup-mark"
            data-logo-anchor={LOGO_ANCHORS.contact}
          >
            <MiniLogo className="contact-lockup-mark-svg" />
          </span>
          <SitoLogo className="contact-lockup-word" />
        </div>
      </div>
    </Section>
  );
}
