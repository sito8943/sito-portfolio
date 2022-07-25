import { useLanguage } from "../contexts/LanguageProvider";

const About = () => {
  const { languageState } = useLanguage();
  return (
    <div
      id="section-about"
      className="uk-section uk-section-primary uk-light uk-section-large"
    >
      <div className="uk-container">
        <h2>{languageState.texts.About.Title}</h2>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
