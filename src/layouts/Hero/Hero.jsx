import React, { Suspense, useCallback } from "react";
import loadable from "@loadable/component";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// utils
import { parseDelay } from "../../utils/functions";
import { scrollTo } from "some-javascript-utils/browser";

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

  const icons = [faGithub, faFacebook, faInstagram, faTwitter];

  const scrollToProjects = useCallback(() => {
    scrollTo(document.getElementById("#projects")?.offsetTop);
  }, []);

  return (
    <Suspense>
      <Section id="hero">
        <FloatingIcons />
        <div
          className={css({
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            div: {
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            },
          })}
        >
          <InViewComponent>
            <Text h1 css={{ textAlign: "center" }}>
              <Link href="#about">{languageState.texts.Hero.Title}</Link>
            </Text>
          </InViewComponent>
          <InViewComponent delay="0.4s">
            <Text>{languageState.texts.Hero.Text}</Text>
          </InViewComponent>
          <InViewComponent delay="0.5s">
            <Link href="#projects" className={css({ textDecoration: "none" })}>
              <Button
                onClick={scrollToProjects}
                css={{
                  borderRadius: "100%",
                  marginTop: "15px",
                  minWidth: "0px !important",
                  width: "40px",
                  transition: "all 500ms ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
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
          <div
            className={css({
              justifyContent: "center",
              flexDirection: "row !important",
              gap: "15px",
              a: {
                fontSize: "30px",
                marginRight: "10px",
                transition: "all 500ms ease",
                "&:hover": { transform: "translateY(-5px)" },
              },
              div: {
                display: "flex",
                flexDirection: "row",
              },
              flexWrap: "wrap",
            })}
          >
            {languageState.texts.Hero.Social.map((item, i) => (
              <InViewComponent key={item.Text} delay={`${parseDelay(i, 0.6)}s`}>
                <Link href={item.Link} rel="noreferrer" target="_blank">
                  <FontAwesomeIcon
                    className={css({ fontSize: "30px" })}
                    icon={icons[i]}
                  />
                </Link>
              </InViewComponent>
            ))}
          </div>
        </div>
      </Section>
    </Suspense>
  );
};

export default Hero;
