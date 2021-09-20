import { style } from '@vanilla-extract/css'

import { colors } from '../design/colors.css'
import { spacing } from '../design/spacing.css'
import { transition } from '../design/transition.css'

export const linkButton = style({
    ...transition('background-color'),
    backgroundColor: colors.background.secondary,
    borderRadius: spacing.medium,
    color: 'inherit',
    display: 'inline-block',
    margin: spacing.tiny,
    padding: `${spacing.tiny} ${spacing.regular}`,
    textDecoration: 'none',

    ':hover': {
        backgroundColor: colors.actionable,
    },

    ':active': {
        transform: 'scale(0.95)',
    },
})
