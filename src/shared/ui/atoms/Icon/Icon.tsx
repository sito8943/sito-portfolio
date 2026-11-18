import type { IconProps } from "./types";

/**
 * A Font Awesome icon drawn as plain inline SVG, with the same markup and classes as
 * `FontAwesomeIcon` but without its runtime (about 25 kB gzip off the first load).
 * Decorative by default; pass `aria-hidden={false}` and a label to make it meaningful.
 */
export function Icon({ icon, className, ...rest }: IconProps) {
  const [width, height, , , path] = icon.icon;
  const paths = Array.isArray(path) ? path : [path];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      className={`svg-inline--fa fa-${icon.iconName}${className ? ` ${className}` : ""}`}
      data-prefix={icon.prefix}
      data-icon={icon.iconName}
      role="img"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths.map((d) => (
        <path key={d} fill="currentColor" d={d} />
      ))}
    </svg>
  );
}
