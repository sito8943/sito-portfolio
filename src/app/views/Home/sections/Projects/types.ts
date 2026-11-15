import type { ComponentType } from "react";

import type { Resources } from "@/lang";

import type { ProductMedia, ProductVideo } from "./ProductPanel";

type ProjectsCopy = Resources["_pages"]["home"]["projects"];

/** Key under `_pages:home.projects.stages`. */
export type StageId = keyof ProjectsCopy["stages"];

/** Key under `_pages:home.projects.products`. */
export type ProductId = keyof ProjectsCopy["products"];

export type Product = {
  id: ProductId;
  image: string;
  video?: ProductVideo;
  media: ProductMedia;
  /** The media already shows the product's name. */
  hideTitle?: boolean;
  link: string;
};

/** A career stage: the company's intro, then its products as stacked panels. */
export type Stage = {
  id: StageId;
  products: Product[];
};

/** A stage's identity pieces, drawn in its intro. */
export type StageBrand = {
  Logo: ComponentType<{ className?: string; label: string }>;
  Decor: ComponentType;
};
