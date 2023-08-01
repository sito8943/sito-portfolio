import React, { memo, Suspense } from "react";
import loadable from "@loadable/component";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

// components
const Card = loadable(() => import("../../components/Card/Card"));
const Section = loadable(() => import("../../components/Section/Section"));
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);

function WhatIDo() {
  const { languageState } = useLanguage();

  return (
    <Suspense>
      <Section id="what-i-do" background="#1b1b1b">
        <div className="what-i-do">
          <InViewComponent>
            <h2 className="wid-title">{languageState.texts.WhatIDo.Title}</h2>
          </InViewComponent>
          <div className="wid-cards">
            {languageState.texts.WhatIDo.Cards.map((item, i) => (
              <InViewComponent key={item.title} delay={`${i * 200}ms`}>
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

const WhatIDoMemo = memo((props) => <WhatIDo {...props} />);

export default WhatIDoMemo;
