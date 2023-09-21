import React, { useCallback, useRef, useState, Suspense, memo } from "react";
import emailjs from "@emailjs/browser";
import loadable from "@loadable/component";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// config
import config from "../../config";

// styles
import "./styles.css";

// own components
const Loading = loadable(() => import("../../components/NextUI/Loading"));
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);
const Section = loadable(() => import("../../components/Section/Section"));

// NextUI
// local memo
const Button = loadable(() => import("../../components/NextUI/Button"));
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

  return (
    <Suspense>
      <Section id="contact" background="#222">
        <div className="flex items-center justify-center flex-col h-full">
          <InViewComponent>
            <h2>{languageState.texts.Contact.Title}</h2>
          </InViewComponent>
          <form id="formId" ref={form} onSubmit={onSubmit}>
            <div className="contact-us">
              <InViewComponent delay="0.5s">
                <Image
                  src="https://ik.imagekit.io/lgqp0wffgtp/tr:q-80/SitoPortafolio/contact_CcvqxZuUs.jpg?updatedAt=1682181967086"
                  alt="contact"
                  className="cu-image"
                />
              </InViewComponent>
              <div className="cu-form">
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
                    <div>
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
                  <p
                    className={`${
                      ok === 1 ? "bg-#009900" : "bg-#990000"
                    } px-5 py-1`}
                  >
                    {ok === 1
                      ? languageState.texts.Contact.SendOk
                      : languageState.texts.Contact.SendError}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </Section>
    </Suspense>
  );
};

const ContactMemo = memo((props) => <Contact {...props} />);

export default ContactMemo;
