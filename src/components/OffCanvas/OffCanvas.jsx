// sito components
import SitoContainer from "sito-container";

// @emotion/css
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useRoute } from "../../contexts/RouteProvider";

const OffCanvas = () => {
  const { languageState } = useLanguage();
  const { routeState, setRouteState } = useRoute();
  const { active } = routeState;

  return (
    <div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true">
      <SitoContainer flexDirection="column" className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          data-uk-close
        ></button>

        <h3>Sito</h3>
        <ul className={`uk-nav uk-nav-primary uk-nav-left`}>
          {languageState.texts.Navbar.Links.map((item) => (
            <li
              key={item.label}
              className={item.id === active ? "uk-active" : ""}
            >
              <a onClick={() => setRouteState(item.id)} href={item.to}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </SitoContainer>
    </div>
  );
};

export default OffCanvas;
