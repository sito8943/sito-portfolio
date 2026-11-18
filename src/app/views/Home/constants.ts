/** `data-logo-anchor` values: the boxes the travelling logo outline moves between. */
export const LOGO_ANCHORS = {
  hero: "hero",
  about: "about",
  features: "features",
  skills: "skills",
  contact: "contact",
} as const;

/** Anchors in page order: the logo lands on each, then reassembles and moves on. */
export const LOGO_STOPS = [
  LOGO_ANCHORS.hero,
  LOGO_ANCHORS.about,
  LOGO_ANCHORS.features,
  LOGO_ANCHORS.skills,
  LOGO_ANCHORS.contact,
] as const;

/**
 * Stops where the logo docks instead of dissolving: it lands while the anchor is mid-screen,
 * stays whole and glides when the section moves its anchor (Skills' stack tabs).
 */
export const LOGO_DOCK_STOPS: readonly string[] = [LOGO_ANCHORS.skills];

/** Window event a section fires after moving its anchor without scrolling (e.g. on hover). */
export const LOGO_ANCHOR_MOVE_EVENT = "logo-anchor-move";

/** Set to "true" on an anchor once the logo has landed (dissolved) on it; never reset. */
export const LOGO_LANDED_ATTRIBUTE = "data-logo-landed";

/** Id of the footer's copyright: the "to top" button lines up with it at the page bottom. */
export const FOOTER_DOCK_ID = "footer-dock";
