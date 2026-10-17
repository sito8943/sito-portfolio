import type { Resources } from "@/lang";

/** Key under `_pages:home.about` for one card. */
export type AboutCardId = Exclude<
  keyof Resources["_pages"]["home"]["about"],
  "title" | "subtitle"
>;

/** Where a card sits in the fan. */
export type AboutCardSlot = "left" | "center" | "right";

export type AboutCardItem = {
  id: AboutCardId;
  slot: AboutCardSlot;
  alt: string;
  image: string;
};
