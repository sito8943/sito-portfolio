import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// hooks
import { useInViewOnce } from "../../hooks/useInViewOnce";
import LazyImage from "../../components/LazyImage/LazyImage";
import InViewComponent from "../../components/InViewComponent/InViewComponent";

import { Tooltip } from "react-tooltip";

// styles
import "./styles.css";

// images
// other skills
import mui from "../../assets/images/logos/mui.webp";
import tailwindscss from "../../assets/images/skills/tailwind.svg";
import typescript from "../../assets/images/skills/Typescript_logo_2020.svg.png";
import firebase from "../../assets/images/logos/firebase.webp";
import git from "../../assets/images/skills/Git-Icon-1788C.png";
import photoshop from "../../assets/images/skills/ps.png";
import figma from "../../assets/images/skills/figma.jpg";

// components
import Section from "../../components/Section/Section";
import FloatingIcons from "./components/FloatingIcons";
import { LINKS } from "../../config/links";

const years = (start: number) => new Date().getFullYear() - start;

const Skills = () => {
  const { t } = useTranslation();

  const { ref: elementRef, inView: visible } = useInViewOnce();

  const skills = [
    {
      id: "React",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/React_Native_Logo_Yn2-u9mCt.png?updatedAt=1690681265746",
      link: LINKS.REACT,
      start: 2021,
    },
    {
      id: "Html-Css",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/HTMLCSS_63L4ZaQCk.jpg?updatedAt=1690853306821",
      link: LINKS.HTML_CSS_TUTORIAL,
      start: 2020,
    },
    {
      id: "JavaScript",
      start: 2020,
      link: LINKS.JAVASCRIPT,
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/js_5UTJufCe3.jpg?updatedAt=1690852899191",
    },
  ];

  const secondaries = [
    {
      id: "Git",
      image: git,
      link: LINKS.GIT,
    },
    {
      id: "Typescript",
      image: typescript,
      link: LINKS.TYPESCRIPT,
    },
    { id: "Material UI", image: mui, link: LINKS.MUI },
    {
      id: "Tailwind CSS",
      image: tailwindscss,
      link: LINKS.TAILWINDCSS,
    },
    { id: "Firebase", image: firebase, link: LINKS.FIREBASE },
    {
      id: "Photoshop",
      image: photoshop,
      link: LINKS.PHOTOSHOP,
    },
    { id: "Figma", image: figma, link: LINKS.FIGMA },
  ];

  return (
    <Section id="skills" background="bg-pdark">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={elementRef}
      >
        {visible ? (
          <Fragment>
            <InViewComponent delay="100ms">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.skills.title")}
              </h2>
            </InViewComponent>
            <InViewComponent delay="200ms">
              <p className="text-center mb-5 mx-auto w-[80%] body">
                {t("_pages:home.skills.body").replace(
                  "[year]",
                  String(`${years(2020)}`),
                )}
              </p>
            </InViewComponent>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {skills.map((item, i) => (
                <li key={item.id}>
                  <InViewComponent delay={`${(i + 1) * 300}ms`}>
                    <a
                      aria-label={`${t("_common:ariaLabels.linkTo")} ${item.id}`}
                      href={item.link}
                      target="_blank"
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
                  </InViewComponent>
                </li>
              ))}
            </ul>
            <InViewComponent delay="1000ms">
              <h3 className="text-3xl font-bold text-center">
                {t("_pages:home.skills.other")}
              </h3>
            </InViewComponent>
            <InViewComponent delay="1200ms">
              <ul className="flex items-center justify-center flex-wrap gap-5">
                {secondaries.map((jtem) => (
                  <li key={jtem.id}>
                    <a
                      data-tooltip-id="skills-tooltip"
                      data-tooltip-content={jtem.id}
                      aria-label={`${t("_common:ariaLabels.linkTo")} ${
                        jtem.link
                      }`}
                      href={jtem.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LazyImage
                        className="object-cover w-10 h-10 rounded-full bg-white border-2 border-white"
                        src={jtem.image}
                        alt={jtem.id}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <Tooltip id="skills-tooltip" />
            </InViewComponent>
          </Fragment>
        ) : null}
      </div>
    </Section>
  );
};

export default Skills;
