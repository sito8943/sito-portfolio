import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// translations
import "./i18.js";

// styles
import "./index.css";
import "tippy.js/dist/tippy.css"; // optional

// animations
import "./assets/animations/appear.css";

// font
import "@fontsource/roboto";
import "@fontsource/poppins";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
