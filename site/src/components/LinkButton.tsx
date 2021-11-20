import Link from 'next/link'
import type { AnchorHTMLAttributes, FC } from 'react'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../design/colors'
import { spacing } from '../design/spacing'
import { transition } from '../design/transition'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
}

const LinkButtonComponent: FC<Props> = ({ href, ...props }) => (
    <Link href={href} passHref>
        <a {...props} />
    </Link>
)

LinkButtonComponent.displayName = 'LinkButton'

const LinkButton = styled(LinkButtonComponent)({
    ...transition('background-color'),
    backgroundColor: colors.background.secondary,
    borderRadius: spacing.medium,
    color: 'inherit',
    display: 'inline-block',
    margin: spacing.tiny,
    padding: `${spacing.tiny} ${spacing.regular}`,
    textDecoration: 'none',

    ':hover': {
        backgroundColor: colors.actionable,
    },

    ':active': {
        transform: 'scale(0.95)',
    },
})

export default LinkButton
