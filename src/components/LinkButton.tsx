import { css } from '@linaria/core'
import React from 'react'

import { colors } from '../design/colors'
import spacing from '../design/spacing'
import transition from '../design/transition'
import type { Props } from './Link'
import Link from './Link'

const linkButton = css`
    ${transition('background-color')};

    background-color: ${colors.background.secondary};
    border-radius: ${spacing.medium};
    color: inherit;
    display: inline-block;
    padding: ${spacing.tiny} ${spacing.regular};
    text-decoration: none;

    :hover {
        background-color: ${colors.actionable};
    }

    :active {
        transform: scale(0.95);
    }
`

const LinkButton = (props: Props) => <Link className={linkButton} {...props} />

LinkButton.displayName = 'LinkButton'

export default LinkButton
