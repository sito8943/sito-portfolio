import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { LINKS } from "./links";

export type Social = {
  text: string;
  link: string;
  icon: IconDefinition;
};

export const SOCIALS: Social[] = [
  { text: "github", link: LINKS.GITHUB, icon: faGithub },
  { text: "instagram", link: LINKS.INSTAGRAM, icon: faInstagram },
  { text: "twitter", link: LINKS.TWITTER, icon: faTwitter },
  { text: "linkedin", link: LINKS.LINKEDIN, icon: faLinkedin },
];
