import { SYSTEM_FONT } from '../constants/fonts'
import { colors } from './colors'
import { minWidth } from './media'
import scale from './scale'

export const fonts = {
    body: {
        color: colors.text.primary,
        fontFamily: SYSTEM_FONT,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: scale.ratio,
        fontWeight: 400,

        ...minWidth.tablet({
            fontSize: 18,
        }),

        ...minWidth.desktop({
            fontSize: 24,
        }),
    },

    strong: {
        fontWeight: 600,
    },

    h1: {
        fontSize: 32,
        fontWeight: 600,
        letterSpacing: '-2',
        lineHeight: scale.ratio,

        ...minWidth.tablet({
            fontSize: 48,
        }),

        ...minWidth.desktop({
            fontSize: 64,
        }),
    },

    h2: {
        fontSize: 24,
        lineHeight: scale.ratio,

        ...minWidth.tablet({
            fontSize: 28,
        }),

        ...minWidth.desktop({
            fontSize: 32,
        }),
    },
}
