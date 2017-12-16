import React from 'react';
import styled from 'styled-components';

import email from './email.svg';
import twitter from './twitter.svg';
import linkedin from './linkedin.svg';
import dribbble from './dribbble.svg';
import github from './github.svg';
import gitlab from './gitlab.svg';

const links = [
  {
    href: 'mailto:iiro@jappinen.fi',
    icon: email,
    title: 'Email',
  },
  {
    href: 'https://twitter.com/iirojappinen',
    icon: twitter,
    title: 'Twitter',
  },
  {
    href: 'https://fi.linkedin.com/in/iiroj',
    icon: linkedin,
    title: 'Linkedin',
  },
  {
    href: 'https://dribbble.com/iiroj',
    icon: dribbble,
    title: 'Dribbble',
  },
  {
    href: 'https://github.com/iiroj',
    icon: github,
    title: 'GitHub',
  },
  {
    href: 'https://gitlab.com/iiroj',
    icon: gitlab,
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
    vertical-align: -33%;
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
