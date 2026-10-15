import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// hooks
import { useInViewOnce } from "../../hooks/useInViewOnce";
import LazyImage from "../../components/LazyImage/LazyImage";
import InViewComponent from "../../components/InViewComponent/InViewComponent";

// components
import Card from "./components/Card";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";

const About = () => {
  const { t } = useTranslation();

  const { ref: elementRef, inView: visible } = useInViewOnce();

  const cards = [
    {
      alt: "camera-and-trips",
      id: "me",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:q-80/SitoPortafolio/fixed_7D2YpO3dK.jpg",
    },
    {
      alt: "playing-piano",
      id: "freeTime",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-333,h-300/SitoPortafolio/pianista-caucasico-tocando-acorde-enfoque-generado-ia_vmpjgpvnb.jpg",
    },
    {
      alt: "design",
      id: "design",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-333,h-300/SitoPortafolio/logotipo-ser-concepto-diseno-inspiracion-creativa_G2gdINzZi.jpg",
    },
  ];

  return (
    <Section id="about">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={elementRef}
      >
        {visible ? (
          <Fragment>
            <InViewComponent delay="100ms">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.about.title")}
              </h2>
            </InViewComponent>
            <InViewComponent delay="200ms">
              <LazyImage
                src="https://ik.imagekit.io/tx6beroitnm/admin-photo_mrLiDrvvO"
                alt="Sito"
                className="w-20 h-20 rounded-full"
              />
            </InViewComponent>
            <ul className="md:w-full flex flex-wrap items-center justify-center gap-5 mt-5">
              {cards.map((item, i) => (
                <li key={item.id} className="md:w-full">
                  <InViewComponent delay={`${(i + 1) * 300}ms`}>
                    <Card
                      image={item.image}
                      noHover
                      alt={item.alt}
                      text={t(`_pages:home.about.${item.id}.text`)}
                      more={t(`_pages:home.about.${item.id}.more`)}
                    />
                  </InViewComponent>
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
