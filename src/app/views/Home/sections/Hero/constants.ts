const AVATAR_PATH = "sito_recursos/yo2_S891JXKyO.webp";

/** ImageKit resizes the portrait on the fly: one URL per width. */
const avatarAt = (width: number) =>
  `https://ik.imagekit.io/lgqp0wffgtp/tr:w-${width},q-80/${AVATAR_PATH}`;

/** Widths offered to the browser; the portrait is at most 437 CSS px wide. */
const AVATAR_WIDTHS = [320, 480, 640, 960] as const;

export const AVATAR_SRC = avatarAt(640);
export const AVATAR_SRCSET = AVATAR_WIDTHS.map(
  (width) => `${avatarAt(width)} ${width}w`,
).join(", ");
/** Rendered width: 70% of a phone screen, 437 px from tablets up. */
export const AVATAR_SIZES = "(width < 640px) 70vw, 437px";
