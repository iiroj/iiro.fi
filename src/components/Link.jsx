import React, { useCallback } from 'react'

import useRouter from '../hooks/useRouter'

const Link = ({ onClick, children, to, ...rest }) => {
    const { history } = useRouter()

    const handleClick = useCallback(
        (event) => {
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
