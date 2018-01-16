import styled from "styled-components";

const YELLOW = `hsla(44,100%,75%,1)`;

export default styled.a`
  background-image: linear-gradient(to bottom, ${YELLOW} 0%, ${YELLOW} 100%);
  background-position: 0 1em;
  background-repeat: no-repeat;
  background-size: 100%;
  color: inherit;
  text-decoration: none;
  transition: background-position 125ms ease-out 250ms;

  &:hover {
    background-image: linear-gradient(to bottom, ${YELLOW} 0%, ${YELLOW} 100%);
    background-position: 0 0em;
    cursor: pointer;
    transition: background-position 100ms ease-out 0s;
  }

  &:active {
    color: hsla(0, 0%, 0%, 1);
  }
`;
