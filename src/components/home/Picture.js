import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import posed from 'react-pose';

const Posed = posed.div({
  idle: { borderRadius: 50, scale: 1 },
  hovering: { borderRadius: 0, scale: 4 }
});

class Picture extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  state = {
    hovering: false
  };

  handleHover = () => this.setState({ hovering: !this.state.hovering });

  render = () => (
    <Posed
      className={this.props.className}
      onMouseEnter={this.handleHover}
      onMouseLeave={this.handleHover}
      pose={this.state.hovering ? 'hovering' : 'idle'}
    />
  );
}

export default styled(Picture)`
  flex: 0 0 5rem;
  height: 5rem;
  background-image: url('/picture.jpg');
  background-size: cover;
  position: relative;
  transform-origin: bottom left;
  z-index: 2;
`;
