export type ClientPreviewVariant = "dashboard" | "board";

export type ClientPreviewProps = {
  variant: ClientPreviewVariant;
  /** Badge over the composition, e.g. "Confidential". */
  badge: string;
};
