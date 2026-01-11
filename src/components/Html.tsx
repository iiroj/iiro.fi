import type { FC, ReactNode } from "react";

const styles = Bun.file("./public/static/styles.css");

const integrity = new Bun.CryptoHasher("sha256")
  .update(await styles.text())
  .digest("base64");

const Html: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <link href="/favicon.ico" rel="icon" sizes="48x48" />
      <link href="/favicon.svg" rel="icon" sizes="any" type="image/svg+xml" />
      <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
      <meta content="Principal Engineer at SOK" name="description" />
      <meta content="width=device-width,initial-scale=1" name="viewport" />
      <meta content="/static/icon-512.png" property="og:image" />
      <meta
        content="Iiro Jäppinen, Principal Engineer at SOK"
        property="og:title"
      />
      <meta
        content="I build web experiences, develop tooling, and maintain open-source libraries."
        property="og:description"
      />
      <meta content="https://iiro.fi" property="og:url" />
      <link href="/static/styles.css" integrity={integrity} rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>
);

export default Html;
