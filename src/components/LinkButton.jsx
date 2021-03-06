import { css } from '@emotion/react'
import React from 'react'

import { colors } from '../design/colors'
import spacing from '../design/spacing'
import transition from '../design/transition'
import Link from './Link'

const style = css({
    ...transition('background-color'),
    backgroundColor: colors.background.secondary,
    borderRadius: spacing.medium,
    color: 'inherit',
    display: 'inline-block',
    padding: `${spacing.tiny} ${spacing.small}`,
    textDecoration: 'none',

    ':hover': {
        backgroundColor: colors.actionable,
    },

    ':active': {
        transform: 'scale(0.95)',
    },
})

const LinkButton = (props) => <Link {...props} css={style} />

export default LinkButton
