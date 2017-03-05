import React from 'react'
import styles from './index.module.css'

const VerkkokauppaComPickup = () => (
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
)

export { VerkkokauppaComPickup as default }
