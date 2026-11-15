import { useRef } from "react";

import { useTranslation } from "@/features/i18n";

import { LINKS, SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { MiniLogo, SitoLogo } from "@/shared/ui/atoms";
import { Section } from "@/shared/ui/templates";
import { buttonClassName } from "@/shared/utils";

import { LOGO_ANCHORS } from "../../constants";

import { Chevrons } from "./Chevrons";
import { CopyEmail } from "./CopyEmail";
import { RevealText } from "./RevealText";
import { useReadProgress } from "./useReadProgress";

/**
 * Contact as a signed brand card (ported from the presentation deck's About): navy, the
 * support chevrons, a statement lighting up word by word as it is read, the CV as the call to
 * action and the signature (isotype, logotype, email) on the left, clear of the chevrons.
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
          <a
            aria-label="download cv"
            href={LINKS.CONTACT_CV_URL}
            target="_blank"
            rel="noreferrer"
            className={buttonClassName({
              color: "primary",
              variant: "submit",
              className: "contact-action",
            })}
          >
            {t("_pages:home.contact.downloadCV")}
          </a>
        </div>
        <div className="contact-lockup">
          <span
            className="contact-lockup-mark"
            data-logo-anchor={LOGO_ANCHORS.contact}
          >
            <MiniLogo className="contact-lockup-mark-svg" />
          </span>
          <div className="contact-lockup-text">
            <SitoLogo className="contact-lockup-word" />
            <CopyEmail
              email={LINKS.CONTACT_EMAIL}
              copyLabel={t("_pages:home.contact.copy")}
              copiedLabel={t("_pages:home.contact.copied")}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
