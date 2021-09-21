import { assignVars, globalStyle } from '@vanilla-extract/css'

import { SYSTEM_FONT } from '../constants/fonts'
import { breakpoint } from '../design/breakpoint.css'
import { colors } from '../design/colors.css'
import { ratio } from '../design/scale.css'

globalStyle(':root', {
    vars: assignVars(colors, {
        background: {
            primary: 'hsl(0, 0%, 100%)',
            secondary: 'hsl(0, 0%, 96%)',
        },
        text: {
            primary: 'hsl(0, 0%, 30%)',
            active: 'hsl(0, 0%, 0%)',
        },
        actionable: 'hsl(44, 100%, 75%)',
    }),
    '@media': {
        '(prefers-color-scheme: dark)': {
            vars: assignVars(colors, {
                background: {
                    primary: 'hsl(0, 0%, 10%)',
                    secondary: 'hsl(0, 0%, 16%)',
                },
                text: {
                    primary: 'hsl(0, 0%, 80%)',
                    active: 'hsl(0, 0%, 70%)',
                },
                actionable: 'hsla(44, 100%, 33%, 0.4)',
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
