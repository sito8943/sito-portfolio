import { useRef } from "react";
import emailjs from "@emailjs/browser";

// sito components
import SitoContainer from "sito-container";

// @nextui-org
import { Input, Textarea, Button, Text, Image } from "@nextui-org/react";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import Section from "../../components/Section/Section";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// utils
import { parseDelay } from "../../utils/functions";

// images
import contact from "../../assets/images/contact.jpg";

// config
import config from "../../config";

const Hero = () => {
  const form = useRef();
  const { languageState } = useLanguage();

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        config.serviceId,
        config.templateId,
        form.current,
        config.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Section id="contact" background="#222">
      <SitoContainer
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <InViewComponent>
          <Text h1>{languageState.texts.Contact.Title}</Text>
        </InViewComponent>
        <form ref={form} onSubmit={onSubmit}>
          <SitoContainer
            justifyContent="center"
            sx={{ width: "100%", flexWrap: "wrap", marginTop: "40px" }}
          >
            <InViewComponent delay="0.5s">
              <Image
                src={contact}
                alt="contact"
                css={{
                  width: "400px",
                  height: "385px",
                  objectFit: "cover",
                  background: "white",
                  marginRight: "100px",
                  borderRadius: "1rem",
                }}
              />
            </InViewComponent>
            <SitoContainer
              sx={{ width: "350px" }}
              flexDirection="column"
              wrap="wrap"
            >
              {Object.values(languageState.texts.Contact.Inputs).map(
                (item, i) => (
                  <InViewComponent
                    key={item.Label}
                    delay={`${parseDelay(i, 0.6)}s`}
                  >
                    {item.Type !== "textarea" && (
                      <Input
                        required
                        name={item.Name}
                        label={item.Label}
                        placeholder={item.Placeholder}
                        css={{ width: "100%", marginBottom: "20px" }}
                      />
                    )}
                    {item.Type === "textarea" && (
                      <Textarea
                        rows={5}
                        required
                        name={item.Name}
                        label={item.Label}
                        placeholder={item.Placeholder}
                        css={{ width: "100%", marginBottom: "20px" }}
                      />
                    )}
                  </InViewComponent>
                )
              )}
              <InViewComponent delay="0.9s">
                <SitoContainer justifyContent="flex-end" sx={{ width: "100%" }}>
                  <Button rounded flat type="submit">
                    {languageState.texts.Contact.Button}
                  </Button>
                </SitoContainer>
              </InViewComponent>
            </SitoContainer>
          </SitoContainer>
        </form>
      </SitoContainer>
    </Section>
  );
};

export default Hero;
