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
  const { onClose, bindings, title, content } = props;

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
        {content.map((item, i) => (
          <Container id="modal-description" key={i}>
            {item.Type === "Text" && <Text>{item.Content}</Text>}
            {item.Type === "Image" && (
              <Image src={item.Source} alt={item.Alt} />
            )}
            {item.Type === "Images" && (
              <Container display="flex" alignItems="center" wrap="wrap">
                {item.Content.map((jtem) => (
                  <Image key={jtem.Alt} src={jtem.Source} alt={jtem.Alt} />
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
