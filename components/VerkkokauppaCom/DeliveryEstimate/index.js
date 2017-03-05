import React from 'react'

import styles from './index.module.css'

const DeliveryEstimate = () => (
    <section className={styles.deliveryEstimate}>
        <div className={styles.deliveryEstimateText}>
            <h2 className={styles.heading}>Delivery estimates</h2>
            <h3>The Problem</h3>
            <p>Customers were confused by raw product stock numbers and unsure what it meant for availability.</p>
            <h3>The Research</h3>
            <p>Customers were asked questions about product availability and the results were studied. General customer feedback was collected online. Order and visitor data was aggregated to find out patterns related to product availability.</p>
            <h3>The Solution</h3>
            <p>Customers do not need detailed availability numbers because they order single items. Thus, a simpler true/false availability interface was designed for store locations. For online ordering, the availability logic was completely revamped to give an estimate on when the product would arrive at the customer.</p>
        </div>
        <figure className={styles.deliveryEstimateImage}>
            <img
                src="verkkokauppa.com/list.png"
                srcSet="verkkokauppa.com/list.png 1x,
                        verkkokauppa.com/list@2x.png 2x,
                        verkkokauppa.com/list@3x.png 3x"
            />
            <img
                src="verkkokauppa.com/dialog.png"
                srcSet="verkkokauppa.com/dialog.png 1x,
                        verkkokauppa.com/dialog@2x.png 2x,
                        verkkokauppa.com/dialog@3x.png 3x"
            />
        </figure>
    </section>
)

export { DeliveryEstimate as default }
