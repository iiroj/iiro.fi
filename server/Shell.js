import React from "react";

import Route from "./router/Route.js";
import Router from "./router/Router.js";
import Index from "./pages/Index.js";
import NotFound from "./pages/NotFound.js";

const Shell = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Iiro Jäppinen</title>
        <link href="/static/styles.css" rel="prefetch" as="stylesheet" />
        <link
          href="/static/styles.css"
          rel="stylesheet"
          integrity="sha256-cldl2usXe7S9eGlPNXim+Hcq2HIJ12AXneEt3O8Kc+Y="
        />
        <link rel="apple-touch-icon" href="/static/icon-512.png" />
        <meta name="description" content="Principal Engineer at S Group" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta property="og:image" content="/static/profile-512.png" />
        <meta
          property="og:title"
          content="Iiro Jäppinen, Principal Engineer at S Group"
        />
        <meta
          property="og:description"
          content="I build web experiences, develop tooling, and maintain open-source libraries."
        />
        <meta property="og:url" content="https://iiro.fi" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Shell;
