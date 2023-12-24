import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useIsInViewport from "use-is-in-viewport";

// components
import Card from "./components/Card";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";
import LazyImage from "../../components/LazyImage/LazyImage";
import PrintAfter from "../../components/PrintAfter/PrintAfter";

const About = () => {
  const { t } = useTranslation();

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

  const showModal = (string) => {};
  const cards = [
    {
      id: "me",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/fixed_7D2YpO3dK.jpg",
    },
    {
      id: "freeTime",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:q-80/SitoPortafolio/piano_AR7MZhbNU.jpg",
    },
  ];

  return (
    <Section id="about">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={targetRef}
      >
        {visible ? (
          <Fragment>
            <PrintAfter delay={100} animation="appear">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.about.title")}
              </h2>
            </PrintAfter>
            <PrintAfter delay={200} animation="appear">
              <LazyImage
                src="https://ik.imagekit.io/tx6beroitnm/admin-photo_mrLiDrvvO"
                className="w-20 h-20 rounded-full"
              />
            </PrintAfter>
            <ul className="md:w-full flex flex-wrap items-center justify-center gap-3 mt-5">
              {cards.map((item, i) => (
                <li key={i} className="md:w-full">
                  <PrintAfter delay={(i + 1) * 300} animation="appear">
                    <Card
                      image={item.image}
                      onClick={() => showModal(item.id)}
                      alt={t(`_pages:home.about.cards.${item.id}.alt`)}
                      text={t(`_pages:home.about.cards.${item.id}.text`)}
                      more={t(`_pages:home.about.cards.${item.id}.more`)}
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
