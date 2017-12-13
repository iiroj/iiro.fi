import React from 'react';
import styled from 'styled-components';

export const FraktioLogo = styled(({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.971 1.505l-.017.003V18l2.952-5.873-1.127.187.312-.97 1.319-.22.829-1.65-1.636.273.626-1.95 2.021-.336L19 0l-.028.005a30.361 30.361 0 0 1-9.001 1.5zm-.942 0A30.361 30.361 0 0 1 .028.005L0 0l3.75 7.46 2.02.338.627 1.949-1.636-.273.83 1.65 1.318.22.312.97-1.127-.187L9.046 18V1.508l-.017-.003z" />
  </svg>
))`
  display: inline-block;
  height: 18px;
  margin-right: 2px;
  position: relative;
  viewbox: 0 0 19 18;
  vertical-align: -20%;
  width: 19px;

  path {
    fill: hsla(0, 0%, 100%, 1);
  }
`;

export const FraktioText = styled.span`
  font-family: Georgia, serif;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
`;

const FraktioLink = () => (
  <a href="https://fraktio.fi" target="_blank" rel="noopener noreferrer">
    <FraktioLogo />
    <FraktioText>fraktio</FraktioText>
  </a>
);

export default FraktioLink;
