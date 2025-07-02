import React, { type FC, type HTMLAttributeAnchorTarget } from "react";

type Link = {
  href: string;
  icon?: string;
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
        {children.map(({ href, icon, rel, target, title }, index) => (
          <li key={index}>
            <a href={href} rel={rel} target={target}>
              {icon ? (
                <img
                  alt=""
                  src={icon}
                  height={20}
                  width={20}
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default FooterLinks;
