import React from 'react'
import styles from './index.module.css'

import Barometer from './barometer'

export default function VerkkokauppaCom () {
  return (
    <article className={styles.verkkokauppaCom}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.heading}>Verkkokauppa.com</h1>
          <p>UX/UI designer since November 2014.
          As the resident web designer,
          I oversee the visual direction of Verkkokauppa.com's
          website.</p>
        </div>
        <div className={styles.frontPageContainer}>
          <img
            className={styles.frontPagePhone}
            src="verkkokauppa.com/pixel.png"
            srcSet="verkkokauppa.com/pixel.png 1x,
                    verkkokauppa.com/pixel@2x.png 2x,
                    verkkokauppa.com/pixel@3x.png 3x"
          />
          <img
            className={styles.frontPageImage}
            src="verkkokauppa.com/frontpage.jpg"
          />
        </div>
      </header>
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
                    verkkokauppa.com/list@3x.png 3"
          />
          <img
            src="verkkokauppa.com/dialog.png"
            srcSet="verkkokauppa.com/dialog.png 1x,
                    verkkokauppa.com/dialog@2x.png 2x,
                    verkkokauppa.com/dialog@3x.png 3"
          />
        </figure>
      </section>
      <aside className={styles.priceBarometer}>
        <img
          className={styles.priceBarometerImage}
          src="verkkokauppa.com/price-barometer.png"
          srcSet="verkkokauppa.com/price-barometer.png 1x,
                  verkkokauppa.com/price-barometer@2x.png 2x,
                  verkkokauppa.com/price-barometer@3x.png 3"
        />
        <Barometer className={styles.priceBarometerGraph} />
      </aside>
    </article>
  )
}
