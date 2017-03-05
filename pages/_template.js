import React, { PropTypes } from 'react'
import 'reset.css/reset.css'
import styles from '_template.module.css'

function Template (props) {
    return (
        <div>
            <div className={styles.root}>
                {props.children}
            </div>
        </div>
    )
}

Template.propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export { Template as default }
