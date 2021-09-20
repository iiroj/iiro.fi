import { style } from '@vanilla-extract/css'

import { breakpoint } from '../design/breakpoint.css'
import { spacing } from '../design/spacing.css'
import { ratio } from './scale.css'

export const h1 = style({
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: -2,
    lineHeight: ratio,
    margin: `0 0 ${spacing.tiny} 0`,

    ...breakpoint({
        tablet: {
            fontSize: 48,
            marginBottom: spacing.small,
        },
        desktop: {
            fontSize: 64,
            marginBottom: spacing.medium,
        },
    }),
})

export const h2 = style({
    fontSize: 25,
    fontWeight: 400,
    lineHeight: ratio,
    margin: `0 0 ${spacing.small} 0`,

    ...breakpoint({
        tablet: {
            fontSize: 28,
            marginBottom: spacing.regular,
        },
        desktop: {
            fontSize: 32,
            marginBottom: spacing.medium,
        },
    }),
})
