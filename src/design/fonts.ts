import { SYSTEM_FONT } from '../constants/fonts'
import { colors } from './colors'
import { minWidth } from './media'
import scale from './scale'

export const fonts = {
    body: {
        color: colors.text.primary,
        fontFamily: SYSTEM_FONT,
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: scale.ratio,
        fontWeight: 400,

        ...minWidth.tablet({
            fontSize: 24,
        }),
    },

    strong: {
        fontWeight: 600,
    },

    h1: {
        fontSize: 32,
        fontWeight: 400,
        letterSpacing: '-2',
        lineHeight: '0.8em',

        ...minWidth.tablet({
            fontSize: 48,
        }),

        ...minWidth.desktop({
            fontSize: 64,
        }),
    },
}
