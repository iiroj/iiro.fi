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
          <a
            href="https://www.verkkokauppa.com/"
            target="_blank"
            className={styles.buttonLink}
          >
            Visit Verkkokauppa.com
          </a>
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
            srcSet="verkkokauppa.com/frontpage.jpg 1x,
                    verkkokauppa.com/frontpage@2x.jpg 2x,
                    verkkokauppa.com/frontpage@3x.jpg 3x"
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
      <section className={styles.ipad}>
        <img
          className={styles.ipadImage}
          src="verkkokauppa.com/ipad.jpg"
          srcSet="verkkokauppa.com/ipad.jpg 1x,
                  verkkokauppa.com/ipad@2x.jpg 2x,
                  verkkokauppa.com/ipad@3x.jpg 3x"
        />
        <div className={styles.ipadText}>
          <h2 className={styles.ipadTextHeading}>Self-Service order pickup</h2>
          <p>Customers need to check their order in for pick-up at the Verkkokauppa.com Helsinki store, because of the massive amount of daily customers.</p>
          <p>To ease this process we created a self-service kiosk. I designed the UI to be intuitive and simple. It should make obvious that you are picking up the right order, without exposing any personally identifiable information.</p>
          <p>The self-service kiosk is used for more than 50 % of daily pick-ups.</p>
        </div>
      </section>
      <aside className={styles.priceBarometer}>
        <img
          className={styles.priceBarometerImage}
          src="verkkokauppa.com/price-barometer.png"
          srcSet="verkkokauppa.com/price-barometer.png 1x,
                  verkkokauppa.com/price-barometer@2x.png 2x,
                  verkkokauppa.com/price-barometer@3x.png 3x"
        />
        <Barometer className={styles.priceBarometerGraph} />
      </aside>
      <section className={styles.icons}>
        <img
          className={styles.iconsGrid}
          src="verkkokauppa.com/icons.jpg"
        />
        <h2 className={styles.heading}>Icon Aficionado</h2>
        <div className={styles.iconExamples}>
          <div className={styles.iconGrowl}>
            <img
              src="verkkokauppa.com/growl.png"
              srcSet="verkkokauppa.com/growl.png 1x,
                      verkkokauppa.com/growl@2x.png 2x,
                      verkkokauppa.com/growl@3x.png 3x"
            />
            <a
              href="http://growl.info"
              target="_blank"
              className={styles.buttonLink}
            >Growl</a>
          </div>
          <div className={styles.iconTuneInstructor}>
            <img
              src="verkkokauppa.com/tuneinstructor.png"
              srcSet="verkkokauppa.com/tuneinstructor.png 1x,
                      verkkokauppa.com/tuneinstructor@2x.png 2x,
                      verkkokauppa.com/tuneinstructor@3x.png 3x"
            />
            <a
              href="https://www.tune-instructor.de/en/"
              target="_blank"
              className={styles.buttonLink}
            >Tune•Instructor</a>
          </div>
        </div>
      </section>
    </article>
  )
}
