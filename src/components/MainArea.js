import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainArea = ({ children, className }) => <div className={className}>{children}</div>;

MainArea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  className: PropTypes.string,
};

export default styled(MainArea)`
  background-color: hsla(0, 0%, 100%, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 64rem) {
    padding: 4rem;
  }
`;
