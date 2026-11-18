import { LINKS } from "@/shared/config";

import descubreTrinidad from "@/assets/images/projects/descubre-trinidad.webp";
import inmersoftWeb from "@/assets/images/projects/inmersoft-web.webp";
import harbourSpaceWeb from "@/assets/images/projects/harbour-space-web.webp";
import sitoDeck from "@/assets/images/projects/sito-deck.webp";
import harbourSpaceHeroMp4 from "@/assets/videos/harbour-space-hero.mp4";
import harbourSpaceHeroWebm from "@/assets/videos/harbour-space-hero.webm";

import { AOShieldDecor } from "./AOShieldDecor";
import { AOShieldLogo } from "./AOShieldLogo";
import { HarbourSpaceDecor } from "./HarbourSpaceDecor";
import { HarbourSpaceLogo } from "./HarbourSpaceLogo";
import { InmersoftDecor } from "./InmersoftDecor";
import { InmersoftLogo } from "./InmersoftLogo";
import type { Stage, StageBrand, StageId, UniverseProduct } from "./types";

/** Each stage's identity pieces: its logo and its motifs. */
export const STAGE_BRANDS: Record<StageId, StageBrand> = {
  inmersoft: { Logo: InmersoftLogo, Decor: InmersoftDecor },
  aoshield: { Logo: AOShieldLogo, Decor: AOShieldDecor },
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
    id: "aoshield",
    // Client projects under NDA: no client or tool names, drawn as skeletons, never shown.
    products: [
      {
        id: "aoshieldClientA",
        image: "",
        media: "brand",
        brand: { background: "#1b2150", color: "#fbfbfb" },
        feature: "clientDashboard",
      },
      {
        id: "aoshieldClientB",
        image: "",
        media: "brand",
        brand: { background: "#1b2150", color: "#fbfbfb" },
        feature: "clientBoard",
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
      {
        // Two internal platforms: named generically, drawn as skeletons, never shown (private).
        id: "harbourSpaceInternal",
        image: "",
        media: "brand",
        brand: { background: "#3f1f89", color: "#fbfbfb" },
        feature: "internalPreview",
        count: 2,
      },
    ],
  },
];

/** Sito Universe: my own products. Wallet and Notas are drawn as skeletons, never shown (private data). */
export const UNIVERSE_PRODUCTS: UniverseProduct[] = [
  {
    id: "sitoWallet",
    link: LINKS.SITO_WALLET,
    media: "brand",
    image: "",
    brand: { background: "#00997b", color: "#fbfbfb" },
    feature: "wallet",
  },
  {
    id: "sitoNotas",
    link: LINKS.SITO_NOTAS,
    media: "brand",
    image: "",
    brand: { background: "#0f131c", color: "#8bb6f8" },
    feature: "notas",
  },
  {
    id: "sitoDeck",
    link: LINKS.SITO_DECK,
    media: "bleed",
    image: sitoDeck,
    feature: "deck",
  },
];

/** Every live product in the journey, grouped internal ones included (the Stack highlight counts them). */
export const PRODUCTS_IN_PRODUCTION =
  STAGES.flatMap((stage) => stage.products).reduce(
    (total, product) => total + (product.count ?? 1),
    0,
  ) + UNIVERSE_PRODUCTS.length;
