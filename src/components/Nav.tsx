import type { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";

interface Link {
  href: string;
  icon?: ReactNode;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
  title: string;
}

interface Props {
  children: Link[];
}

export const Nav: FC<Props> = ({ children }) => (
  <nav>
    <ul>
      {children.map(({ href, icon, rel, target, title }) => (
        <li key={href}>
          <a href={href} rel={rel} target={target}>
            {icon}
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
