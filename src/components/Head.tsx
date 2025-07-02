import React, { type FC } from "react";

type Integrity = {
  styles: string;
};

const Head: FC<{ integrity: Integrity }> = ({ integrity }) => (
  <>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="description" content="Principal Engineer at SOK" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta property="og:image" content="/static/icon-512.png" />
    <meta
      property="og:title"
      content="Iiro Jäppinen, Principal Engineer at SOK"
    />
    <meta
      property="og:description"
      content="I build web experiences, develop tooling, and maintain open-source libraries."
    />
    <meta property="og:url" content="https://iiro.fi" />
    <link
      href="/static/styles.css"
      rel="stylesheet"
      integrity={integrity.styles}
    />
  </>
);

export default Head;
