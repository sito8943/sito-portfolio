/** In-page section ids. Use these instead of hardcoding `#section` strings. */
export const SECTIONS = {
  home: "home",
  features: "features",
  about: "about",
  skills: "skills",
  projects: "projects",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

/** Navigation order for the header and drawer. */
export const NAV_LINKS: SectionId[] = [
  SECTIONS.home,
  SECTIONS.about,
  SECTIONS.features,
  SECTIONS.skills,
  SECTIONS.projects,
  SECTIONS.contact,
];
