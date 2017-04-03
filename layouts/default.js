import React from 'react'

import 'reset.css/reset.css'

export default function Template (props) {
    const { children } = props

    return (
      <div id="root">
        {children}
      </div>
    )
}
