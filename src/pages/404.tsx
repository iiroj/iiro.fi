import type { FC } from "react";

import { Nav } from "../components/Nav.tsx";

const NotFound: FC = () => (
  <>
    <title>Page Not Found</title>
    <meta content="noarchive, noindex" name="robots" />

    <header>
      <div>
        <h1>Page Not Found</h1>
        <h2>Four Zero Four</h2>
      </div>
    </header>

    <footer>
      <Nav>{[{ href: "/", title: "Back Home" }]}</Nav>
    </footer>
  </>
);

export default NotFound;
