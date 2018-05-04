import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Perspective = styled.div.attrs({
  role: "image",
})`
  perspective: 50cm;
  perspective-origin: center center;
  position: relative;
`;

const Transformer = styled.div`
  background-image: url("/static/picture.jpg");
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
    content: "";
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
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      js: false,
    };
  }

  updateTilt = (x, y) => {
    const { height, width } = this.ref.getBoundingClientRect();
    const rotateX = (height / 2 - y) * (45 / height);
    const rotateY = (width / 2 - x) * (45 / width) * -1;

    this.ref.setAttribute(
      "style",
      `--tilt: rotateX(${rotateX}deg) rotateY(${rotateY}deg); --shadow: ${rotateY * -1}px ${rotateX}px; --glare: ${50 -
        100 * x / width}%, ${50 - 100 * y / height}%;`,
    );
  };

  resetTilt = () => this.ref.removeAttribute("style");

  handleMouseMove = ({ layerX, layerY }) => this.updateTilt(layerX, layerY);

  handleTouchMove = event => {
    const { changedTouches, target, touches } = event;
    if (target === this.ref) {
      event.preventDefault();
      const { pageX, pageY } = touches[0] || changedTouches[0];
      const { left, top } = this.ref.getBoundingClientRect();
      this.updateTilt(pageX - left, pageY - top);
    } else {
      this.resetTilt();
    }
  };

  componentDidMount() {
    this.setState({ js: true });
    this.ref.addEventListener("mousemove", this.handleMouseMove);
    this.ref.addEventListener("mouseleave", this.resetTilt);
    if ("ontouchmove" in document.documentElement) {
      document.addEventListener("touchmove", this.handleTouchMove);
    }
  }

  componentWillUnmount() {
    this.ref.removeEventListener("mousemove", this.handleMouseMove);
    this.ref.removeEventListener("mouseleave", this.resetTilt);
    if ("ontouchmove" in document.documentElement) {
      document.removeEventListener("touchmove", this.handleTouchMove);
    }
  }

  render = () => (
    <Perspective className={this.props.className}>
      <Transformer innerRef={r => (this.ref = r)} js={this.state.js} />
    </Perspective>
  );
}

export default styled(Picture)``;
