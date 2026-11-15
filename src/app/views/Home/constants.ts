/** `data-logo-anchor` values: the boxes the travelling logo outline moves between. */
export const LOGO_ANCHORS = {
  hero: "hero",
  about: "about",
  features: "features",
  skills: "skills",
} as const;

/** Anchors in page order: the logo lands on each, then reassembles and moves on. */
export const LOGO_STOPS = [
  LOGO_ANCHORS.hero,
  LOGO_ANCHORS.about,
  LOGO_ANCHORS.features,
  LOGO_ANCHORS.skills,
] as const;

/** Window event a section fires after moving its anchor without scrolling (e.g. on hover). */
export const LOGO_ANCHOR_MOVE_EVENT = "logo-anchor-move";

/** Set to "true" on an anchor once the logo has landed (dissolved) on it; never reset. */
export const LOGO_LANDED_ATTRIBUTE = "data-logo-landed";
