import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hiDPI } from 'polished';

const Header = ({ className }) => <header className={className}>test</header>;

Header.propTypes = {
  className: PropTypes.string,
};

export default styled(Header)`
  background-image: url('/profilePicture.jpg');
  background-position: 55% 50%;
  background-size: cover;
  flex-grow: 1;

  ${hiDPI(1.5)} {
    background-image: url('/profilePicture@2x.jpg');
  }

  ${hiDPI(2)} {
    background-image: url('/profilePicture@3x.jpg');
  }
`;
