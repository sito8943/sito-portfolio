import type { ButtonColor, ButtonSize, ButtonVariant } from "@sito/ui";

type ButtonClassNameOptions = {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  className?: string;
};

/**
 * Builds @sito/ui button classes for elements that are not a <button>
 * (e.g. anchors), so links share the Button look.
 */
export const buttonClassName = ({
  color = "default",
  variant = "text",
  size = "md",
  icon = false,
  className,
}: ButtonClassNameOptions = {}) =>
  [
    "sito-ui-button",
    `sito-ui-button--${variant}`,
    `sito-ui-button--${color}`,
    `sito-ui-button--${size}`,
    icon && `sito-ui-icon-button sito-ui-icon-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
