import React, { Fragment, useState, useEffect } from "react";
import useIsInViewport from "use-is-in-viewport";
import { useTranslation } from "react-i18next";

// @sito/ui
import { PrintAfter, Image as LazyImage } from "@sito/ui";

import Tippy from "@tippyjs/react";

// styles
import "./styles.css";

// images
// other skills
import mui from "../../assets/images/logos/mui.webp";
import tailwindscss from "../../assets/images/skills/tailwind.svg";
import firebase from "../../assets/images/logos/firebase.webp";

// components
import Section from "../../components/Section/Section";
import FloatingIcons from "./components/FloatingIcons";

const Skills = () => {
  const { t } = useTranslation();

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

  const skills = [
    {
      id: "React",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/React_Native_Logo_Yn2-u9mCt.png?updatedAt=1690681265746",
      link: "https://reactjs.org/",
      start: 2019,
    },
    {
      id: "Html-Css",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/HTMLCSS_63L4ZaQCk.jpg?updatedAt=1690853306821",
      link: "https://www.w3.org/Style/Examples/011/firstcss.es.html",
      start: 2019,
    },
    {
      id: "JavaScript",
      start: 2019,
      link: "https://es.wikipedia.org/wiki/JavaScript",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/js_5UTJufCe3.jpg?updatedAt=1690852899191",
    },
  ];

  const secondaries = [
    { id: "Material UI", image: mui, link: "https://mui.com/" },
    {
      id: "Tailwind CSS",
      image: tailwindscss,
      link: "https://tailwindcss.com",
    },
    { id: "Firebase", image: firebase, link: "https://firebase.google.com/" },
  ];

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
                {t("_pages:home.skills.title")}
              </h2>
            </PrintAfter>
            <PrintAfter delay={200} animation="appear">
              <p className="text-center mb-5 mx-auto w-[80%]">
                {t("_pages:home.skills.body").replace(
                  "[year]",
                  String(`${years(2019)}`)
                )}
              </p>
            </PrintAfter>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {skills.map((item, i) => (
                <li key={i}>
                  <PrintAfter delay={(i + 1) * 300} animation="appear">
                    <a
                      name={item.id}
                      aria-label={item.ariaLabel}
                      href={item.link}
                      target="blank"
                      rel="noreferrer"
                    >
                      <LazyImage
                        src={item.image}
                        alt={item.id}
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
                {t("_pages:home.skills.other")}
              </h3>
            </PrintAfter>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {secondaries.map((jtem, j) => (
                <li key={j}>
                  <PrintAfter delay={(j + 1) * 200 + 1000} animation="appear">
                    <Tippy content={jtem.id}>
                      <a
                        name={jtem.id}
                        aria-label={`${t("_common:ariaLabels.linkTo")} ${
                          jtem.link
                        }`}
                        href={jtem.link}
                        target="_blank"
                        rel="noopener"
                      >
                        <LazyImage
                          className="w-10 h-10 rounded-full bg-white border-2 border-white"
                          src={jtem.image}
                          alt={jtem.id}
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
