import styled from 'styled-components'

import { breakpoint } from '../design/breakpoint'
import { spacing } from '../design/spacing'

const Main = styled.main({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: `${spacing.large} ${spacing.medium} ${spacing.medium}`,

    ...breakpoint({
        tablet: {
            padding: `${spacing.huge} ${spacing.large} ${spacing.large}`,
        },
    }),
})

export default Main
