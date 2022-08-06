import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { NextUIProvider } from "@nextui-org/react";

import { lightTheme, darkTheme } from "./assets/theme/theme";

import App from "./App";

import "./index.css";

// contexts
import { LanguageProvider } from "./contexts/LanguageProvider";
import { RouteProvider } from "./contexts/RouteProvider";
import Modal from "./Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <RouteProvider>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            {/* <App /> */}
            <Modal />
          </NextUIProvider>
        </NextThemesProvider>
      </RouteProvider>
    </LanguageProvider>
  </React.StrictMode>
);
