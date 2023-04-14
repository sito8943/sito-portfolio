import React, { Suspense } from "react";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// images
import js from "../../assets/images/logos/js.webp";
import qt from "../../assets/images/logos/qt.webp";
import cpp from "../../assets/images/logos/cpp.webp";
import mui from "../../assets/images/logos/mui.webp";
import node from "../../assets/images/logos/node.webp";
import react from "../../assets/images/logos/react.webp";
import nextui from "../../assets/images/logos/nextui.webp";
import mongodb from "../../assets/images/logos/mongodb.webp";
import firebase from "../../assets/images/logos/firebase.webp";

// @nextui-org
const NextModal = loadable(() => import("../../components/NextUI/Modal"));
const NextModalHeader = loadable(() =>
  import("../../components/NextUI/ModalHeader")
);
const NextModalBody = loadable(() =>
  import("../../components/NextUI/ModalBody")
);
const NextModalFooter = loadable(() =>
  import("../../components/NextUI/ModalFooter")
);
const Container = loadable(() => import("../../components/NextUI/Container"));
const Image = loadable(() => import("../../components/NextUI/Image"));
const Button = loadable(() => import("../../components/NextUI/Button"));
const Text = loadable(() => import("../../components/NextUI/Text"));
const Link = loadable(() => import("../../components/NextUI/Link"));

const Modal = (props) => {
  const { onClose, bindings, title, content } = props;

  const { languageState } = useLanguage();

  const images = {
    "cpp-logo": cpp,
    "qt-logo": qt,
    "react-logo": react,
    "node-logo": node,
    "js-logo": js,
    "mui-logo": mui,
    "nextui-logo": nextui,
    "firebase-logo": firebase,
    "mongodb-logo": mongodb,
  };

  return (
    <Suspense>
      <NextModal
        closeButton
        blur
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        css={{ position: "relative" }}
        {...bindings}
      >
        <NextModalHeader>
          <Text id="modal-title" size={18}>
            {title}
          </Text>
        </NextModalHeader>
        <NextModalBody>
          {content.map((item, i) => (
            <Container id="modal-description" key={i}>
              {item.Type === "Text" && <Text>{item.Content}</Text>}
              {item.Type === "Image" && (
                <Image
                  css={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                  }}
                  src={images[item.Source]}
                  alt={item.Alt}
                />
              )}
              {item.Type === "Images" && (
                <Container
                  display="flex"
                  alignItems="center"
                  justify="center"
                  wrap="wrap"
                >
                  {item.Content.map((jtem) => (
                    <Link
                      key={jtem.Alt}
                      href={jtem.Link}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        css={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "100%",
                          marginRight: "10px",
                        }}
                        key={jtem.Alt}
                        src={images[jtem.Source]}
                        alt={jtem.Alt}
                      />
                    </Link>
                  ))}
                </Container>
              )}
              {item.Type === "Title" && <Text h4>{item.Content}</Text>}
            </Container>
          ))}
        </NextModalBody>
        <NextModalFooter>
          <Button auto flat color="error" onClick={onClose}>
            {languageState.texts.Modal.Close}
          </Button>
        </NextModalFooter>
      </NextModal>
    </Suspense>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default Modal;
