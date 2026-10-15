// Centralized external links config (Vite env backed)
// Prefer configuring values in `.env` (see `.env.example`).

export const LINKS = {
  // Social
  GITHUB: import.meta.env.VITE_LINK_GITHUB || "https://github.com/sito8943",
  INSTAGRAM:
    import.meta.env.VITE_LINK_INSTAGRAM ||
    "https://www.instagram.com/sito.8943/",
  TWITTER: import.meta.env.VITE_LINK_TWITTER || "https://twitter.com/sito8943",
  LINKEDIN:
    import.meta.env.VITE_LINK_LINKEDIN ||
    "https://www.linkedin.com/in/sito8943",

  // Projects
  PROJECT_M2G_FOTOS:
    import.meta.env.VITE_LINK_PROJECT_M2G_FOTOS || "https://m2g-fotos.web.app/",
  PROJECT_DESCUBRE_TRINIDAD:
    import.meta.env.VITE_LINK_PROJECT_DESCUBRE_TRINIDAD ||
    "https://descubretrinidad.com",
  PROJECT_SITO_LIBRARY:
    import.meta.env.VITE_LINK_PROJECT_SITO_LIBRARY ||
    "https://recursos.sito8943.com/",

  // Skills / Tech
  REACT: import.meta.env.VITE_LINK_REACT || "https://reactjs.org/",
  HTML_CSS_TUTORIAL:
    import.meta.env.VITE_LINK_HTML_CSS_TUTORIAL ||
    "https://www.w3.org/Style/Examples/011/firstcss.es.html",
  JAVASCRIPT:
    import.meta.env.VITE_LINK_JAVASCRIPT ||
    "https://es.wikipedia.org/wiki/JavaScript",
  GIT: import.meta.env.VITE_LINK_GIT || "https://git-scm.com/",
  TYPESCRIPT:
    import.meta.env.VITE_LINK_TYPESCRIPT || "https://www.typescriptlang.org/",
  MUI: import.meta.env.VITE_LINK_MUI || "https://mui.com/",
  TAILWINDCSS:
    import.meta.env.VITE_LINK_TAILWINDCSS || "https://tailwindcss.com",
  FIREBASE:
    import.meta.env.VITE_LINK_FIREBASE || "https://firebase.google.com/",
  PHOTOSHOP:
    import.meta.env.VITE_LINK_PHOTOSHOP ||
    "https://www.adobe.com/es/products/photoshop.html",
  FIGMA: import.meta.env.VITE_LINK_FIGMA || "https://www.figma.com/",

  // About content references
  QT: import.meta.env.VITE_LINK_QT || "https://www.qt.io/",
  CPP: import.meta.env.VITE_LINK_CPP || "https://es.wikipedia.org/wiki/C%2B%2B",
  NODE: import.meta.env.VITE_LINK_NODE || "https://nodejs.org/",
  NEXTUI: import.meta.env.VITE_LINK_NEXTUI || "https://nextui.org/",
  MONGODB: import.meta.env.VITE_LINK_MONGODB || "https://www.mongodb.com/",

  // Contact
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || "sito8943@gmail.com",
  CONTACT_CV_URL:
    import.meta.env.VITE_CONTACT_CV_URL ||
    "https://drive.google.com/file/d/1s495FvKAtHrPlfItnx1oVCEDs1HJiZNp/view?usp=sharing",
};
