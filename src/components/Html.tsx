import type { ReactNode } from "react";

const Html = ({ children, integrity }: { children: ReactNode; integrity: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link href="/favicon.ico" rel="icon" sizes="48x48" />
        <link href="/favicon.svg" rel="icon" sizes="any" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <meta content="Principal Architect at SOK" name="description" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="/static/icon-512.png" property="og:image" />
        <meta content="Iiro Jäppinen, Principal Architect at SOK" property="og:title" />
        <meta
          content="I’m a software engineer with roots in user interface design."
          property="og:description"
        />
        <meta content="https://iiro.fi" property="og:url" />
        <link href="/static/styles.css" integrity={integrity} rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Html;
