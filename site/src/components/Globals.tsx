import React, { memo } from 'react'
import { createGlobalStyle } from 'styled-components'

import { SYSTEM_FONT } from '../constants/fonts'
import { breakpoint } from '../design/breakpoint'
import { colors, cssVars } from '../design/colors'
import { ratio } from '../design/scale'

const Root = createGlobalStyle({
    ':root': cssVars,
})

const Html = createGlobalStyle({
    html: {
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
    },
})

const Body = createGlobalStyle({
    body: {
        margin: 0,
    },
})

const Globals = () => (
    <>
        <Root />
        <Html />
        <Body />
    </>
)

Globals.displayName = 'Globals'

export default memo(Globals)
