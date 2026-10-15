import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// translations
import "./i18";

// styles
import "./index.css";

// font
import "@fontsource/roboto/400.css";
import "@fontsource/poppins/700.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root not found");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
