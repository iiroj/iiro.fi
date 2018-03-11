import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { hiDPI } from "polished";

const Perspective = styled.div.attrs({
  role: "image",
})`
  perspective: 9001px;
  perspective-origin: center center;
  position: relative;
`;

const Transformer = styled.div`
  background-image: url("/static/picture.jpg");
  background-position: 55% 50%;
  background-size: cover;
  border-radius: 0.5rem;
  box-shadow: var(--shadow, 0px 12px) 4rem rgba(0, 0, 0, 0.16);
  height: 100%;
  position: absolute;
  touch-action: none;
  transition: box-shadow 125ms linear 125ms, transform 125ms linear 125ms;
  transform: var(--tilt, rotateX(0deg) rotateY(0deg));
  width: 100%;

  ${hiDPI(1.5)} {
    background-image: url("/static/picture@2x.jpg");
  }

  ${hiDPI(2)} {
    background-image: url("/static/picture@3x.jpg");
  }

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

    this.ref.style.setProperty("--tilt", `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    this.ref.style.setProperty("--shadow", `${rotateY * -1}px ${rotateX}px`);
    this.ref.style.setProperty("--glare", `${50 - 100 * x / width}%, ${50 - 100 * y / height}%`);
  };

  resetTilt() {
    this.ref.style.removeProperty("--tilt");
    this.ref.style.removeProperty("--shadow");
    this.ref.style.removeProperty("--glare");
  }

  trackMouse = event => {
    const { layerX, layerY, target } = event;

    if (target === this.ref) {
      this.updateTilt(layerX, layerY);
    } else {
      this.resetTilt();
    }
  };

  trackTouch = event => {
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
    document.addEventListener("mousemove", this.trackMouse);
    document.addEventListener("touchmove", this.trackTouch);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.trackMouse);
    document.removeEventListener("touchmove", this.trackTouch);
  }

  render = () => (
    <Perspective className={this.props.className}>
      <Transformer innerRef={r => (this.ref = r)} js={this.state.js} />
    </Perspective>
  );
}

export default styled(Picture)``;
