import type { FC } from "react";
import FooterLinks from "../components/FooterLinks.tsx";

const NotFound: FC = () => (
  <>
    <title>Page Not Found</title>
    <meta content="noarchive, noindex" name="robots" />

    <header>
      <h1>Page Not Found</h1>
      <h2>Four Zero Four</h2>
    </header>

    <FooterLinks>{[{ href: "/", title: "Back Home" }]}</FooterLinks>
  </>
);

export default NotFound;
