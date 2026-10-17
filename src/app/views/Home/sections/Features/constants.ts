import {
  faCode,
  faMobileScreenButton,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";

/** Competency card ids, matching `_pages:home.features.cards.<id>` keys. */
export const FEATURE_CARDS = [
  { id: "uiUx", icon: faPenRuler, tone: "violet" },
  { id: "web", icon: faCode, tone: "green" },
  { id: "mobile", icon: faMobileScreenButton, tone: "blue" },
] as const;
