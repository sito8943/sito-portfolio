import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// hooks
import { useInViewOnce } from "../../hooks/useInViewOnce";
import InViewComponent from "../../components/InViewComponent/InViewComponent";

// styles
import "./styles.css";

// components
import Card from "./components/Card";
import Marquee from "./components/Marquee";
import Section from "../../components/Section/Section";

function Features() {
  const { ref: elementRef, inView: visible } = useInViewOnce();

  const { t } = useTranslation();

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
              elements={cards}
              getKey={(el) => el}
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
