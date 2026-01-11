import React from "react";

import { Bluesky } from "../components/Bluesky.tsx";
import { FooterLinks } from "../components/FooterLinks.tsx";
import { GitHub } from "../components/GitHub.tsx";
import { LinkedIn } from "../components/LinkedIn.tsx";

export default () => (
  <>
    <title>Iiro Jäppinen</title>

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
          width="96px"
        />
      </picture>

      <div>
        <h1>Iiro Jäppinen</h1>

        <h2>Principal Engineer at SOK</h2>
      </div>
    </header>

    <FooterLinks>
      {[
        {
          href: "https://github.com/iiroj",
          icon: <GitHub />,
          rel: "author noreferrer",
          target: "_blank",
          title: "GitHub",
        },
        {
          href: "https://bsky.app/profile/iiro.fi",
          icon: <Bluesky />,
          rel: "author noreferrer",
          target: "_blank",
          title: "Bluesky",
        },
        {
          href: "https://linkedin.com/in/iiroj",
          icon: <LinkedIn />,
          rel: "author noreferrer",
          target: "_blank",
          title: "LinkedIn",
        },
      ]}
    </FooterLinks>
  </>
);
