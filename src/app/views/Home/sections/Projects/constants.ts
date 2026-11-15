import { LINKS } from "@/shared/config";

import descubreTrinidad from "@/assets/images/projects/descubre-trinidad.jpg";
import inmersoftWeb from "@/assets/images/projects/inmersoft-web.jpg";
import harbourSpaceWeb from "@/assets/images/projects/harbour-space-web.jpg";
import sitoDeck from "@/assets/images/projects/sito-deck.jpg";
import harbourSpaceHeroMp4 from "@/assets/videos/harbour-space-hero.mp4";
import harbourSpaceHeroWebm from "@/assets/videos/harbour-space-hero.webm";

import { HarbourSpaceDecor } from "./HarbourSpaceDecor";
import { HarbourSpaceLogo } from "./HarbourSpaceLogo";
import { InmersoftDecor } from "./InmersoftDecor";
import { InmersoftLogo } from "./InmersoftLogo";
import { NotasMark } from "./NotasMark";
import { WalletMark } from "./WalletMark";
import type { Stage, StageBrand, StageId, UniverseProduct } from "./types";

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
    // The CMS and Student Space: internal, so counted but not shown.
    unlisted: 2,
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

/** Sito Universe: my own products. Wallet and Notas show their brand, not app data (private). */
export const UNIVERSE_PRODUCTS: UniverseProduct[] = [
  {
    id: "sitoWallet",
    link: LINKS.SITO_WALLET,
    media: "brand",
    image: "",
    brand: { Mark: WalletMark, background: "#00997b", color: "#fbfbfb" },
  },
  {
    id: "sitoNotas",
    link: LINKS.SITO_NOTAS,
    media: "brand",
    image: "",
    brand: { Mark: NotasMark, background: "#0f131c", color: "#8bb6f8" },
  },
  {
    id: "sitoDeck",
    link: LINKS.SITO_DECK,
    media: "bleed",
    image: sitoDeck,
    feature: "globe",
  },
];

/** Every live product in the journey, unlisted ones included (the Stack highlight counts them). */
export const PRODUCTS_IN_PRODUCTION =
  STAGES.reduce(
    (total, stage) => total + stage.products.length + (stage.unlisted ?? 0),
    0,
  ) + UNIVERSE_PRODUCTS.length;
