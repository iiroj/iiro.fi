import type { FC, ReactNode } from "react";

interface Link {
  href: string;
  icon?: ReactNode;
  title: string;
}

interface Props {
  children: Link[];
}

export const Nav: FC<Props> = ({ children }) => (
  <nav>
    <ul>
      {children.map(({ href, icon, title }) => (
        <li key={href}>
          <a
            href={href}
            rel={href.startsWith("/") ? undefined : "author noopener"}
            target={href.startsWith("/") ? undefined : "_blank"}
          >
            {icon}
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
