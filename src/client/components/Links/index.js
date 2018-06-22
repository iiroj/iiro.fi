import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Link from '../Link';

import email from './email.svg';
import twitter from './twitter.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';

const links = [
  {
    href: 'mailto:iiro@jappinen.fi',
    icon: email,
    title: 'Email'
  },
  {
    href: 'https://twitter.com/iirojappinen',
    icon: twitter,
    title: 'Twitter'
  },
  {
    href: 'https://fi.linkedin.com/in/iiroj',
    icon: linkedin,
    title: 'Linkedin'
  },
  {
    href: 'https://github.com/iiroj',
    icon: github,
    title: 'GitHub'
  }
];

const listItem = css`
  margin: 0.5rem 1rem;
`;

const iconLink = css`
  > svg {
    height: 1.5rem;
    margin-right: 0.25rem;
    transition: transform 125ms ease-out 250ms;
    vertical-align: -16%;
    width: 1.5rem;
  }
`;

const Links = ({ className }) => (
  <ul className={className}>
    {links.map(link => (
      <li key={link.title} className={listItem}>
        <Link className={iconLink} href={link.href}>
          <link.icon />
          <span>{link.title}</span>
        </Link>
      </li>
    ))}
  </ul>
);

Links.propTypes = {
  className: PropTypes.string
};

export default styled(Links)`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;
