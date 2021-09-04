import { breakpoints } from '../design/breakpoints'

export const minWidth = {
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
} as const
