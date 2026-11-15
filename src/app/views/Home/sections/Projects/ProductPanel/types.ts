import type { StageFact } from "../StageIntro";

export type ProductMedia = "bleed" | "frame";

/** Muted, looping background clip for a `bleed` panel (the image is its poster). */
export type ProductVideo = {
  mp4: string;
  webm: string;
  /** Colour around the clip, matching its own background, so it can sit uncropped. */
  backdrop: string;
};

export type ProductPanelProps = {
  /** "01" */
  index: string;
  /** Small line over the title: stage and kind of product. */
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  video?: ProductVideo | undefined;
  alt: string;
  /** `bleed`: the screenshot fills the panel; `frame`: shown in a browser frame (light sites). */
  media: ProductMedia;
  link: string;
  visitLabel: string;
  facts: StageFact[];
  /** The media already shows the name (e.g. a logo in the clip): keep the title for screen readers only. */
  hideTitle?: boolean | undefined;
};
