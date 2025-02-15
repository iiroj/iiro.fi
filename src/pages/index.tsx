import React, { type FunctionComponent } from "react";

import { FooterLinks } from "../components/FooterLinks.tsx";

export const Head: FunctionComponent<{}> = async () => (
  <>
    <title>Iiro Jäppinen</title>
  </>
);

export const Body: FunctionComponent<{}> = async () => (
  <>
    <header>
      <picture>
        <source
          srcSet="/static/profile-96.webp  1x, /static/profile-192.webp 2x, /static/profile-288.webp 3x"
          type="image/webp"
        />
        <img
          alt="Iiro Jäppinen"
          decoding="async"
          height="96px"
          loading="eager"
          src="/static/profile-96.jpg"
          srcSet="/static/profile-96.jpg  1x, /static/profile-192.jpg 2x, /static/profile-288.jpg 3x"
          style={{ background: "#45810C" }}
          width="96px"
        />
      </picture>

      <div>
        <h1>Iiro Jäppinen</h1>

        <h2>Principal Engineer at SOK</h2>
      </div>
    </header>

    <p>
      I help people grow, create collaboration, build web experiences, develop
      tooling, and maintain open-source libraries.
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
