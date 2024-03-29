import React from "react";
import { useTranslation } from "react-i18next";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle, PrintAfter } from "@sito/ui";

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

// images
import me from "../../assets/images/me.jpg";

// styles
import "./styles.css";

// components
import LazyImage from "../../components/LazyImage/LazyImage";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";

const Hero = () => {
  const { colors } = useStyle();

  const socials = [
    {
      text: "github",
      link: "https://github.com/sito8943",
      icon: faGithub,
    },
    {
      text: "instagram",
      link: "https://www.instagram.com/sito.8943/",
      icon: faInstagram,
    },
    {
      text: "twitter",
      link: "https://twitter.com/sito8943",
      icon: faTwitter,
    },
    {
      text: "linkedin",
      link: "https://www.linkedin.com/in/sito8943",
      icon: faLinkedin,
    },
  ];

  const { t } = useTranslation();

  return (
    <Section id="home">
      <FloatingIcons />
      <div className="relative flex items-center justify-start flex-col gap-4 mt-5">
        <PrintAfter delay={100} animation="appear">
          <h1 className="text-center sm:text-3xl text-5xl font-bold">
            {t("_pages:home.hero.title")}
          </h1>
        </PrintAfter>
        <PrintAfter delay={200} animation="appear">
          <LazyImage src={me} className="w-60 h-60 rounded-full" />
        </PrintAfter>
        <PrintAfter delay={300} animation="appear">
          <p className="text-center sm:px-4">{t("_pages:home.hero.text")}</p>
        </PrintAfter>
        <PrintAfter delay={400} animation="appear">
          <nav className="hero-social appear">
            <ul className="flex justify-center gap-6 items-center">
              {socials.map((item, i) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    name={item.text}
                    className={`transition ${css({
                      "&:hover": {
                        color: colors.primary.light,
                      },
                    })}`}
                    aria-label={`${t("_common:ariaLabels.linkTo")} ${
                      item.text
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </PrintAfter>
        <div className="float-y !absolute -bottom-[70px]">
          <PrintAfter delay={500} animation="appear">
            <a
              href="#projects"
              name="to-projects"
              className="m-2 icon-button button !cursor-pointer primary filled scale-100 hover:scale-110"
              aria-label={t("_common:ariaLabels.toProjects")}
              onClick={() =>
                scrollTo(document.getElementById("#projects")?.offsetTop)
              }
            >
              <FontAwesomeIcon className="-ml-[1px]" icon={faArrowDown} />
            </a>
          </PrintAfter>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
