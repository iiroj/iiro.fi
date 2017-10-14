import { css } from 'styled-components';

const syntax = css`
  .gatsby-highlight .token {
    &.block-comment,
    &.cdata,
    &.comment,
    &.doctype,
    &.prolog,
    &.punctuation {
      color: #7d8b99;
    }

    &.boolean,
    &.constant,
    &.deleted,
    &.function-name,
    &.number,
    &.property,
    &.symbol,
    &.tag {
      color: #c92c2c;
    }

    &.attr-name,
    &.builtin,
    &.char,
    &.inserted,
    &.selector,
    &.string {
      color: #2f9c0a;
    }

    &.operator {
      color: #7d8b99;
    }

    &.entity,
    &.url {
      color: #9b59b6;
    }

    &.delimiter {
      color: #9d2760;
    }

    &.keyword {
      color: #1990b8;
    }

    &.function,
    &.variable {
      color: #c92c2c;
    }

    &.atrule,
    &.attr-value {
      color: #1990b8;
    }

    &.class-name {
      color: #50525e;
    }

    &.important,
    &.regex {
      color: #e09000;
    }

    &.language-css .string {
      color: #a67f59;
    }

    &.language-css .function {
      color: #9b59b6;
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
