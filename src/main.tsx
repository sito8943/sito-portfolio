import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import { App } from "@/app";
import { LANGS } from "@/lang";
import { langHome } from "@/shared/config";

// translations
import "@/features/i18n";

// styles (single global entry, see STYLE_GUIDE.md)
import "@/shared/ui/styles/styles.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root not found");

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// `/en/` and `/es/` arrive prerendered (see entry-server.tsx): take over that HTML. Any other
// path served by the same file (a 404 under /es/…) renders from scratch.
const prerendered = LANGS.some((lang) => location.pathname === langHome(lang));

if (prerendered && container.firstElementChild) hydrateRoot(container, app);
else {
  container.replaceChildren();
  createRoot(container).render(app);
}
