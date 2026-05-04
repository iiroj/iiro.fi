import path from "path";

import { Avatar } from "../components/Avatar.tsx";
import { Bluesky } from "../components/Bluesky.tsx";
import { Codeberg } from "../components/Codeberg.tsx";
import { GitHub } from "../components/GitHub.tsx";
import { LinkedIn } from "../components/LinkedIn.tsx";
import { Nav } from "../components/Nav.tsx";
import { Npm } from "../components/Npm.tsx";
import { Projects } from "../components/Projects.tsx";

const Index = async () => {
  const bootstrap = Bun.file(path.resolve(import.meta.dirname, "../../public/index.js"));
  const integrity = new Bun.CryptoHasher("sha256").update(await bootstrap.text()).digest("base64");

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
              href: "https://bsky.app/profile/iiro.fi",
              icon: <Bluesky />,
              title: "Bluesky",
            },
            {
              href: "https://codeberg.org/iiroj",
              icon: <Codeberg />,
              title: "Codeberg",
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

      <script defer type="module" src="/index.js" integrity={integrity} />
    </>
  );
};

export default Index;
