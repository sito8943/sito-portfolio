import type { AOShieldLogoProps } from "./types";

/**
 * AOShield's logo (from aoshield.com), redrawn: "AO" in white over the blue shield, then
 * "Shield" in `currentColor`. Set in Poppins Bold, the closest loaded face.
 */
export function AOShieldLogo({ className, label }: AOShieldLogoProps) {
  return (
    <svg
      viewBox="0 0 232 80"
      className={className}
      role="img"
      aria-label={label}
    >
      <path
        d="M6 8 36 1l30 7v28c0 20-13 34-30 42C19 70 6 56 6 36z"
        fill="#1e74b6"
      />
      <text
        x="36"
        y="54"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="34"
        letterSpacing="-1"
      >
        AO
      </text>
      <text
        x="70"
        y="54"
        fill="currentColor"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="36"
        letterSpacing="-0.5"
      >
        Shield
      </text>
    </svg>
  );
}
