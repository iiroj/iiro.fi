import React from 'react'
import { Link } from 'react-router'

import s from './styles.module.css'

export const Back = () => (
    <nav>
        <Link className={s.back} to="/" title="Back to iiro.fi">Back to iiro.fi</Link>
    </nav>
)
