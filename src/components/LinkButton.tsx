import Link from 'next/link'
import type { AnchorHTMLAttributes, FC } from 'react'
import React from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
}

const LinkButton: FC<Props> = ({ href, ...props }) => (
    <Link href={href} passHref>
        <a {...props} />
    </Link>
)

export default LinkButton
