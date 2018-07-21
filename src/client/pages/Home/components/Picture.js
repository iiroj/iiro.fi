import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion';

const perspectiveStyles = css`
  perspective: 50cm;
  perspective-origin: center center;
  position: relative;
`;

const Transformer = styled.div`
  background-image: url('/picture.jpg');
  background-position: 50%;
  background-size: cover;
  border-radius: 0.5rem;
  box-shadow: var(--shadow, 0px 12px) 4rem rgba(0, 0, 0, 0.16);
  height: 100%;
  position: absolute;
  touch-action: none;
  transition: box-shadow 125ms linear 125ms, transform 125ms linear 125ms;
  transform: var(--tilt, rotateX(0deg) rotateY(0deg));
  width: 100%;

  &::before {
    background: radial-gradient(closest-side, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform: translate(var(--glare, 50% 50%));
    transition: opacity 125ms linear 125ms, transform 125ms linear 125ms;
    width: 100%;
  }

  &:hover {
    transition: none;

    &::before {
      opacity: ${({ js }) => (js ? 0.4 : 0)};
      transition: none;
    }
  }
`;

class Picture extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      js: false
    };

    this.ref = createRef();
  }

  updateTilt = (x, y) => {
    const { height, width } = this.ref.current.getBoundingClientRect();
    const rotateX = (height / 2 - y) * (45 / height);
    const rotateY = (width / 2 - x) * (45 / width) * -1;

    this.ref.current.setAttribute(
      'style',
      `--tilt: rotateX(${rotateX}deg) rotateY(${rotateY}deg); --shadow: ${rotateY * -1}px ${rotateX}px; --glare: ${50 -
        (100 * x) / width}%, ${50 - (100 * y) / height}%;`
    );
  };

  resetTilt = () => this.ref.current.removeAttribute('style');

  handleMouseMove = ({ layerX, layerY }) => this.updateTilt(layerX, layerY);

  handleTouchMove = event => {
    const { changedTouches, target, touches } = event;
    if (target === this.ref.current) {
      event.preventDefault();
      const { pageX, pageY } = touches[0] || changedTouches[0];
      const { left, top } = this.ref.current.getBoundingClientRect();
      this.updateTilt(pageX - left, pageY - top);
    } else {
      this.resetTilt();
    }
  };

  componentDidMount() {
    this.setState({ js: true });
    this.ref.current.addEventListener('mousemove', this.handleMouseMove);
    this.ref.current.addEventListener('mouseleave', this.resetTilt);
    if ('ontouchmove' in document.documentElement) {
      document.addEventListener('touchmove', this.handleTouchMove);
    }
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener('mousemove', this.handleMouseMove);
    this.ref.current.removeEventListener('mouseleave', this.resetTilt);
    if ('ontouchmove' in document.documentElement) {
      document.removeEventListener('touchmove', this.handleTouchMove);
    }
  }

  render = () => (
    <div className={cx(perspectiveStyles, this.props.className)}>
      <Transformer innerRef={this.ref} js={this.state.js} />
    </div>
  );
}

const pictureStyles = css`
  flex: 0 1 20rem;
  height: 32rem;
`;

export default styled(Picture)(pictureStyles);
