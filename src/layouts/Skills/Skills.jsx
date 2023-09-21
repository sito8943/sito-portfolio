import React, { Fragment, useState, useEffect } from "react";
import useIsInViewport from "use-is-in-viewport";

import Tippy from "@tippyjs/react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

// images
// other skills
import mui from "../../assets/images/logos/mui.webp";
import node from "../../assets/images/logos/node.webp";
import nextui from "../../assets/images/logos/nextui.webp";
import mongodb from "../../assets/images/logos/mongodb.webp";
import firebase from "../../assets/images/logos/firebase.webp";

// components
import Section from "../../components/Section/Section";
import FloatingIcons from "./components/FloatingIcons";
import LazyImage from "../../components/LazyImage/LazyImage";
import PrintAfter from "../../components/PrintAfter/PrintAfter";

const Skills = () => {
  const { languageState } = useLanguage();

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

  const images = [
    "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/React_Native_Logo_Yn2-u9mCt.png?updatedAt=1690681265746",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/HTMLCSS_63L4ZaQCk.jpg?updatedAt=1690853306821",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/js_5UTJufCe3.jpg?updatedAt=1690852899191",
  ];
  const logos = [node, mui, nextui, mongodb, firebase];

  const years = (start) => {
    const year = new Date().getFullYear();
    return year - start;
  };

  return (
    <Section id="skills" background="bg-sdark">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={targetRef}
      >
        {visible ? (
          <Fragment>
            <PrintAfter delay={100} animation="appear">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {languageState.texts.Skills.Title}
              </h2>
            </PrintAfter>
            <PrintAfter delay={200} animation="appear">
              <p className="text-center mb-5">
                {languageState.texts.Skills.Body.replace(
                  "[year]",
                  String(`${years(2019)}`)
                )}
              </p>
            </PrintAfter>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {languageState.texts.Skills.List.map((item, i) => (
                <li key={i}>
                  <PrintAfter delay={(i + 1) * 300} animation="appear">
                    <a
                      name={item.text}
                      aria-label={item.ariaLabel}
                      href={item.Link}
                      target="blank"
                      rel="noreferrer"
                    >
                      <LazyImage
                        src={images[i]}
                        alt={item.Alt}
                        className="skill"
                        height={120}
                        width={120}
                      />
                    </a>
                  </PrintAfter>
                </li>
              ))}
            </ul>
            <PrintAfter delay={1000} animation="appear">
              <h3 className="text-3xl font-bold text-center">
                {languageState.texts.Skills.Other}
              </h3>
            </PrintAfter>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {languageState.texts.Skills.Others.map((jtem, j) => (
                <li key={j}>
                  <PrintAfter delay={(j + 1) * 200 + 1000} animation="appear">
                    <Tippy content={jtem.Text}>
                      <a
                        name={jtem.text}
                        aria-label={jtem.ariaLabel}
                        href={jtem.Link}
                        target="_blank"
                        rel="noopener"
                      >
                        <LazyImage
                          className="w-10 h-10 rounded-full"
                          src={logos[j]}
                          alt={jtem.Alt}
                        />
                      </a>
                    </Tippy>
                  </PrintAfter>
                </li>
              ))}
            </ul>
          </Fragment>
        ) : null}
      </div>
    </Section>
  );
};

export default Skills;
