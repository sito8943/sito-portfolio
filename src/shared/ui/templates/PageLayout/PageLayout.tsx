import type { PageLayoutProps } from "./types";

/** Page shell: floating extras, header, main content, footer. */
export function PageLayout({
  header,
  footer,
  overlay,
  children,
}: PageLayoutProps) {
  return (
    <>
      {overlay}
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
