import PropTypes from "prop-types";

// @nextui-org
import {
  Modal as NextModal,
  Container,
  Image,
  Button,
  Text,
} from "@nextui-org/react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const Modal = (props) => {
  const { onClose, bindings, title, content, image, alt } = props;

  const { languageState } = useLanguage();

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
        <Text id="modal-description">{content}</Text>
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
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
