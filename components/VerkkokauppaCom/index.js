import React from 'react'
import styles from './index.module.css'

import { default as Header } from './Header'
import { default as DeliveryEstimate } from './DeliveryEstimate'
import { default as Pickup } from './Pickup'
import { default as Barometer } from './Barometer'

function VerkkokauppaCom () {
    return (
        <article className={styles.verkkokauppaCom}>
            <Header />
            <DeliveryEstimate />
            <Pickup />
            <Barometer />
        </article>
    )
}

export { VerkkokauppaCom as default }
