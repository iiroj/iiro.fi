import styled from 'styled-components';

import { default as syntax } from 'styles/syntax.css';
import Iosevka from 'styles/Iosevka';

const Body = styled.article`
  box-sizing: border-box;
  line-height: 1.5em;
  margin: 0 auto;
  max-width: 64rem;
  padding: 2rem 1rem 4rem 1rem;
  position: relative;

  span.gatsby-resp-image-wrapper {
    background: none;
    margin: 2rem -1rem;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.2em;
    line-height: 1.5em;
  }

  p {
    margin-bottom: 0.5rem;
  }

  s {
    color: hsl(0, 0%, 60%);
    text-decoration: line-through;
  }

  ul ol {
    list-style-type: square;
    margin: 0 -0.5rem 0.5rem -0.5rem;
    padding: 0 1rem;
  }

  ol {
    list-style-type: decimal;
  }

  hr {
    border: none;
    box-shadow: 0 1px 0 hsla(0, 0%, 0%, 0.1);
    height: 1px;
    margin: 4rem auto;
    width: 50%;
  }

  blockquote {
    box-shadow: inset 2px 0 0 hsla(0, 0%, 0%, 0.1);
    color: hsla(0, 0%, 60%, 1);
    margin: 0 -0.5rem;
    padding: 0 1rem;

    cite {
      color: rgb(142, 142, 142);
      display: block;
    }
  }

  ${Iosevka};

  code {
    background-color: hsla(0, 64%, 95%, 1);
    color: hsla(0, 64%, 48%, 1);
    font-family: Iosevka, monospace;
    font-weight: 400;
    padding: 0 0.25rem;
  }

  pre {
    background-color: #f5f5f8;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.08);
    margin: 2rem -1rem;
    overflow-x: scroll;
    padding: 1rem 1.5rem;

    code {
      background-color: #f5f5f8;
      color: #50525e;
      padding: 0;
    }
  }

  ${syntax};
`;

export default Body;
