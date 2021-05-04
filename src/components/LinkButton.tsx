import { css } from '@emotion/react'

import { colors } from '../design/colors'
import spacing from '../design/spacing'
import transition from '../design/transition'
import type { Props } from './Link'
import Link from './Link'

const style = css({
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

const LinkButton = (props: Props) => <Link {...props} css={style} />

export default LinkButton
