import type { HTMLProps, MouseEvent, MouseEventHandler, ReactNode } from 'react'
import React, { useCallback } from 'react'

import useRouter from '../hooks/useRouter'

export interface Props extends HTMLProps<HTMLAnchorElement> {
    onClick?: MouseEventHandler<HTMLAnchorElement>
    children: ReactNode
    to: string
}

const Link = ({ onClick, children, to, ...rest }: Props) => {
    const { history } = useRouter()

    const handleClick = useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            if (typeof onClick === 'function') {
                onClick(event)
            }

            if (!event.defaultPrevented) {
                event.preventDefault()
                history.push(to)
            }
        },
        [history, onClick, to]
    )

    return (
        <a {...rest} href={to} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link
