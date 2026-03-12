import type { FC, ReactNode } from "react";

const INLINE_STYLES = [
  ":root { --background: white; --foreground: black }",
  "@media (prefers-color-scheme: dark) {",
  ":root { --background: white; --foreground: black }",
  "}",
  "html { background: var(--background); color: var(--foreground) }",
].join("\n");

const Html: FC<{ children: ReactNode; integrity: string }> = async ({
  children,
  integrity,
}) => {
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
          dangerouslySetInnerHTML={{ __html: INLINE_STYLES }}
        />
      </head>
      <body>
        {children}
        <link
          href="/static/styles.css"
          integrity={integrity}
          rel="stylesheet"
        />
      </body>
    </html>
  );
};

export default Html;
