import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";

// translations
import "@/features/i18n";

// styles (single global entry, see STYLE_GUIDE.md)
import "@/shared/ui/styles/styles.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root not found");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
