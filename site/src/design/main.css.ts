import { style } from '@vanilla-extract/css'

import { breakpoint } from '../design/breakpoint.css'
import { spacing } from '../design/spacing.css'

export const main = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: `${spacing.large} ${spacing.medium} ${spacing.medium}`,

    ...breakpoint({
        tablet: {
            padding: `${spacing.huge} ${spacing.large} ${spacing.large}`,
        },
    }),
})
