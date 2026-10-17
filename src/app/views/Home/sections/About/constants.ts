import type { AboutCardId, AboutCardItem } from "./types";

/** Cards in the fan, left to right. */
export const ABOUT_CARDS: AboutCardItem[] = [
  {
    alt: "playing-piano",
    id: "freeTime",
    slot: "left",
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/tr:w-480,h-640/SitoPortafolio/pianista-caucasico-tocando-acorde-enfoque-generado-ia_vmpjgpvnb.jpg",
  },
  {
    alt: "camera-and-trips",
    id: "me",
    slot: "center",
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/tr:w-480,h-640,q-80/SitoPortafolio/fixed_7D2YpO3dK.jpg",
  },
  {
    alt: "design",
    id: "design",
    slot: "right",
    image:
      "https://ik.imagekit.io/lgqp0wffgtp/tr:w-480,h-640/SitoPortafolio/logotipo-ser-concepto-diseno-inspiracion-creativa_G2gdINzZi.jpg",
  },
];

/** Card shown first: the one in the middle. */
export const DEFAULT_ABOUT_CARD: AboutCardId = "me";
