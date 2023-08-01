import React, { Suspense, useCallback, memo } from "react";
import loadable from "@loadable/component";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { scrollTo } from "some-javascript-utils/browser";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// utils
import { parseDelay } from "../../utils/functions";

// styles
import "./styles.css";

// @nextui-org
const Link = loadable(() => import("../../components/NextUI/Link"));
const Text = loadable(() => import("../../components/NextUI/Text"));
const Button = loadable(() => import("../../components/NextUI/Button"));

// own components
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);
const FloatingIcons = loadable(() => import("./components/FloatingIcons"));
const Section = loadable(() => import("../../components/Section/Section"));

const Hero = () => {
  const { languageState } = useLanguage();

  const icons = [faGithub, faInstagram, faTwitter, faLinkedin];

  const scrollToProjects = useCallback(() => {
    scrollTo(document.getElementById("#projects")?.offsetTop);
  }, []);

  return (
    <Suspense>
      <Section id="hero">
        <FloatingIcons />
        <div className="main-container">
          <InViewComponent>
            <Text h1 css={{ textAlign: "center" }}>
              {languageState.texts.Hero.Title}
            </Text>
          </InViewComponent>
          <InViewComponent delay="0.4s">
            <Text>{languageState.texts.Hero.Text}</Text>
          </InViewComponent>
          <InViewComponent delay="0.5s">
            <Link href="#projects" className="cta">
              <Button
                id="to-projects"
                aria-label={languageState.texts.AriaLabels.toProjects}
                onClick={scrollToProjects}
                css={{
                  borderRadius: "100%",
                  marginTop: "15px",
                  minWidth: "0px !important",
                  width: "40px",
                }}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </Button>
            </Link>
          </InViewComponent>
          <InViewComponent delay="0.6s">
            <Text
              css={{
                textAlign: "center",
                marginBottom: "10px",
                marginTop: "50px",
              }}
            >
              {languageState.texts.Hero.Meet}
            </Text>
          </InViewComponent>
          <div className="hero-social">
            {languageState.texts.Hero.Social.map((item, i) => (
              <InViewComponent key={item.Text} delay={`${parseDelay(i, 0.6)}s`}>
                <Link
                  href={item.Link}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={`${languageState.texts.AriaLabels.linkTo} ${item.Text}`}
                  name={item.Text.toLowerCase()}
                >
                  <FontAwesomeIcon icon={icons[i]} />
                </Link>
              </InViewComponent>
            ))}
          </div>
        </div>
      </Section>
    </Suspense>
  );
};

const HeroMemo = memo((props) => <Hero {...props} />);

export default HeroMemo;
