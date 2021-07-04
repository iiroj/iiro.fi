import reset from 'react-style-reset'
import { createGlobalStyle } from 'styled-components'

import { colors, colorVariables } from '../design/colors'
import { fonts } from '../design/fonts'

const Globals = createGlobalStyle(reset, colorVariables, fonts, {
    body: {
        backgroundColor: colors.background.primary,
        color: colors.text.primary,
        display: 'flex',
        flexDirection: 'column',
    },
})

Globals.displayName = 'Globals'

export default Globals
