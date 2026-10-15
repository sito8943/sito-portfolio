import { LINKS } from "@/shared/config";

// other skills
import mui from "@/assets/images/logos/mui.webp";
import tailwindcss from "@/assets/images/skills/tailwind.svg";
import typescript from "@/assets/images/skills/Typescript_logo_2020.svg.png";
import firebase from "@/assets/images/logos/firebase.webp";
import git from "@/assets/images/skills/Git-Icon-1788C.png";
import photoshop from "@/assets/images/skills/ps.png";
import figma from "@/assets/images/skills/figma.jpg";

import type { Skill } from "./types";

/** Year of the first professional frontend work. */
export const CAREER_START_YEAR = 2020;

export const TOOLTIP_ID = "skills-tooltip";

export const MAIN_SKILLS: Skill[] = [
  {
    id: "React",
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/React_Native_Logo_Yn2-u9mCt.png?updatedAt=1690681265746",
    link: LINKS.REACT,
  },
  {
    id: "Html-Css",
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/HTMLCSS_63L4ZaQCk.jpg?updatedAt=1690853306821",
    link: LINKS.HTML_CSS_TUTORIAL,
  },
  {
    id: "JavaScript",
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/js_5UTJufCe3.jpg?updatedAt=1690852899191",
    link: LINKS.JAVASCRIPT,
  },
];

export const OTHER_SKILLS: Skill[] = [
  { id: "Git", image: git, link: LINKS.GIT },
  { id: "Typescript", image: typescript, link: LINKS.TYPESCRIPT },
  { id: "Material UI", image: mui, link: LINKS.MUI },
  { id: "Tailwind CSS", image: tailwindcss, link: LINKS.TAILWINDCSS },
  { id: "Firebase", image: firebase, link: LINKS.FIREBASE },
  { id: "Photoshop", image: photoshop, link: LINKS.PHOTOSHOP },
  { id: "Figma", image: figma, link: LINKS.FIGMA },
];
