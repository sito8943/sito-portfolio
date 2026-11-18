import type { Plugin } from "vite";

const STYLESHEET =
  /<link rel="stylesheet" crossorigin href="\/([^"]+\.css)">\s*/g;

/**
 * Build: moves the stylesheet into the top of the HTML instead of linking it, so the prerendered
 * first screen paints as soon as the HTML arrives, before scripts, fonts and images (which
 * would otherwise share the bandwidth with it). The site is one page, so no other page reuses it.
 */
export function inlineCss(): Plugin {
  return {
    name: "inline-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        const styles: string[] = [];
        const rest = html.replace(STYLESHEET, (tag, fileName: string) => {
          const asset = ctx.bundle?.[fileName];
          if (asset?.type !== "asset") return tag;
          styles.push(String(asset.source));
          return "";
        });
        // Right after `<meta charset>`, which must stay within the first 1024 bytes.
        return rest.replace(
          /<meta charset="[^"]*"\s*\/?>/,
          (charset) => `${charset}\n    <style>${styles.join("")}</style>`,
        );
      },
    },
  };
}
