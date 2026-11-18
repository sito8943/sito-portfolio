import type { SVGProps } from "react";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  /** A Font Awesome icon definition (`faArrowUp`, `faGithub`…). */
  icon: IconDefinition;
};
