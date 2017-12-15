import { css } from "styled-components";

const syntax = css`
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

  .gatsby-highlight .token {
    &.block-comment,
    &.cdata,
    &.comment,
    &.doctype,
    &.prolog,
    &.punctuation {
      color: rgb(56, 58, 66);
    }

    &.boolean,
    &.constant,
    &.deleted,
    &.function-name,
    &.number,
    &.property,
    &.symbol,
    &.tag {
      color: rgb(152, 104, 1);
    }

    &.attr-name,
    &.builtin,
    &.char,
    &.inserted,
    &.selector,
    &.string {
      color: rgb(152, 104, 1);
    }

    &.operator {
      color: rgb(1, 132, 188);
    }

    &.entity,
    &.url {
      color: #9b59b6;
    }

    &.delimiter {
      color: #9d2760;
    }

    &.keyword {
      color: rgb(166, 38, 164);
    }

    &.function {
      color: rgb(64, 120, 242);
    }

    &.variable {
      color: rgb(228, 86, 73);
    }

    &.atrule,
    &.attr-value {
      color: rgb(166, 38, 164);
    }

    &.class-name {
      color: #50525e;
    }

    &.important,
    &.regex {
      color: #e09000;
    }

    &.cr:before,
    &.lf:before,
    &.string,
    &.tab:not(:empty):before {
      color: #7d8b99;
    }

    &.important {
      font-weight: 400;
    }

    &.bold {
      font-weight: 700;
    }

    &.italic {
      font-style: italic;
    }

    &.entity {
      cursor: help;
    }
  }

  .gatsby-highlight .namespace {
    opacity: 0.7;
  }
`;

export default syntax;
