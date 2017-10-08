import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { hiDPI, mix } from 'polished';

import Amp from 'components/Amp';
import FraktioLink, { Logo } from 'components/FraktioLink';

const Footer = ({ className }) => (
  <footer className={className}>
    <Link className="gradient" to="/">
      <div className="container">
        <p>Iiro Jäppinen</p>
        <span>
          Service <Amp /> UX designer, UI devsigner, all-around handyman at <FraktioLink />. React enthusiast.
        </span>
      </div>
    </Link>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default styled(Footer)`
  background-image: url('/profilePicture.jpg');
  background-position: 50% 25%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;

  ${hiDPI(1.5)} {
    background-image: url('/profilePicture@2x.jpg');
  }

  ${hiDPI(2)} {
    background-image: url('/profilePicture@3x.jpg');
  }

  .gradient {
    background: none !important;
    color: hsla(0, 0%, 100%, 1);
    z-index: 1;

    &::after {
      background-color: hsla(190, 10%, 40%, 0.6);
      bottom: 0;
      content: '';
      display: block;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: background-color 125ms ease-out 250ms;
      z-index: -1;
    }

    &:hover {
      &::after {
        background-color: ${mix(0.5, 'hsla(190, 10%, 40%, 0.6)', 'hsla(44, 100%, 75%, 0.4)')};
        transition: background-color 125ms ease-out 0;
      }
    }
  }

  .container {
    margin: 0 auto;
    max-width: 64rem;
    padding: 4rem 1rem;

    p {
      font-family: Georgia, serif;
      font-size: 1.5em;
      line-height: 1.5em;
      font-style: italic;
    }

    a {
      background: none;

      &:active {
        color: inherit;
      }
    }
  }
`;
