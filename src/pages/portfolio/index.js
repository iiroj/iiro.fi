import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { Back } from 'components/Back'
import PortfolioVerkkokauppaCom from 'components/Portfolio/PortfolioVerkkokauppaCom'
import { PortfolioHumble } from 'components/Portfolio/PortfolioHumble'
import { PortfolioIcons } from 'components/Portfolio/PortfolioIcons'

import s from './styles.module.css'

export default class PortfolioIndex extends Component {
    render () {
        return (
            <div>
                <Helmet
                    title="Portfolio of Iiro Jäppinen"
                />
                <div className={s.container}>
                    <Back />
                    <header className={s.header}>
                        <h1>Portfolio of Iiro Jäppinen</h1>
                    </header>
                    <PortfolioVerkkokauppaCom />
                    <PortfolioHumble />
                    <PortfolioIcons />
                </div>
                <aside>
                    <p className={s.more}>With more coming soon...</p>
                </aside>
            </div>
        )
    }
}
