import React, { Suspense } from "react";
import loadable from "@loadable/component";

// @emotion/css
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// components
const Card = loadable(() => import("../../components/Card/Card"));
const Section = loadable(() => import("../../components/Section/Section"));
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);

export default function WhatIDo() {
  const { languageState } = useLanguage();

  return (
    <Suspense>
      <Section id="what-do-i" background="#1b1b1b">
        <div
          className={css({
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          })}
        >
          <InViewComponent>
            <h2 className={css({ textAlign: "center" })}>
              {languageState.texts.WhatIDo.Title}
            </h2>
          </InViewComponent>
          <div
            className={css({
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "center",
            })}
          >
            {languageState.texts.WhatIDo.Cards.map((item, i) => (
              <InViewComponent key={item.title}>
                <Card
                  title={item.title}
                  text={item.body}
                  align="left"
                  height="220px"
                />
              </InViewComponent>
            ))}
          </div>
        </div>
      </Section>
    </Suspense>
  );
}
