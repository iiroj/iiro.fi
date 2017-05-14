import React, { Component } from 'react'

import { VerkkokauppaComHeader } from './Header'
import { VerkkokauppaComDeliveryEstimate } from './DeliveryEstimate'
import { VerkkokauppaComPickup } from './Pickup'
import { VerkkokauppaComBarometer } from './Barometer'

import s from './index.module.css'

export default class PortfolioVerkkokauppaCom extends Component {
  render () {
    return (
      <article className={s.verkkokauppaCom}>
        <VerkkokauppaComHeader />
        <VerkkokauppaComDeliveryEstimate />
        <VerkkokauppaComPickup />
        <VerkkokauppaComBarometer />
      </article>
    )
  }
}
