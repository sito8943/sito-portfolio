// sito components
import SitoContainer from "sito-container";

// @nextui-org
import { Input, Textarea, Text } from "@nextui-org/react";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import Section from "../../components/Section/Section";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// utils
import { parseDelay } from "../../utils/functions";

const Hero = () => {
  const { languageState } = useLanguage();

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
        <SitoContainer
          justifyContent="center"
          sx={{ width: "100%", flexWrap: "wrap", marginTop: "40px" }}
        >
          <SitoContainer
            sx={{
              width: "400px",
              height: "400px",
              background: "white",
              marginRight: "100px",
            }}
          ></SitoContainer>
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
                      css={{ width: "100%", marginTop: "20px" }}
                      clearable
                      label={item.Label}
                      placeholder={item.Placeholder}
                    />
                  )}
                  {item.Type === "textarea" && (
                    <Textarea
                      css={{ width: "100%", marginTop: "20px" }}
                      clearable
                      label={item.Label}
                      placeholder={item.Placeholder}
                    />
                  )}
                </InViewComponent>
              )
            )}
          </SitoContainer>
        </SitoContainer>
      </SitoContainer>
    </Section>
  );
};

export default Hero;
