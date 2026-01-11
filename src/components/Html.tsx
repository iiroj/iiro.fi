import React, { type FC, type ReactNode } from "react";

const styles = Bun.file("./public/static/styles.css");

const integrity = new Bun.CryptoHasher("sha256")
  .update(await styles.text())
  .digest("base64");

const Html: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
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
      <link href="/static/styles.css" rel="stylesheet" integrity={integrity} />
    </head>
    <body>{children}</body>
  </html>
);

export default Html;
