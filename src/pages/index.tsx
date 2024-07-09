import React, { type FunctionComponent } from "react";

export const Head: FunctionComponent<{}> = async () => (
  <>
    <title>Iiro Jäppinen</title>
  </>
);

export const Body: FunctionComponent<{}> = async () => (
  <>
    <header>
      <picture>
        <img
          alt="Iiro Jäppinen"
          decoding="async"
          height="96px"
          loading="eager"
          srcSet="/static/profile-96.jpg  1x, /static/profile-192.jpg 2x, /static/profile-288.jpg 3x"
          src="/static/profile-96.jpg"
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

    <footer>
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/iiroj"
              rel="author noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/iiroj"
              rel="author noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </>
);
