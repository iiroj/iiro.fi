import React from "react";
import styled from "styled-components";

import Link from "../Link";

import email from "./email.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import dribbble from "./dribbble.svg";
import github from "./github.svg";
import gitlab from "./gitlab.svg";

const links = [
  {
    href: "mailto:iiro@jappinen.fi",
    icon: email,
    title: "Email",
  },
  {
    href: "https://twitter.com/iirojappinen",
    icon: twitter,
    title: "Twitter",
  },
  {
    href: "https://fi.linkedin.com/in/iiroj",
    icon: linkedin,
    title: "Linkedin",
  },
  {
    href: "https://dribbble.com/iiroj",
    icon: dribbble,
    title: "Dribbble",
  },
  {
    href: "https://github.com/iiroj",
    icon: github,
    title: "GitHub",
  },
  {
    href: "https://gitlab.com/iiroj",
    icon: gitlab,
    title: "GitLab",
  },
];

const List = styled.ul`
  margin: 0.5rem -0.5rem;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0.5rem;

  &:first-child {
    margin-top: 0;
  }
`;

const IconLink = Link.extend`
  > svg {
    height: 1.5rem;
    margin-right: 0.25rem;
    transition: transform 125ms ease-out 250ms;
    vertical-align: -16%;
    width: 1.5rem;
  }
`;

const Links = () => (
  <List>
    {links.map(link => (
      <ListItem key={link.title}>
        <IconLink href={link.href}>
          <link.icon />
          <span>{link.title}</span>
        </IconLink>
      </ListItem>
    ))}
  </List>
);

export default Links;
