import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// @sito/ui
import { useIsElementInViewport } from "@sito/ui";
import InViewComponent from "../../components/InViewComponent/InViewComponent";

// components
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";

const Contact = () => {
  const { elementRef, isElementInViewport } = useIsElementInViewport();

  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (isElementInViewport) setVisible(true);
  }, [isElementInViewport]);

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
                  name="email to"
                  aria-label="email sito8943@gmail.com"
                  href="mailto:sito8943@gmail.com"
                  target="blank"
                  rel="noreferrer"
                  className="primary button filled !cursor-pointer"
                >
                  {t("_pages:home.contact.button")}
                </a>
              </InViewComponent>
              <InViewComponent delay="400ms">
                <a
                  name="download cv"
                  aria-label="download cv"
                  href="https://drive.google.com/file/d/1s495FvKAtHrPlfItnx1oVCEDs1HJiZNp/view?usp=sharing"
                  target="blank"
                  rel="noreferrer"
                  className="primary button filled !cursor-pointer"
                >
                  {t("_pages:home.contact.downloadCV")}
                </a>
              </InViewComponent>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Section>
  );
};

export default Contact;
