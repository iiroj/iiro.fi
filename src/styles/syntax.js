import { css } from "styled-components";
import atomOneLight from "highlight.js/styles/atom-one-light.css";

const syntax = css`
  ${atomOneLight};

  .hljs {
    padding: 0;
  }

  code {
    background-color: rgba(228, 86, 73, 0.1);
    color: rgb(228, 86, 73);
    font-family: Iosevka, monospace;
    font-weight: 400;
    padding: 0 0.25rem;
  }

  pre {
    background-color: rgb(250, 250, 250);
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.08);
    margin: 2rem -1rem;
    overflow-x: scroll;
    padding: 1rem 1.5rem;

    code {
      background-color: inherit;
      color: rgb(56, 58, 66);
      padding: 0;
    }

    @media (min-width: 64rem) {
      border-radius: 2px;
    }
  }
`;

export default syntax;
