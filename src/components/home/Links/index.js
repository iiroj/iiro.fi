import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import A from '../A';

import Email from './icons/Email';
import Twitter from './icons/Twitter';
import Linkedin from './icons/Linkedin';
import Portfolio from './icons/Portfolio';
import GitLab from './icons/GitLab';
import GitHub from './icons/GitHub';

const links = [
  {
    to: 'mailto:iiro@jappinen.fi',
    Icon: Email,
    title: 'Email'
  },
  {
    to: 'https://twitter.com/iirojappinen',
    Icon: Twitter,
    title: 'Twitter'
  },
  {
    to: 'https://fi.linkedin.com/in/iiroj',
    Icon: Linkedin,
    title: 'Linkedin'
  },
  {
    to: '/portfolio',
    Icon: Portfolio,
    title: 'Portfolio'
  },
  {
    to: 'https://gitlab.com/iiroj',
    Icon: GitLab,
    title: 'GitLab'
  },
  {
    to: 'https://github.com/iiroj',
    Icon: GitHub,
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
    {links.map(({ title, to, Icon }) => (
      <li key={title} className={listItem}>
        <A
          className={iconLink}
          to={to}
          rel={title !== 'Portfolio' ? 'noopener noreferrer' : undefined}
          target={title !== 'Portfolio' ? '_blank' : undefined}
        >
          <Icon alt={title} />
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
