import { useLanguage } from "../contexts/LanguageProvider";

const Hero = () => {
  const { languageState } = useLanguage();

  return (
    <div
      id="section-home"
      className="uk-section uk-section-secondary uk-light uk-section-large"
    >
      <div className="uk-container uk-padding-large">
        <h1>{languageState.texts.Hero.Title}</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
    </div>
  );
};

export default Hero;
