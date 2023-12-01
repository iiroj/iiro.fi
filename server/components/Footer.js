import React from "react";

/** @typedef {{ href: string, rel?: string; target?: string; text: string }} LinkProp */

/** @param ({ links: LinkProp[] }) */
const Footer = ({ links }) => {
  return (
    <footer>
      <nav>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} rel={link.rel} target={link.target}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
