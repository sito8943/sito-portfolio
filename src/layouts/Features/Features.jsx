import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// @sito/ui
import { useIsElementInViewport } from "@sito/ui";
import InViewComponent from "../../components/InViewComponent/InViewComponent";

// styles
import "./styles.css";

// components
import Card from "./components/Card";
import Marquee from "./components/Marquee";
import Section from "../../components/Section/Section";

function Features() {
  const { elementRef, isElementInViewport } = useIsElementInViewport();
  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (isElementInViewport) setVisible(true);
  }, [isElementInViewport]);

  const cards = ["marketing", "dashboard", "content", "ecommerce", "restApi"];

  return (
    <Section
      id="features"
      background="bg-dark-background2"
      containerClass="!w-full"
    >
      <div className="features" ref={elementRef}>
        {visible ? (
          <Fragment>
            <InViewComponent delay="100ms">
              <h2 className="sm:text-3xl text-4xl font-bold text-center mb-10">
                {t("_pages:home.features.title")}
              </h2>
            </InViewComponent>
            <Marquee
              component="array"
              elements={cards}
              renderFunction={(el, i) => (
                <InViewComponent delay={`${(i + 1) * 200}ms`}>
                  <Card
                    title={t(`_pages:home.features.cards.${el}.title`)}
                    body={t(`_pages:home.features.cards.${el}.body`)}
                  />
                </InViewComponent>
              )}
            />
          </Fragment>
        ) : null}
      </div>
    </Section>
  );
}

export default Features;
