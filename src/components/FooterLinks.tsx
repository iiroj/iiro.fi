import React, { type FC, type HTMLAttributeAnchorTarget } from "react";

type Link = {
  href: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
  title: string;
};

type Props = {
  children: Link[];
};

export const FooterLinks: FC<Props> = ({ children }) => (
  <footer>
    <nav>
      <ul>
        {children.map(({ href, rel, target, title }, index) => (
          <li key={index}>
            <a href={href} rel={rel} target={target}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default FooterLinks;
