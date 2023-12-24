import React from "react";
import { useTranslation } from "react-i18next";

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

// styles
import "./styles.css";

// components
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";
import PrintAfter from "../../components/PrintAfter/PrintAfter";

const Hero = () => {
  const socials = [
    {
      text: "github",
      link: "https://github.com/SitoNumbis",
      icon: faGithub,
    },
    {
      text: "instagram",
      link: "https://www.instagram.com/sitonumbis/",
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
    <Section id="hero">
      <FloatingIcons />
      <div className="flex items-center justify-start flex-col gap-4">
        <PrintAfter delay={100} animation="appear">
          <h1 className="text-center sm:text-3xl text-5xl font-bold">
            {t("_pages:home.hero.title")}
          </h1>
        </PrintAfter>
        <PrintAfter delay={200} animation="appear">
          <p className="text-center sm:px-4">{t("_pages:home.hero.text")}</p>
        </PrintAfter>
        <PrintAfter delay={300} animation="appear">
          <a
            href="#projects"
            name="to-projects"
            className="icon-button primary submit hover:-translate-y-1"
            aria-label={t("_common:ariaLabels.toProjects")}
            onClick={() =>
              scrollTo(document.getElementById("#projects")?.offsetTop)
            }
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </PrintAfter>
        <PrintAfter delay={400} animation="appear">
          <p className="text-center sm:px-4">{t("_pages:home.hero.meet")}</p>
        </PrintAfter>
        <PrintAfter delay={500} animation="appear">
          <nav className="hero-social">
            <ul className="flex justify-center gap-3 items-center">
              {socials.map((item, i) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    name={item.text}
                    className="primary icon-button !text-white"
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
      </div>
    </Section>
  );
};

export default Hero;
