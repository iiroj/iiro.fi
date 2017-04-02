import React, { Component, PropTypes } from 'react'

import 'reset.css/reset.css'
import '_template.scss'

const Template = (props) => (
    <div id="root">
        {props.children}
    </div>
)

export { Template as default }
