import type { ReactNode } from "react";

interface Project {
  description: ReactNode;
  href: string;
  icon: ReactNode;
  title: string;
}

export const Projects = ({ children }: { children: Project[] }) => (
  <ul>
    {children.map(({ description, href, icon, title }) => (
      <li key={title}>
        <article>
          <header>
            <a href={href} rel="noopener noreferrer" target="_blank">
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
