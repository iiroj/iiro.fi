import React from 'react';
import styled from 'styled-components';

const links = [
  {
    href: 'mailto:iiro@jappinen.fi',
    icon: 'e.svg',
    title: 'Email',
  },
  {
    href: 'https://twitter.com/iirojappinen',
    icon: 't.svg',
    title: 'Twitter',
  },
  {
    href: 'https://fi.linkedin.com/in/iiroj',
    icon: 'l.svg',
    title: 'Linkedin',
  },
  {
    href: 'https://dribbble.com/iiroj',
    icon: 'd.svg',
    title: 'Dribbble',
  },
  {
    href: 'https://github.com/iiroj',
    icon: 'gh.svg',
    title: 'GitHub',
  },
  {
    href: 'https://gitlab.com/iiroj',
    icon: 'gl.svg',
    title: 'GitLab',
  },
];

const ListItem = styled.li`
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

const Link = styled.a`
  background: none !important;
  display: inline-block;
  margin-top: 1rem;

  > img {
    height: 24px;
    margin-right: 1rem;
    transition: transform 125ms ease-out 250ms;
    vertical-align: -20%;
    width: 24px;
  }

  &:hover > img {
    transform: scale(1.2);
    transition: transform 100ms ease-out 0s;
  }

  &:active > img {
    transform: scale(1);
  }
`;

const Links = () =>
  links.map(link => (
    <ListItem key={link.title}>
      <Link href={link.href}>
        <img src={link.icon} alt={`${link.title} icon`} />
        <span>{link.title}</span>
      </Link>
    </ListItem>
  ));

export default Links;
