import type { Resources } from "@/lang";

import type { ProductMedia } from "./ProductPanel";

type ProjectsCopy = Resources["_pages"]["home"]["projects"];

/** Key under `_pages:home.projects.stages`. */
export type StageId = keyof ProjectsCopy["stages"];

/** Key under `_pages:home.projects.products`. */
export type ProductId = keyof ProjectsCopy["products"];

export type Product = {
  id: ProductId;
  image: string;
  media: ProductMedia;
  link: string;
};

/** A career stage: the company's intro, then its products as stacked panels. */
export type Stage = {
  id: StageId;
  products: Product[];
};
