import { useTranslation } from "@/features/i18n";

import { LINKS, SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { MiniLogo, SitoLogo } from "@/shared/ui/atoms";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";
import { buttonClassName } from "@/shared/utils";

import { Chevrons } from "./Chevrons";
import { CopyEmail } from "./CopyEmail";
import { RevealText } from "./RevealText";

export function Contact() {
  const { ref, inView } = useInViewOnce();

  const { t } = useTranslation();

  return (
    <Section id={SECTIONS.contact} className="contact-section">
      <div className="contact-panel" ref={ref}>
        <Chevrons />
        {inView ? (
          <div className="contact-content">
            <RevealText
              as="h2"
              className="contact-title"
              text={t("_pages:home.contact.title")}
            />
            <RevealText
              className="contact-lead"
              text={t("_pages:home.contact.body")}
              startMs={200}
            />
            <InView delay="700ms" className="contact-actions">
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
            </InView>
            <InView delay="900ms" className="contact-lockup">
              <MiniLogo className="contact-lockup-mark" />
              <div className="contact-lockup-text">
                <SitoLogo className="contact-lockup-word" />
                <CopyEmail
                  email={LINKS.CONTACT_EMAIL}
                  copyLabel={t("_pages:home.contact.copy")}
                  copiedLabel={t("_pages:home.contact.copied")}
                />
              </div>
            </InView>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
