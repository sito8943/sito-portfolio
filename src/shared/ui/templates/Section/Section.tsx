import type { SectionProps } from "./types";

/** Full-width page section with a centered content column. */
export function Section({
  id = "",
  background = "",
  containerClass = "",
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`flex justify-center items-center py-[100px] relative ${background} ${className}`}
    >
      <div className={`w-[90%] ${containerClass}`}>{children}</div>
    </section>
  );
}
