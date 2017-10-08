import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hiDPI } from 'polished';

import Amp from './Amp';
import FraktioLink, { Logo } from './FraktioLink';

const Header = ({ className }) => (
  <header className={className}>
    <div className="container">
      <h1>Iiro Jäppinen</h1>
      <h2>
        UX <Amp /> UI Designer at <FraktioLink />
      </h2>
    </div>
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
};

export default styled(Header)`
  background-image: url('/profilePicture.jpg');
  background-position: 55% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  padding: 0 0 2rem 0;

  ${hiDPI(1.5)} {
    background-image: url('/profilePicture@2x.jpg');
  }

  ${hiDPI(2)} {
    background-image: url('/profilePicture@3x.jpg');
  }

  .container {
    color: hsla(0, 0%, 100%, 1);
    margin: 1rem;
    text-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.6);

    a {
      background: none;
    }

    ${Logo} path {
      fill: hsla(0, 0%, 100%, 1);
    }
  }

  @media (min-width: 64rem) {
    padding: 0 4rem 0 0;

    .container {
      margin: 2rem;
    }
  }
`;
