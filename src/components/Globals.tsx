import { css, Global } from '@emotion/react'
import reset from 'react-style-reset/string'

import { colors, colorVariables } from '../design/colors'
import { fonts } from '../design/fonts'

const globals = css`
    body {
        background-color: ${colors.background.primary};
        color: ${colors.text.primary};
        display: flex;
        flex-direction: column;
    }
`

const Globals = () => <Global styles={[reset, colorVariables, fonts, globals]} />

export default Globals
