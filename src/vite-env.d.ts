/// <reference types="vite/client" />

/** Env vars read in `src/shared/config/links.ts` (see `.env.example`). */
interface ImportMetaEnv {
  readonly VITE_LINK_GITHUB?: string;
  readonly VITE_LINK_INSTAGRAM?: string;
  readonly VITE_LINK_TWITTER?: string;
  readonly VITE_LINK_LINKEDIN?: string;
  readonly VITE_LINK_PROJECT_M2G_FOTOS?: string;
  readonly VITE_LINK_PROJECT_DESCUBRE_TRINIDAD?: string;
  readonly VITE_LINK_PROJECT_SITO_LIBRARY?: string;
  readonly VITE_LINK_REACT?: string;
  readonly VITE_LINK_HTML_CSS_TUTORIAL?: string;
  readonly VITE_LINK_JAVASCRIPT?: string;
  readonly VITE_LINK_GIT?: string;
  readonly VITE_LINK_TYPESCRIPT?: string;
  readonly VITE_LINK_MUI?: string;
  readonly VITE_LINK_TAILWINDCSS?: string;
  readonly VITE_LINK_FIREBASE?: string;
  readonly VITE_LINK_PHOTOSHOP?: string;
  readonly VITE_LINK_FIGMA?: string;
  readonly VITE_LINK_QT?: string;
  readonly VITE_LINK_CPP?: string;
  readonly VITE_LINK_NODE?: string;
  readonly VITE_LINK_NEXTUI?: string;
  readonly VITE_LINK_MONGODB?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_CONTACT_CV_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
