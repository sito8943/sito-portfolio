import { useLanguage } from "../contexts/LanguageProvider";

const Contact = () => {
  const { languageState } = useLanguage();

  return (
    <div id="section-contact" className="uk-section uk-section-large">
      <div className="uk-container">
        <h2>{languageState.texts.Contact.Title}</h2>

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

export default Contact;
