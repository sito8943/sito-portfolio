import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// hooks
import { useInViewOnce } from "../../hooks/useInViewOnce";
import InViewComponent from "../../components/InViewComponent/InViewComponent";

// components
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";
import { LINKS } from "../../config/links";
import { buttonClassName } from "../../lib/buttonClassName";

const Contact = () => {
  const { ref: elementRef, inView: visible } = useInViewOnce();

  const { t } = useTranslation();

  return (
    <Section id="contact" background="inner-section bg-dark-background2">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={elementRef}
      >
        {visible ? (
          <Fragment>
            <InViewComponent delay="100ms">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.contact.title")}
              </h2>
            </InViewComponent>
            <InViewComponent delay="200ms">
              <p className="text-center md:w-[90%] w-[50%] m-auto mb-4 body">
                {t("_pages:home.contact.body")}
              </p>
            </InViewComponent>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <InViewComponent delay="300ms">
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
              </InViewComponent>
              <InViewComponent delay="400ms">
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
              </InViewComponent>
            </div>
          </Fragment>
        ) : null}
      </div>
    </Section>
  );
};

export default Contact;
