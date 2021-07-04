import { SYSTEM_FONT } from '../constants/fonts'
import { colors } from '../design/colors'
import { ratio } from '../design/scale'
import { minWidth } from '../styles/media'

const fonts = `
    body {
        color: ${colors.text.primary};
        font-family: ${SYSTEM_FONT};
        font-style: normal;
        font-size: 16px;
        line-height: ${ratio};
        font-weight: 400;

        ${minWidth.tablet} {
            font-size: 18px;
        }

        ${minWidth.desktop} {
            font-size: 24px;
        }
    }

    strong: {
        font-weight: 600;
    }

    h1 {
        font-size: 32px;
        font-weight: 600;
        letter-spacing: -2;
        line-height: ${ratio};
        margin: 0;

        ${minWidth.tablet} {
            font-size: 48px;
        }

        ${minWidth.desktop} {
            font-size: 64px;
        }
    }

    h2 {
        font-size: 24px;
        font-weight: 400;
        line-height: ${ratio};
        margin: 0;

        ${minWidth.tablet} {
            font-size: 28px;
        }

        ${minWidth.desktop} {
            font-size: 32px;
        }
    }

    p {
        margin: 0;
    }
` as const

export default fonts
