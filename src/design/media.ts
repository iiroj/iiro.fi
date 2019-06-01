/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

import { ObjectInterpolation } from "@emotion/core";

import { breakpoints } from "./breakpoints";

/**
 * Creates a CSS media query target for supplied styles
 * @param minWidth minimun width for the media query target
 * @param maxWidth optional maximum width for the media query target
 * @param styles Supplied object interpolation styles
 */
const createQuery = <MP = undefined>(minWidth?: number, maxWidth?: number) => (
  styles: ObjectInterpolation<MP>
) => {
  let query = "@media (";

  if (minWidth && !maxWidth) query += `min-width: ${minWidth}px`;
  if (minWidth && maxWidth) query += " and ";
  if (maxWidth) query += `max-width: ${minWidth}px`;

  query += ")";

  return {
    [query]: styles
  };
};

interface MediaGeneric {
  [size: string]: ReturnType<typeof createQuery>;
}

type Media = {
  [size in keyof typeof breakpoints]: ReturnType<typeof createQuery>
};

/**
 * Media query targets for specified screen types
 */
export const media = Object.entries(breakpoints).reduce<Media>(
  (accumulator, [breakpoint, minWidth], index, breakpoints) => {
    const maxWidth: [string, number] | undefined = breakpoints[index + 1];
    (accumulator as MediaGeneric)[breakpoint] = createQuery(
      minWidth,
      maxWidth && maxWidth[1]
    );
    return accumulator;
  },
  {} as Media
);

/**
 * Media query targets for sizes above the specified screen type
 */
export const minWidth = Object.entries(breakpoints).reduce<Media>(
  (accumulator, [breakpoint, minWidth]) => {
    (accumulator as MediaGeneric)[breakpoint] = createQuery(minWidth);
    return accumulator;
  },
  {} as Media
);

/**
 * Media query targets for sizes below the specified screen type
 */
export const maxWidth = Object.entries(breakpoints).reduce<Media>(
  (accumulator, [breakpoint, maxWidth]) => {
    (accumulator as MediaGeneric)[breakpoint] = createQuery(
      undefined,
      maxWidth
    );
    return accumulator;
  },
  {} as Media
);
