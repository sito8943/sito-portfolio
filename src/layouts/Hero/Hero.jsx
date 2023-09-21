import React from "react";

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

// styles
import "./styles.css";

// components
import Section from "../../components/Section/Section";
import PrintAfter from "../../components/PrintAfter/PrintAfter";

// own components
// const FloatingIcons = loadable(() => import("./components/FloatingIcons"));

const Hero = () => {
  const { languageState } = useLanguage();

  const icons = [faGithub, faInstagram, faTwitter, faLinkedin];

  return (
    <Section id="hero">
      {/* <FloatingIcons /> */}
      <div className="flex items-center justify-start flex-col gap-4">
        <PrintAfter delay={100} animation="appear">
          <h1 className="text-center sm:text-3xl text-5xl font-bold">
            {languageState.texts.Hero.Title}
          </h1>
        </PrintAfter>
        <PrintAfter delay={200} animation="appear">
          <p className="text-center sm:px-4">{languageState.texts.Hero.Text}</p>
        </PrintAfter>
        <PrintAfter delay={300} animation="appear">
          <a
            href="#projects"
            name="to-projects"
            className="icon-button primary submit hover:-translate-y-1"
            aria-label={languageState.texts.AriaLabels.toProjects}
            onClick={() =>
              scrollTo(document.getElementById("#projects")?.offsetTop)
            }
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </PrintAfter>
        <PrintAfter delay={400} animation="appear">
          <p className="text-center sm:px-4">{languageState.texts.Hero.Meet}</p>
        </PrintAfter>
        <PrintAfter delay={500} animation="appear">
          <nav className="hero-social">
            <ul className="flex justify-center gap-3 items-center">
              {languageState.texts.Hero.Social.map((item, i) => (
                <li key={item.Link}>
                  <a
                    href={item.Link}
                    rel="noreferrer"
                    target="_blank"
                    name={item.Text.toLowerCase()}
                    className="primary icon-button !text-white"
                    aria-label={`${languageState.texts.AriaLabels.linkTo} ${item.Text}`}
                  >
                    <FontAwesomeIcon icon={icons[i]} />
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
