import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import A from '../A';

import email from './email.svg';
import twitter from './twitter.svg';
import linkedin from './linkedin.svg';
import portfolio from './portfolio.svg';
import gitlab from './gitlab.svg';
import github from './github.svg';

const links = [
  {
    href: 'mailto:iiro@jappinen.fi',
    Icon: email,
    title: 'Email'
  },
  {
    href: 'https://twitter.com/iirojappinen',
    Icon: twitter,
    title: 'Twitter'
  },
  {
    href: 'https://fi.linkedin.com/in/iiroj',
    Icon: linkedin,
    title: 'Linkedin'
  },
  {
    href: '/portfolio',
    Icon: portfolio,
    title: 'Portfolio'
  },
  {
    href: 'https://gitlab.com/iiroj',
    Icon: gitlab,
    title: 'GitLab'
  },
  {
    href: 'https://github.com/iiroj',
    Icon: github,
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
    {links.map(({ title, href, Icon }) => (
      <li key={title} className={listItem}>
        <A
          className={iconLink}
          href={href}
          rel={title !== 'Portfolio' ? 'noopener noreferrer' : undefined}
          target={title !== 'Portfolio' ? '_blank' : undefined}
        >
          <Icon />
          <span>{title}</span>
        </A>
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
  max-width: 30rem;
`;
