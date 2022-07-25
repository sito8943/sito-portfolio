/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

// @emotion/css
import { css } from "@emotion/css";

// own components
import OffCanvas from "../OffCanvas/OffCanvas";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const Navbar = () => {
  const { languageState } = useLanguage();

  const [active, setActive] = useState("home");

  const extraCSS = css({
    width: "100%",
    padding: "0 20px",
  });

  const logoCSS = css({
    marginLeft: "10px",
    marginBottom: "4px",
  });

  return (
    <>
      <OffCanvas />
      <nav className={`uk-navbar-container ${extraCSS}`} data-uk-navbar>
        <a
          className="uk-navbar-toggle uk-hidden@s"
          data-uk-navbar-toggle-icon
          href="#"
          data-uk-toggle="target: #offcanvas-push"
        />
        <a href="#" className={`uk-navbar-item uk-logo ${logoCSS}`}>
          Sito
        </a>

        <div className="uk-navbar-right uk-visible@s">
          <ul className="uk-navbar-nav">
            {languageState.texts.Navbar.Links.map((item) => (
              <li
                key={item.label}
                className={item.id === active ? "uk-active" : ""}
              >
                <a onClick={() => setActive(item.id)} href={item.to}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
