import { css, Global } from '@emotion/react'
import reset from 'react-style-reset/string'

import { colors, colorVariables } from '../design/colors'
import { fonts } from '../design/fonts'

const globals = css`
    #root {
        display: flex;
        flex-direction: column;
    }

    body {
        background-color: ${colors.background.primary};
        color: ${colors.text.primary};
    }
`

const Globals = () => <Global styles={[reset, colorVariables, fonts, globals]} />

export default Globals
