import { css } from "styled-components";

export const media = {
  tablet: (...args) => css`
    @media (min-width: 60rem) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 96rem) {
      ${css(...args)};
    }
  `,
};
