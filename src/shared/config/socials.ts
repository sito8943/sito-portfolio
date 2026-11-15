import {
  faInstagram,
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { LINKS } from "./links";
import type { Social } from "./types";

export const SOCIALS: Social[] = [
  { text: "GitHub", link: LINKS.GITHUB, icon: faGithub },
  { text: "Instagram", link: LINKS.INSTAGRAM, icon: faInstagram },
  { text: "X", link: LINKS.TWITTER, icon: faXTwitter },
  { text: "LinkedIn", link: LINKS.LINKEDIN, icon: faLinkedin },
];

/** Profiles that matter professionally: the only ones shown in the Hero. */
export const PROFESSIONAL_SOCIALS: Social[] = SOCIALS.filter(
  ({ text }) => text === "GitHub" || text === "LinkedIn",
);
