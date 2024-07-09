import React, { type FunctionComponent } from "react";

import { FooterLinks } from "../components/FooterLinks.tsx";

export const Head: FunctionComponent<{}> = async () => (
  <>
    <title>Page Not Found</title>
    <meta name="robots" content="noarchive, noindex" />
  </>
);

Head.displayName = "Page(Head((404))";

export const Body: FunctionComponent<{}> = async () => (
  <>
    <h1>Page Not Found</h1>

    <h2>Four Zero Four</h2>

    <FooterLinks>{[{ href: "/", title: "Back Home" }]}</FooterLinks>
  </>
);

Body.displayName = "Page(Body((404))";
