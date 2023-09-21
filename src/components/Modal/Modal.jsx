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
const Image = loadable(() => import("../../components/NextUI/Image"));
const Button = loadable(() => import("../../components/NextUI/Button"));
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
        blur
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        css={{ position: "relative" }}
        {...bindings}
      >
        <NextModalHeader>
          <p className="text-lg" id="modal-title">
            {title}
          </p>
        </NextModalHeader>
        <NextModalBody>
          {content.map((item, i) => (
            <div id="modal-description" key={i}>
              {item.Type === "Text" && <p>{item.Content}</p>}
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
                <div className="flex items-center justify-center flex-wrap">
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
                </div>
              )}
              {item.Type === "Title" && <h4>{item.Content}</h4>}
            </div>
          ))}
        </NextModalBody>
        <NextModalFooter>
          <Button
            id="close-modal"
            aria-label={languageState.texts.AriaLabels.closeModal}
            auto
            flat
            color="error"
            onClick={onClose}
          >
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
