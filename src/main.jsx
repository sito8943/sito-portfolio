import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// translations
import "./i18.js";

// @sito/ui
import { ModeProvider, StyleProvider } from "@sito/ui";

// styles
import "./index.css";
import "tippy.js/dist/tippy.css"; // optional

// font
import '@fontsource/roboto/300.css'
import '@fontsource/poppins/900.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModeProvider>
    <StyleProvider>
      <App />
    </StyleProvider>
  </ModeProvider>
);
