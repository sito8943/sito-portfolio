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
    <Section
      id={SECTIONS.contact}
      background="inner-section bg-dark-background2"
    >
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={ref}
      >
        {inView ? (
          <>
            <InView delay="100ms">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.contact.title")}
              </h2>
            </InView>
            <InView delay="200ms">
              <p className="text-center md:w-[90%] w-[50%] m-auto mb-4 body">
                {t("_pages:home.contact.body")}
              </p>
            </InView>
            <div className="flex flex-wrap gap-2 items-center justify-center">
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
