import React from "react";
import styled from "styled-components";

const Article = styled.article`
  background-color: #3b3e48;
  padding: 4rem 1rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 4rem;
  max-height: 64px;
  max-width: 100%;
`;

const Text = styled.p`
  color: white;
  margin: 0 auto 0.5rem;
  max-width: 480px;

  a {
    background: none;
    color: inherit;
    text-decoration: underline;
  }
`;

export const HumbleBundle = () => (
  <Article>
    <Logo
      src="/static/portfolio/humble/humble-logo.png"
      srcSet="/static/portfolio/humble/humble-logo.png 1x, /static/portfolio/humble/humble-logo@2x.png 2x, /static/portfolio/humble/humble-logo@3x.png 3x"
    />
    <Text>
      I designed the first{" "}
      <a href="https://www.humblebundle.com" target="_blank" rel="noopener noreferrer">
        Humble Bundle
      </a>{" "}
      website and many after that. I worked with Humble from its inception in 2011 until summer 2014.
    </Text>
    <Text>
      People often follow up with whether or not I also created the beautiful icons representing bundled games. I did
      not.
    </Text>
  </Article>
);
