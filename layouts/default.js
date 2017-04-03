import React from 'react'

import 'reset.css/reset.css'
import s from 'styles/_template.module.css'

export default function Template (props) {
    const { children } = props

    return (
        <div className={s.root}>
            {children}
        </div>
    )
}
