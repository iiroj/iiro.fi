import type { FC, ReactNode } from "react";

const globalCss = await Bun.file("./src/styles.css").text();

const Html: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
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
          content="I’m a software engineer with roots in user interface design."
          property="og:description"
        />
        <meta content="https://iiro.fi" property="og:url" />
        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: critical inline styles
          dangerouslySetInnerHTML={{ __html: globalCss }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Html;
