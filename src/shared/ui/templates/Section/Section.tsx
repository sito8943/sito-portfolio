import type { SectionProps } from "./types";

/** Full-width page section with a centered content column. */
export function Section({
  id = "",
  className = "",
  containerClassName = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className={`section-container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
