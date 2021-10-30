import Link from 'next/link'
import type { AnchorHTMLAttributes, FC } from 'react'
import React from 'react'

import { linkButton } from './LinkButton.css'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
}

const LinkButton: FC<Props> = ({ href, ...props }) => (
    <Link href={href} passHref>
        <a className={linkButton} {...props} />
    </Link>
)

LinkButton.displayName = 'LinkButton'

export default LinkButton
