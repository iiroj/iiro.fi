import type { DetailedHTMLProps, JSX as ReactJSX } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "bsky-thoughts": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & { actor: string; limit: string },
        HTMLElement
      >;
    }
  }
}
