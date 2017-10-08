import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderArea = ({ children, className }) => <div className={className}>{children}</div>;

HeaderArea.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default styled(HeaderArea)`
  background: hsla(0, 0%, 95%, 1);
  display: flex;
  flex-direction: column;
  position: relative;
`;
