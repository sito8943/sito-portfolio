import type { ReactNode } from "react";

export type SelectOption<T extends string> = { value: T; label: string };

export type SelectPlacement =
  "bottom-start" | "bottom-end" | "top-start" | "top-end";

export type SelectProps<T extends string> = {
  value: T;
  options: readonly SelectOption<T>[];
  onChange: (value: T) => void;
  /** Accessible name; read before the current value. */
  label: string;
  /** Leading icon inside the trigger. */
  icon?: ReactNode;
  /** Where the list opens relative to the trigger. */
  placement?: SelectPlacement;
  className?: string;
};
