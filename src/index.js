import React from "react";
import ReactDOM from "react-dom/client";

import { NextUIProvider } from "@nextui-org/react";

import App from "./App";

import "./index.css";

// contexts
import { LanguageProvider } from "./contexts/LanguageProvider";
import { RouteProvider } from "./contexts/RouteProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <RouteProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </RouteProvider>
    </LanguageProvider>
  </React.StrictMode>
);
