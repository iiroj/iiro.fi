import styled from 'styled-components'

import { colors } from '../design/colors'
import spacing from '../design/spacing'
import transition from '../design/transition'
import Link from './Link'

const LinkButton = styled(Link)({
    ...transition('background-color'),
    backgroundColor: colors.background.secondary,
    borderRadius: spacing.medium,
    color: 'inherit',
    display: 'inline-block',
    padding: `${spacing.tiny} ${spacing.regular}`,
    textDecoration: 'none',

    ':hover': {
        backgroundColor: colors.actionable,
    },

    ':active': {
        transform: 'scale(0.95)',
    },
})

LinkButton.displayName = 'LinkButton'

export default LinkButton
