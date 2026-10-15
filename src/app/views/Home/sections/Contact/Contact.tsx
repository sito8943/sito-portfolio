import { useTranslation } from "react-i18next";

import { LINKS, SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";
import { buttonClassName } from "@/shared/utils";

import { FloatingIcons } from "./FloatingIcons";

export function Contact() {
  const { ref, inView } = useInViewOnce();

  const { t } = useTranslation();

  return (
    <Section id={SECTIONS.contact} className="inner-section contact-section">
      <FloatingIcons />
      <div className="section-stack" ref={ref}>
        {inView ? (
          <>
            <InView delay="100ms">
              <h2 className="section-title">
                {t("_pages:home.contact.title")}
              </h2>
            </InView>
            <InView delay="200ms">
              <p className="contact-lead body">
                {t("_pages:home.contact.body")}
              </p>
            </InView>
            <div className="contact-actions">
              <InView delay="300ms">
                <a
                  aria-label={`email ${LINKS.CONTACT_EMAIL}`}
                  href={`mailto:${LINKS.CONTACT_EMAIL}`}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClassName({
                    color: "primary",
                    variant: "submit",
                  })}
                >
                  {t("_pages:home.contact.button")}
                </a>
              </InView>
              <InView delay="400ms">
                <a
                  aria-label="download cv"
                  href={LINKS.CONTACT_CV_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClassName({
                    color: "primary",
                    variant: "submit",
                  })}
                >
                  {t("_pages:home.contact.downloadCV")}
                </a>
              </InView>
            </div>
          </>
        ) : null}
      </div>
    </Section>
  );
}
