import { LINKS } from "@/shared/config";

import descubreTrinidad from "@/assets/images/projects/descubre-trinidad.jpg";
import inmersoftWeb from "@/assets/images/projects/inmersoft-web.jpg";
import harbourSpaceWeb from "@/assets/images/projects/harbour-space-web.jpg";
import harbourSpaceHeroMp4 from "@/assets/videos/harbour-space-hero.mp4";
import harbourSpaceHeroWebm from "@/assets/videos/harbour-space-hero.webm";

import { HarbourSpaceDecor } from "./HarbourSpaceDecor";
import { HarbourSpaceLogo } from "./HarbourSpaceLogo";
import { InmersoftDecor } from "./InmersoftDecor";
import { InmersoftLogo } from "./InmersoftLogo";
import type { Stage, StageBrand, StageId } from "./types";

/** Each stage's identity pieces: its logo and its motifs. */
export const STAGE_BRANDS: Record<StageId, StageBrand> = {
  inmersoft: { Logo: InmersoftLogo, Decor: InmersoftDecor },
  harbourSpace: { Logo: HarbourSpaceLogo, Decor: HarbourSpaceDecor },
};

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
  {
    id: "harbourSpace",
    products: [
      {
        id: "harbourSpaceWeb",
        image: harbourSpaceWeb,
        video: {
          mp4: harbourSpaceHeroMp4,
          webm: harbourSpaceHeroWebm,
          backdrop: "#3f1f89",
        },
        media: "bleed",
        hideTitle: true,
        link: LINKS.HARBOUR_SPACE,
      },
    ],
  },
];
