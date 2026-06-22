import type { Graph } from "schema-dts";

import { Avatar } from "../components/Avatar.tsx";
import { Bluesky } from "../components/Bluesky.tsx";
import { GitHub } from "../components/GitHub.tsx";
import { LinkedIn } from "../components/LinkedIn.tsx";
import { Nav } from "../components/Nav.tsx";
import { Npm } from "../components/Npm.tsx";
import { Projects } from "../components/Projects.tsx";
import { getIntegrity } from "../integrity.ts";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "#Person",
      name: "Iiro Jäppinen",
      alternateName: "iiroj",
      image: [
        "https://iiro.fi/static/profile-96.jpg",
        "https://iiro.fi/static/profile-96.webp",
        "https://iiro.fi/static/profile-192.jpg",
        "https://iiro.fi/static/profile-192.webp",
        "https://iiro.fi/static/profile-288.jpg",
        "https://iiro.fi/static/profile-288.webp",
      ],
      sameAs: [
        "https://bsky.app/profile/did:plc:bw5mjfbdm62hve55psw3pum6",
        "https://codeberg.org/iiroj",
        "https://github.com/iiroj",
        "https://linkedin.com/in/iiroj",
        "https://www.npmjs.com/~iiroj",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "#ProfilePage",
      mainEntity: {
        "@id": "#Person",
      },
      hasPart: [],
    },
  ],
} satisfies Graph;

const Index = async () => {
  const integrity = await getIntegrity();

  return (
    <>
      <title>Iiro Jäppinen</title>

      <header>
        <Avatar />

        <div>
          <h1>Iiro Jäppinen</h1>

          <h2>
            Principal Architect at{" "}
            <a
              href="https://s-ryhma.fi/en/investors/sok-corporation"
              rel="noopener noreferrer"
              target="_blank"
              title="SOK Corporation"
            >
              SOK
            </a>
          </h2>
        </div>
      </header>

      <section>
        <h3>About</h3>
        <p>
          I’m a software engineer with roots in user interface design. I have an eye for detail and
          like to solve complex problems. I believe to create business, you need to use design as a
          plan and technology as a tool to get there. I’ve learned helping others grow in their
          career is the true force multiplier.
        </p>
        <p>
          Currently I’m helping create a unified experience for{" "}
          <a href="https://s-ryhma.fi/en" rel="noopener noreferrer" target="_blank">
            S Group
          </a>{" "}
          member-owners across all our services. Previously I was creating{" "}
          <a href="https://www.s-kaupat.fi" rel="noopener noreferrer" target="_blank">
            S-kaupat
          </a>
          , the biggest e-commerce platform for grocery in Finland. Before that, I worked at{" "}
          <a href="https://www.verkkokauppa.com" rel="noopener noreferrer" target="_blank">
            Verkkokauppa.com
          </a>
          , the largest Finnish online retailer at the time.
        </p>
      </section>

      <section>
        <h3>Links</h3>
        <Nav>
          {[
            {
              href: "https://bsky.app/profile/did:plc:bw5mjfbdm62hve55psw3pum6",
              icon: <Bluesky />,
              title: "Bluesky",
            },
            {
              href: "https://github.com/iiroj",
              icon: <GitHub />,
              title: "GitHub",
            },
            {
              href: "https://linkedin.com/in/iiroj",
              icon: <LinkedIn />,
              title: "LinkedIn",
            },
          ]}
        </Nav>
      </section>

      <section>
        <h3>Open-Source</h3>
        <Projects>
          {[
            {
              description: (
                <>
                  <a href="https://nodejs.org/en" rel="noopener noreferrer" target="_blank">
                    Node.js
                  </a>
                  -based tool to improve your{" "}
                  <a href="https://git-scm.com" rel="noopener noreferrer" target="_blank">
                    Git
                  </a>{" "}
                  workflow by running multiple linters like{" "}
                  <a href="http://eslint.org" rel="noopener noreferrer" target="_blank">
                    ESLint
                  </a>{" "}
                  or{" "}
                  <a href="https://prettier.io" rel="noopener noreferrer" target="_blank">
                    Prettier
                  </a>{" "}
                  against the files you have staged for a commit. I originally contributed
                  perfomance improvements to the project, and have been primarily maintaining it
                  since 2019.
                </>
              ),
              href: "https://www.npmjs.com/package/lint-staged",
              icon: <Npm />,
              title: "lint-staged",
            },
            {
              description: (
                <>
                  React bindings for{" "}
                  <a href="https://usercentrics.com" rel="noopener noreferrer" target="_blank">
                    Usercentrics
                  </a>
                  , a GDPR consent management platform. Created mainly for S-group website usage,
                  but published as open-source because I believe everyone has the right to privacy.
                </>
              ),
              href: "https://www.npmjs.com/package/@s-group/react-usercentrics",
              icon: <Npm />,
              title: "@s-group/react-usercentrics",
            },
          ]}
        </Projects>
      </section>

      <script defer type="module" src="/index.js" integrity={integrity.bootstrap} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </>
  );
};

export default Index;
