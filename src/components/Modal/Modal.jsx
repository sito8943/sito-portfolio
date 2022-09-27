import PropTypes from "prop-types";

// @nextui-org
import {
  Modal as NextModal,
  Container,
  Image,
  Button,
  Text,
  Link,
} from "@nextui-org/react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// images
import js from "../../assets/images/js.webp";
import qt from "../../assets/images/qt.webp";
import cpp from "../../assets/images/cpp.webp";
import mui from "../../assets/images/mui.webp";
import node from "../../assets/images/node.webp";
import react from "../../assets/images/react.webp";
import nextui from "../../assets/images/nextui.webp";
import mongodb from "../../assets/images/mongodb.webp";
import firebase from "../../assets/images/firebase.webp";

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
      <NextModal.Header>
        <Text id="modal-title" size={18}>
          {title}
        </Text>
      </NextModal.Header>
      <NextModal.Body>
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
                  <Link href={jtem.Link} target="_blank" rel="noopener">
                    <Image
                      css={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "100%",
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
      </NextModal.Body>
      <NextModal.Footer>
        <Button auto flat color="error" onClick={onClose}>
          {languageState.texts.Modal.Close}
        </Button>
      </NextModal.Footer>
    </NextModal>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default Modal;
