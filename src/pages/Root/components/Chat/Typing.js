import React from 'react';
import { css, keyframes } from 'emotion';

const jump = keyframes({
  from: { transform: 'translateY(-50%)' },
  to: { transform: 'translateY(50%)' }
});

const ball1 = css({
  animation: `${jump} 500ms ease-in-out forwards alternate infinite`,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '50%',
  display: 'block',
  height: '0.5rem',
  position: 'absolute',
  transform: 'translateY(-50%)',
  width: '0.5rem'
});

const ball2 = css(ball1, {
  animationDelay: '100ms',
  left: '1rem'
});

const ball3 = css(ball1, {
  animationDelay: '200ms',
  left: '2rem'
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});

const typing = css({
  animation: `${fadeIn} 125ms ease-in-out`,
  display: 'block',
  height: '0.5rem',
  position: 'relative',
  width: '2.5rem'
});

export default () => (
  <i className={typing} aria-live="polite">
    <div className={ball1} i={0} />
    <div className={ball2} i={1} />
    <div className={ball3} i={2} />
  </i>
);
