import React, { Fragment, useState, useEffect } from "react";
import useIsInViewport from "use-is-in-viewport";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// components
import Card from "./components/Card";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";
import LazyImage from "../../components/LazyImage/LazyImage";
import PrintAfter from "../../components/PrintAfter/PrintAfter";

// own components
/* const FloatingIcons = loadable(() => import("./components/FloatingIcons"));
const Modal = loadable(() => import("../../components/Modal/Modal")); */

const About = () => {
  const { languageState } = useLanguage();

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

  const [show, setShow] = useState("Me");

  /* const showModal = (which) => {
    setShow(which);
    if (show === "") onClose(false);
    else onOpen(true);
  }; */

  const images = [
    "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/programmin_VdgdvG0xn.jpg",
    "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/fixed_7D2YpO3dK.jpg",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:q-80/SitoPortafolio/piano_AR7MZhbNU.jpg",
  ];

  return (
    <Section id="about">
      <FloatingIcons />
      {/* <Modal
          onClose={() => onClose()}
          bindings={(isOpen, onOpen, onClose)}
          title={languageState.texts.About[show].Title}
          content={languageState.texts.About[show].Content}
        /> */}
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={targetRef}
      >
        {visible ? (
          <Fragment>
            <PrintAfter delay={100} animation="appear">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {languageState.texts.About.Title}
              </h2>
            </PrintAfter>
            <PrintAfter delay={200} animation="appear">
              <LazyImage
                src="https://ik.imagekit.io/tx6beroitnm/admin-photo_mrLiDrvvO"
                className="w-20 h-20 rounded-full"
              />
            </PrintAfter>
            <ul className="md:w-full flex flex-wrap items-center justify-center gap-3 mt-5">
              {languageState.texts.About.Cards.map((item, i) => (
                <li key={i} className="md:w-full">
                  <PrintAfter delay={(i + 1) * 300} animation="appear">
                    <Card
                      image={images[i]}
                      alt={item.Alt}
                      onClick={() => showModal(item.Id)}
                      text={item.Text}
                      more={item.More}
                    />
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

export default About;
