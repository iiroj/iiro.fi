import type { CSSObject } from 'styled-components'

import { breakpoints } from './breakpoints'

/**
 * Creates a CSS media query target for supplied styles
 * @param minWidth minimun width for the media query target
 * @param maxWidth optional maximum width for the media query target
 * @param styles Supplied object interpolation styles
 */
const createQuery =
    (minWidth?: number, maxWidth?: number) =>
    (styles: CSSObject): CSSObject => {
        let query = '@media ('
        if (minWidth && !maxWidth) query += `min-width: ${minWidth}px`
        if (minWidth && maxWidth) query += ' and '
        if (maxWidth) query += `max-width: ${minWidth}px`
        query += ')'
        return { [query]: styles }
    }

type Media = {
    -readonly [Key in keyof typeof breakpoints]: ReturnType<typeof createQuery> // eslint-disable-line no-unused-vars
}

type BreakpointName = keyof Media

/**
 * Media query targets for specified screen types
 */
export const media = Object.entries(breakpoints).reduce((accumulator, [breakpoint, minWidth], index, breakpoints) => {
    const maxWidth = breakpoints[index + 1]
    accumulator[breakpoint as BreakpointName] = createQuery(minWidth, maxWidth && maxWidth[1])
    return accumulator
}, {} as Media)

/**
 * Media query targets for sizes above the specified screen type
 */
export const minWidth = Object.entries(breakpoints).reduce((accumulator, [breakpoint, minWidth]) => {
    accumulator[breakpoint as BreakpointName] = createQuery(minWidth)
    return accumulator
}, {} as Media)

/**
 * Media query targets for sizes below the specified screen type
 */
export const maxWidth = Object.entries(breakpoints).reduce((accumulator, [breakpoint, maxWidth]) => {
    accumulator[breakpoint as BreakpointName] = createQuery(undefined, maxWidth)
    return accumulator
}, {} as Media)
