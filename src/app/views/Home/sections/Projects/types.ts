import type { ComponentType } from "react";

import type { Resources } from "@/lang";

import type { ProductBrand, ProductMedia, ProductVideo } from "./ProductPanel";

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
  /** Shown by a drawn mark on a colour instead of a screenshot (`media: "brand"`). */
  brand?: ProductBrand;
  /** No public site (internal tools): the chapter has no "visit" link. */
  link?: string;
  /** A live piece drawn large in the middle of the chapter. */
  feature?: "internalPreview" | "clientDashboard" | "clientBoard";
  /** Live products this chapter stands for (internal tools grouped in one), 1 by default. */
  count?: number;
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

/** Key under `_pages:home.projects.universe.products`. */
export type UniverseProductId = keyof ProjectsCopy["universe"]["products"];

export type UniverseProduct = {
  id: UniverseProductId;
  link: string;
  media: ProductMedia;
  image: string;
  brand?: ProductBrand;
  /** A live showcase piece drawn large in its chapter. */
  feature?: "globe";
};
