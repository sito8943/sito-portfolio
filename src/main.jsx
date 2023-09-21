import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// styles
import "./index.css";
import "tippy.js/dist/tippy.css"; // optional

// contexts
import { LanguageProvider } from "./contexts/LanguageProvider";

// animations
import "./assets/animations/appear.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
