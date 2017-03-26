import React, { Component, PropTypes } from 'react'
import 'reset.css/reset.css'

import s from '_template.module.css'

export default class Template extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render () {
        return (
            <div id="root" className={s.root}>
                {this.props.children}
            </div>
        )
    }
}
