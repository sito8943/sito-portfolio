import React, { useCallback, useRef, useState, Suspense, memo } from "react";
import emailjs from "@emailjs/browser";
import loadable from "@loadable/component";

// @emotion/css
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// config
import config from "../../config";

// own components
const Loading = loadable(() => import("../../components/NextUI/Loading"));
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);
const Section = loadable(() => import("../../components/Section/Section"));

// NextUI
// local memo
const Button = loadable(() => import("../../components/NextUI/Button"));
const Text = loadable(() => import("../../components/NextUI/Text"));
const Container = loadable(() => import("../../components/NextUI/Container"));
const Image = loadable(() => import("../../components/NextUI/Image"));
const Input = loadable(() => import("../../components/NextUI/Input"));
const Textarea = loadable(() => import("../../components/NextUI/Textarea"));

const Contact = () => {
  const form = useRef();
  const { languageState } = useLanguage();

  const [ok, setOk] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      setLoading(true);
      e.preventDefault();
      emailjs
        .send(
          config.serviceId,
          config.templateId,
          { name, email, message: content },
          config.publicKey
        )
        .then(
          (result) => {
            setName("");
            setEmail("");
            setContent("");
            setOk(1);
            console.info(result.text);
            setLoading(false);
          },
          (error) => {
            setOk(-1);
            console.error(error.text);
          }
        );
    },
    [name, email, content]
  );

  return (
    <Suspense>
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
            <Text h2>{languageState.texts.Contact.Title}</Text>
          </InViewComponent>
          <form id="formId" ref={form} onSubmit={onSubmit}>
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
                  src="https://ik.imagekit.io/lgqp0wffgtp/tr:q-80/SitoPortafolio/contact_CcvqxZuUs.jpg?updatedAt=1682181967086"
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
                <InViewComponent delay={`0.6s`}>
                  <Input
                    required
                    name={languageState.texts.Contact.Inputs.Name.Name}
                    label={languageState.texts.Contact.Inputs.Name.Label}
                    placeholder={
                      languageState.texts.Contact.Inputs.Name.Placeholder
                    }
                    css={{ width: "100%", marginBottom: "20px" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InViewComponent>
                <InViewComponent delay={`0.7s`}>
                  <Input
                    required
                    name={languageState.texts.Contact.Inputs.Email.Name}
                    label={languageState.texts.Contact.Inputs.Email.Label}
                    placeholder={
                      languageState.texts.Contact.Inputs.Email.Placeholder
                    }
                    css={{ width: "100%", marginBottom: "20px" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InViewComponent>
                <InViewComponent delay={`0.8s`}>
                  <Textarea
                    rows={5}
                    required
                    name={languageState.texts.Contact.Inputs.Message.Name}
                    label={languageState.texts.Contact.Inputs.Message.Label}
                    placeholder={
                      languageState.texts.Contact.Inputs.Message.Placeholder
                    }
                    css={{ width: "100%", marginBottom: "20px" }}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </InViewComponent>
                {!ok ? (
                  <InViewComponent delay="0.9s">
                    <div
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        disabled={loading}
                        id="send"
                        aria-label={languageState.texts.AriaLabels.send}
                        rounded
                        flat
                        type="submit"
                      >
                        {loading ? (
                          <Loading />
                        ) : (
                          languageState.texts.Contact.Button
                        )}
                      </Button>
                    </div>
                  </InViewComponent>
                ) : (
                  <Text
                    css={{
                      background: ok === 1 ? "#009900" : "#990000",
                      padding: "5px 20px",
                      borderRadius: "30px",
                    }}
                  >
                    {ok === 1
                      ? languageState.texts.Contact.SendOk
                      : languageState.texts.Contact.SendError}
                  </Text>
                )}
              </div>
            </div>
          </form>
        </Container>
      </Section>
    </Suspense>
  );
};

const ContactMemo = memo((props) => <Contact {...props} />);

export default ContactMemo;
