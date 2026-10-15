import type { Resources } from "@/lang";

export type AboutCardItem = {
  /** Key under `_pages:home.about`. */
  id: Exclude<keyof Resources["_pages"]["home"]["about"], "title" | "subtitle">;
  alt: string;
  image: string;
};
