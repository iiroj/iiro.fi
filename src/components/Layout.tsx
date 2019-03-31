import { Helmet } from "react-helmet-async";
import * as React from "react";

import Reset from "./Reset";

export default ({ children }: { children: React.ReactNode }) => (
  <>
    <Helmet>
      <html lang="en" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" href="/favicon.png" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/icon.png" />
      <link rel="mask-icon" href="/icon.svg" color="#333333" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>

    <Reset />

    {children}
  </>
);
