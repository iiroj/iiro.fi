import React, { type FunctionComponent } from "react";

export const Head: FunctionComponent<{}> = async () => (
  <>
    <title>Page Not Found</title>
    <meta name="robots" content="noarchive, noindex" />
  </>
);

export const Body: FunctionComponent<{}> = async () => (
  <>
    <h1>Body Not Found</h1>

    <h2>Four Zero Four</h2>

    <footer>
      <nav>
        <ul>
          <li>
            <a href="/">Back Home</a>
          </li>
        </ul>
      </nav>
    </footer>
  </>
);
