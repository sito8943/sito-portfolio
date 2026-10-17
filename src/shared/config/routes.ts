/** App routes. Never hardcode route strings in `<Link to>` or `navigate()`. */
export const ROUTES = {
  home: "/",
  notFound: "/*",
} as const;

/** Home of one language: each language is its own prerendered page (`/en/`, `/es/`). */
export const langHome = (lang: string) => `/${lang}/`;
