import React, { Fragment, useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

// components
import Card from "./components/Card";
import Section from "../../components/Section/Section";
import PrintAfter from "../../components/PrintAfter/PrintAfter";

function Features() {
  const { languageState } = useLanguage();

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

  return (
    <Section id="features" background="bg-dark-background2">
      <div className="features" ref={targetRef}>
        {visible ? (
          <Fragment>
            <PrintAfter delay={100} animation="appear">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {languageState.texts.Features.Title}
              </h2>
            </PrintAfter>
            <ul className="flex flex-wrap items-center justify-center gap-3 mt-5">
              {languageState.texts.Features.Cards.map((item, i) => (
                <li key={item.title}>
                  <PrintAfter delay={(i + 1) * 200} animation="appear">
                    <Card title={item.title} body={item.body} />
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
