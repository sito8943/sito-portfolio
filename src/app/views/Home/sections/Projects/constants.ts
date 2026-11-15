import { LINKS } from "@/shared/config";

import descubreTrinidad from "@/assets/images/projects/descubre-trinidad.jpg";
import inmersoftWeb from "@/assets/images/projects/inmersoft-web.jpg";

import type { Stage } from "./types";

/** Role in every stage. A job title, the same in every language. */
export const ROLE = "Fullstack Developer";

export const STAGES: Stage[] = [
  {
    id: "inmersoft",
    products: [
      {
        id: "descubreTrinidad",
        image: descubreTrinidad,
        media: "bleed",
        link: LINKS.PROJECT_DESCUBRE_TRINIDAD,
      },
      {
        id: "inmersoftWeb",
        image: inmersoftWeb,
        media: "frame",
        link: LINKS.INMERSOFT,
      },
    ],
  },
];
