import React from 'react'

import { default as ipad1x } from './ipad.jpg'
import { default as ipad2x } from './ipad@2x.jpg'
import { default as ipad3x } from './ipad@3x.jpg'
import s from './index.module.css'

export const VerkkokauppaComPickup = () => (
  <section className={s.ipad}>
    <img
      className={s.ipadImage}
      src={ipad1x}
      srcSet={`${ipad1x} 1x, ${ipad2x} 2x, ${ipad3x} 3x`}
      />
    <div className={s.ipadText}>
      <h2 className={s.ipadTextHeading}>Self-Service order pickup</h2>
      <p>Customers need to check their order in for pick-up at the Verkkokauppa.com Helsinki store, because of the massive amount of daily customers.</p>
      <p>To ease this process we created a self-service kiosk. I designed the UI to be intuitive and simple. It should make obvious that you are picking up the right order, without exposing any personally identifiable information.</p>
      <p>The self-service kiosk is used for more than 50 % of daily pick-ups.</p>
    </div>
  </section>
)
