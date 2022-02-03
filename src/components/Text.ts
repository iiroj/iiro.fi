import styled from 'styled-components'

import { breakpoint } from '../design/breakpoint'
import { ratio } from '../design/scale'
import { spacing } from '../design/spacing'

const H1 = styled.h1({
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: -2,
    lineHeight: ratio,
    margin: `0 0 ${spacing.tiny} 0`,

    ...breakpoint({
        tablet: {
            fontSize: 48,
            marginBottom: spacing.small,
        },
        desktop: {
            fontSize: 64,
            marginBottom: spacing.medium,
        },
    }),
})

const H2 = styled.h2({
    fontSize: 25,
    fontWeight: 400,
    lineHeight: ratio,
    margin: `0 0 ${spacing.small} 0`,

    ...breakpoint({
        tablet: {
            fontSize: 28,
            marginBottom: spacing.regular,
        },
        desktop: {
            fontSize: 32,
            marginBottom: spacing.medium,
        },
    }),
})

const P = styled.p({
    margin: 0,
})

const Text = { H1, H2, P }

export default Text
