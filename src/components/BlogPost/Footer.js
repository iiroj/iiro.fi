import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "styled-components";
import { hiDPI, mix } from "polished";

import Amp from "components/Amp";
import { FraktioLogo, FraktioText } from "components/FraktioLink";
import { background } from "components/Header";

const Footer = styled.footer`
  ${background};

  background-position: 50% 25%;
`;

const Gradient = styled(Link)`
  background: none !important;
  color: hsla(0, 0%, 100%, 1) !important;
  z-index: 1;

  &::after {
    background-color: hsla(190, 10%, 40%, 0.6);
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-color 125ms ease-out 250ms;
    z-index: -1;
  }

  &:hover {
    &::after {
      background-color: ${mix(0.5, "hsla(190, 10%, 40%, 0.6)", "hsla(44, 100%, 75%, 0.4)")};
      transition: background-color 125ms ease-out 0;
    }
  }
`;

const Container = styled.div`
  font-weight: 500;
  margin: 0 auto;
  max-width: 64rem;
  padding: 4rem 1rem;

  p {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
`;

const FooterComponent = () => (
  <Footer>
    <Gradient to="/">
      <Container>
        <p>Iiro Jäppinen</p>
        <span>
          Service <Amp /> UX designer, UI devsigner, all-around handyman at <FraktioLogo />
          <FraktioText>fraktio</FraktioText>. React enthusiast.
        </span>
      </Container>
    </Gradient>
  </Footer>
);

export default FooterComponent;
