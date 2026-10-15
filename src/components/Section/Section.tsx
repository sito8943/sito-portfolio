import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  background?: string;
  containerClass?: string;
  className?: string;
  children?: ReactNode;
};

function Section({
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

export default Section;
