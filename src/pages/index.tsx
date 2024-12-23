import React, { type FunctionComponent } from "react";

import { FooterLinks } from "../components/FooterLinks.tsx";

export const Head: FunctionComponent<{}> = async () => (
  <>
    <title>Iiro Jäppinen</title>
  </>
);

Head.displayName = "Page(Head((Index))";

export const Body: FunctionComponent<{}> = async () => (
  <>
    <header>
      <picture>
        <img
          alt="Iiro Jäppinen"
          decoding="async"
          height="96px"
          loading="eager"
          src="/static/profile-96.jpg"
          srcSet="/static/profile-96.jpg  1x, /static/profile-192.jpg 2x, /static/profile-288.jpg 3x"
          style={{ background: "#2f3614" }}
          width="96px"
        />
      </picture>

      <div>
        <h1>Iiro Jäppinen</h1>

        <h2>Principal Engineer at SOK</h2>
      </div>
    </header>

    <p>
      I build web experiences, develop tooling, and maintain open-source
      libraries.
    </p>

    <FooterLinks>
      {[
        {
          href: "https://github.com/iiroj",
          rel: "author noreferrer",
          target: "_blank",
          title: "GitHub",
        },
        {
          href: "https://linkedin.com/in/iiroj",
          rel: "author noreferrer",
          target: "_blank",
          title: "LinkedIn",
        },
      ]}
    </FooterLinks>
  </>
);

Body.displayName = "Page(Body((Index))";
