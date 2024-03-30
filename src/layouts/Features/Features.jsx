import React, { Fragment, useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";
import { useTranslation } from "react-i18next";

// @sito/ui
import { PrintAfter } from "@sito/ui";

// styles
import "./styles.css";

// components
import Card from "./components/Card";
import Marquee from "./components/Marquee";
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
    <Section id="features" background="bg-dark-background2" containerClass="!w-full">
      <div className="features" ref={targetRef}>
        {visible ? (
          <Fragment>
            <PrintAfter delay={100} animation="appear">
              <h2 className="sm:text-3xl text-4xl font-bold text-center mb-10">
                {t("_pages:home.features.title")}
              </h2>
            </PrintAfter>
            <Marquee
              component="array"
              elements={cards}
              renderFunction={(el, i) => (
                <PrintAfter delay={(i + 1) * 200} animation="appear">
                  <Card
                    title={t(`_pages:home.features.cards.${el}.title`)}
                    body={t(`_pages:home.features.cards.${el}.body`)}
                  />
                </PrintAfter>
              )}
            />
          </Fragment>
        ) : null}
      </div>
    </Section>
  );
}

export default Features;
