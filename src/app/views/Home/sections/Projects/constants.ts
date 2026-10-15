import { LINKS } from "@/shared/config";

import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "m2g-fotos",
    link: LINKS.PROJECT_M2G_FOTOS,
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/Group%203_GS4a4h2tQ.png",
  },
  {
    id: "descubre-trinidad",
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/sito-portfolio_OhYw223Ki.jpg",
    link: LINKS.PROJECT_DESCUBRE_TRINIDAD,
  },
  {
    id: "sito-library",
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/Imagekit_yqb3gsC7a.png",
    link: LINKS.PROJECT_SITO_LIBRARY,
  },
];
