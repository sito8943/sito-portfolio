import React, { Fragment, useState, useEffect } from "react";
import useIsInViewport from "use-is-in-viewport";
import { useTranslation } from "react-i18next";

// @sito/ui
import { PrintAfter } from "@sito/ui";

// components
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";

const Contact = () => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

  return (
    <Section id="contact" background="bg-dark-background2">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={targetRef}
      >
        {visible ? (
          <Fragment>
            <PrintAfter delay={100} animation="appear">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.contact.title")}
              </h2>
            </PrintAfter>
            <PrintAfter delay={200} animation="appear">
              <p className="text-center md:w-[90%] w-[50%] m-auto mb-4">
                {t("_pages:home.contact.body")}
              </p>
            </PrintAfter>
            <PrintAfter delay={300} animation="appear">
              <a
                name="email to"
                aria-label="email sito8943@gmail.com"
                href="mailto:sito8943@gmail.com"
                target="blank"
                rel="noreferrer"
                className="primary button filled"
              >
                {t("_pages:home.contact.button")}
              </a>
            </PrintAfter>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Section>
  );
};

export default Contact;
