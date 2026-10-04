import type { ReactNode } from "react";

import { generateStyles } from "../generateStyles.ts";

const Html = async ({ children, version }: { children: ReactNode; version: string }) => {
  const styles = await generateStyles();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="version" content={version} />
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
        <style dangerouslySetInnerHTML={{ __html: styles.css }} />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Html;
