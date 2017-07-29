import React from "react";
import styled from "styled-components";

const Ampersand = styled.span`
  font-family: 'Baskerville', 'Goudy Old Style', 'Palatino', 'Book Antiqua',
    serif;
  font-style: italic;
`;

export const Amp = () => <Ampersand>&</Ampersand>;
