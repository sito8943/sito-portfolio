import React from "react";

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

// @nextui-org
import { Button, Text, Link } from "@nextui-org/react";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// utils
import { parseDelay } from "../../utils/functions";

const Hero = () => {
  const { languageState } = useLanguage();

  const icons = [faGithub, faFacebook, faInstagram, faTwitter,];

  return (
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
  );
};

export default Hero;
