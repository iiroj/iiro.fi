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
        Service <Amp /> UX designer, UI devsigner, all-around handyman at <FraktioLink />. React enthusiast.
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
  position: relative;

  ${hiDPI(1.5)} {
    background-image: url('/profilePicture@2x.jpg');
  }

  ${hiDPI(2)} {
    background-image: url('/profilePicture@3x.jpg');
  }

  .container {
    background: linear-gradient(180deg, hsla(190, 10%, 40%, 0) 0%, hsla(190, 10%, 40%, 0.9) 100%);
    color: hsla(0, 0%, 100%, 1);
    padding: 10rem 2rem 5rem 2rem;

    h1 {
      font-family: Georgia, serif;
      font-size: 1.5em;
      line-height: 1.5em;
      font-style: italic;
    }

    a {
      background: none;
    }

    @media (min-width: 64rem) {
      padding: 10rem 5rem 3rem 3rem;
    }
  }
`;
