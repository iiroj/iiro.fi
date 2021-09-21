import { assignVars, globalStyle } from '@vanilla-extract/css'

import { SYSTEM_FONT } from '../constants/fonts'
import { breakpoint } from '../design/breakpoint.css'
import { colors, raw } from '../design/colors.css'
import { ratio } from '../design/scale.css'

globalStyle(':root', {
    vars: assignVars(colors, {
        background: {
            primary: raw.background.primary.light,
            secondary: raw.background.secondary.light,
        },
        text: {
            primary: raw.text.primary.light,
            active: raw.text.active.light,
        },
        actionable: raw.actionable.light,
    }),
    '@media': {
        '(prefers-color-scheme: dark)': {
            vars: assignVars(colors, {
                background: {
                    primary: raw.background.primary.dark,
                    secondary: raw.background.secondary.dark,
                },
                text: {
                    primary: raw.text.primary.dark,
                    active: raw.text.active.dark,
                },
                actionable: raw.actionable.dark,
            }),
        },
    },
})

globalStyle('html', {
    backgroundColor: colors.background.primary,
    color: colors.text.primary,
    fontFamily: SYSTEM_FONT,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: ratio,
    fontWeight: 400,

    ...breakpoint({
        tablet: {
            fontSize: 18,
        },
        desktop: {
            fontSize: 24,
        },
    }),
})

globalStyle('body', {
    margin: 0,
})
