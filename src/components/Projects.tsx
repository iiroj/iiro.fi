import type { FC, ReactNode } from "react";

interface Project {
  description: ReactNode;
  href: string;
  icon: ReactNode;
  title: string;
}

export const Projects: FC<{
  children: Project[];
}> = ({ children }) => (
  <ul>
    {children.map(({ description, href, icon, title }) => (
      <li key={title}>
        <article className="oss">
          <header>
            <a href={href} rel="noopener" target="_blank">
              <h4>
                {icon}
                <code>{title}</code>
              </h4>
            </a>
          </header>
          <main>{description}</main>
        </article>
      </li>
    ))}
  </ul>
);
