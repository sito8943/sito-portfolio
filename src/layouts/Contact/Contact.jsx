import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import {
  Input,
  Textarea,
  Button,
  Text,
  Image,
  Container,
} from "@nextui-org/react";

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
      <Container
        justify="center"
        alignItems="center"
        display="flex"
        direction="column"
        css={{
          height: "100%",
        }}
      >
        <InViewComponent>
          <Text h1>{languageState.texts.Contact.Title}</Text>
        </InViewComponent>
        <form ref={form} onSubmit={onSubmit}>
          <div
            className={css({
              display: "grid",
              width: "100%",
              gap: "20px",
              marginTop: "40px",
              gridTemplateColumns: "1fr 1fr",
              "@media (max-width: 549px)": {
                gridTemplateColumns: "1fr",
              },
            })}
          >
            <InViewComponent delay="0.5s">
              <Image
                src={contact}
                alt="contact"
                css={{
                  width: "100%",
                  height: "385px",
                  objectFit: "cover",
                  background: "white",
                  marginRight: "100px",
                  borderRadius: "1rem",
                }}
              />
            </InViewComponent>
            <div
              className={css({
                display: "flex",
                width: "100%",
                flexDirection: "column",
                flexWrap: "wrap",
              })}
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
                <div
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button rounded flat type="submit">
                    {languageState.texts.Contact.Button}
                  </Button>
                </div>
              </InViewComponent>
            </div>
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default Hero;
