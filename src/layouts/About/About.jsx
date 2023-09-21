/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, Suspense } from "react";

import loadable from "@loadable/component";

// @nextui-org
import { useDisclosure, Avatar } from "@nextui-org/react";

// utils
import { parseDelay } from "../../utils/functions";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// own components
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);
const FloatingIcons = loadable(() => import("./components/FloatingIcons"));
const Section = loadable(() => import("../../components/Section/Section"));
const Modal = loadable(() => import("../../components/Modal/Modal"));
const Card = loadable(() => import("../../components/Card/Card"));

const About = () => {
  const { languageState } = useLanguage();

  const [show, setShow] = useState("Me");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const showModal = (which) => {
    setShow(which);
    if (show === "") onClose(false);
    else onOpen(true);
  };

  const images = [
    "https://ik.imagekit.io/lgqp0wffgtp/tr:q-80/SitoPortafolio/coding_iRj5Jxz68.jpg?updatedAt=1682181967379",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:q-80/SitoPortafolio/trips_YpLictApn.jpg?updatedAt=1682181967377",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:q-80/SitoPortafolio/piano_AR7MZhbNU.jpg?updatedAt=1682181966422",
  ];

  return (
    <Suspense>
      <Section id="about" background="#222222">
        <FloatingIcons />
        <Modal
          onClose={() => onClose()}
          bindings={(isOpen, onOpen, onClose)}
          title={languageState.texts.About[show].Title}
          content={languageState.texts.About[show].Content}
        />
        <div
          className="flex items-center justify-center flex-col h-full"
          css={{
            div: {
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <InViewComponent className="flex items-center justify-center flex-col">
            <h2>{languageState.texts.About.Title}</h2>
          </InViewComponent>
          <InViewComponent
            delay="0.4s"
            className="flex items-center justify-center flex-col"
          >
            <Avatar
              src="https://ik.imagekit.io/tx6beroitnm/admin-photo_mrLiDrvvO"
              css={{ size: "$20", margin: "10px 0" }}
            />
          </InViewComponent>
          <div className="flex items-center justify-center flex-col flex-wrap">
            {languageState.texts.About.Cards.map((item, i) => (
              <InViewComponent
                className="flex"
                key={i}
                delay={`${parseDelay(i, 0.4)}s`}
              >
                <Card
                  image={images[i]}
                  alt={item.Alt}
                  onClick={() => showModal(item.Id)}
                  text={item.Text}
                  more={item.More}
                />
              </InViewComponent>
            ))}
          </div>
        </div>
      </Section>
    </Suspense>
  );
};

const AboutMemo = memo((props) => <About {...props} />);

export default AboutMemo;
