import React from "react";

import { FooterLinks } from "../components/FooterLinks.tsx";

export const Head = async () => (
  <>
    <title>Page Not Found</title>
    <meta name="robots" content="noarchive, noindex" />
  </>
);

export const Body = async () => (
  <>
    <header>
      <h1>Page Not Found</h1>
      <h2>Four Zero Four</h2>
    </header>

    <FooterLinks>{[{ href: "/", title: "Back Home" }]}</FooterLinks>
  </>
);
