import React, { type FunctionComponent } from "react";

import { CloudflareBeacon } from "./CloudflareBeacon.tsx";

type Integrity = {
  styles: string;
};

const Head: FunctionComponent<{ integrity: Integrity }> = ({ integrity }) => (
  <>
    <meta charSet="utf-8" />
    <link
      href="/static/styles.css"
      rel="stylesheet"
      integrity={integrity.styles}
    />
    <link rel="apple-touch-icon" href="/static/icon-512.png" />
    <meta name="description" content="Principal Engineer at SOK" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta property="og:image" content="/static/profile-512.png" />
    <meta
      property="og:title"
      content="Iiro Jäppinen, Principal Engineer at SOK"
    />
    <meta
      property="og:description"
      content="I build web experiences, develop tooling, and maintain open-source libraries."
    />
    <meta property="og:url" content="https://iiro.fi" />
    <CloudflareBeacon token="2dcdc91efcdc4bb79f51ea6813121a74" />
  </>
);

Head.displayName = "Head";

export default Head;
