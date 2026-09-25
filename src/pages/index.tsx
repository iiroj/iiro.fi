import type { Graph } from "schema-dts";

import { Avatar } from "../components/Avatar.tsx";
import { GitHub } from "../components/GitHub.tsx";
import { LinkedIn } from "../components/LinkedIn.tsx";
import { Npm } from "../components/Npm.tsx";

const LINKEDIN_URL = "https://linkedin.com/in/iiroj";
const GITHUB_URL = "https://github.com/iiroj";
const NPM_URL = "https://www.npmjs.com/~iiroj";

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
      sameAs: [LINKEDIN_URL, GITHUB_URL, NPM_URL],
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

const Index = () => {
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

          <nav>
            <ul>
              <li>
                <a href={LINKEDIN_URL} rel="author noreferrer" target="_blank">
                  <LinkedIn />
                  <span> LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={GITHUB_URL} rel="author noreferrer" target="_blank">
                  <GitHub />
                  <span> GitHub</span>
                </a>
              </li>
              <li>
                <a href={NPM_URL} rel="author noreferrer" target="_blank">
                  <Npm />
                  <span> npm</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </>
  );
};

export default Index;
