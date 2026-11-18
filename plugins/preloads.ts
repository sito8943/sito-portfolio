import type { HtmlTagDescriptor, Plugin } from "vite";

type PreloadsOptions = {
  /** Built font files to preload, matched against their file name (fonts of the first screen). */
  fonts: RegExp[];
  /** The first screen's largest image (LCP), fetched with high priority before any JS runs. */
  image: { href: string; srcset: string; sizes: string };
};

/**
 * Build: adds `<link rel="preload">` for the first screen's fonts and its main image, so the
 * browser fetches them with the HTML instead of after the JS and CSS have run.
 */
export function preloads({ fonts, image }: PreloadsOptions): Plugin {
  return {
    name: "preloads",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(_, ctx) {
        const files = Object.keys(ctx.bundle ?? {});
        const fontTags = fonts.map((pattern): HtmlTagDescriptor => {
          const file = files.find((name) => pattern.test(name));
          if (!file) throw new Error(`preloads: no font matches ${pattern}`);
          return {
            tag: "link",
            attrs: {
              rel: "preload",
              as: "font",
              type: "font/woff2",
              href: `/${file}`,
              crossorigin: "",
            },
            injectTo: "head",
          };
        });
        return [
          {
            tag: "link",
            attrs: {
              rel: "preload",
              as: "image",
              href: image.href,
              imagesrcset: image.srcset,
              imagesizes: image.sizes,
              fetchpriority: "high",
            },
            injectTo: "head",
          },
          ...fontTags,
        ];
      },
    },
  };
}
