import React from "react";
import styled from "styled-components";

import { default as humble1x } from "./humble-logo.png";
import { default as humble2x } from "./humble-logo@2x.png";
import { default as humble3x } from "./humble-logo@3x.png";

export const HumbleBundle = () => {
  const Article = styled.article`
    align-items: center;
    background-color: #3b3e48;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 1rem;
  `;
  const Logo = styled.img`
    margin-bottom: 2rem;
    max-height: 64px;
    max-width: 100%;
  `;
  const Text = styled.p`
    color: white;
    margin: 0 auto 0.5rem;
    max-width: 480px;

    a {
      background: none;
      text-decoration: underline;
    }
  `;

  return (
    <Article>
      <Logo
        src={humble1x}
        srcSet={`${humble1x} 1x, ${humble2x} 2x, ${humble3x} 3x`}
      />
      <Text>
        I designed the first{" "}
        <a href="https://www.humblebundle.com" target="_blank">
          Humble Bundle
        </a>{" "}
        website and many after that. I worked with Humble from its inception in
        2011 until summer 2014.
      </Text>
      <Text>
        People often follow up with whether or not I also created the beautiful
        icons representing bundled games. I did not.
      </Text>
    </Article>
  );
};
