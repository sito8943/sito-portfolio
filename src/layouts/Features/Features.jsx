import React, { Fragment, useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";
import { useTranslation } from "react-i18next";

// @sito/ui
import { PrintAfter } from "@sito/ui";

// styles
import "./styles.css";

// components
import Card from "./components/Card";
import Section from "../../components/Section/Section";

function Features() {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

  const cards = ["marketing", "dashboard", "content", "ecommerce", "restApi"];

  return (
    <Section id="features" background="bg-dark-background2">
      <div className="features" ref={targetRef}>
        {visible ? (
          <Fragment>
            <PrintAfter delay={100} animation="appear">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.features.title")}
              </h2>
            </PrintAfter>
            <ul className="flex flex-wrap items-center justify-center gap-3 mt-5">
              {cards.map((item, i) => (
                <li key={item} className="md:w-full">
                  <PrintAfter delay={(i + 1) * 200} animation="appear">
                    <Card
                      title={t(`_pages:home.features.cards.${item}.title`)}
                      body={t(`_pages:home.features.cards.${item}.body`)}
                    />
                  </PrintAfter>
                </li>
              ))}
            </ul>
          </Fragment>
        ) : null}
      </div>
    </Section>
  );
}

export default Features;
