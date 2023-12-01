import React from "react";

import Footer from "../components/Footer.js";

const Img = () => {
  return (
    <img
      alt="Iiro Jäppinen"
      height="96px"
      loading="lazy"
      srcSet="
            /static/profile-144.jpg 1x,
            /static/profile-296.jpg 2x,
            /static/profile-512.jpg 3x
          "
      src="/static/profile-144.jpg"
      width="96px"
    />
  );
};

const Index = () => {
  return (
    <>
      <header>
        <Img />
        <div>
          <h1>Iiro Jäppinen</h1>
          <h2>Principal Engineer at S Group</h2>
        </div>
      </header>

      <p>
        I build web experiences, develop tooling, and maintain open-source
        libraries.
      </p>

      <Footer
        links={[
          {
            href: "https://github.com/iiroj",
            rel: "author noreferrer",
            target: "_blank",
            text: "GitHub",
          },
          {
            href: "https://bsky.app/profile/iiroj.bsky.social",
            rel: "author noreferrer",
            target: "_blank",
            text: "Bluesky",
          },
          {
            href: "https://linkedin.com/in/iiroj",
            rel: "author noreferrer",
            target: "_blank",
            text: "LinkedIn",
          },
        ]}
      />
    </>
  );
};

export default Index;
