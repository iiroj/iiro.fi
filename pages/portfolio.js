import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'

import PortfolioVerkkokauppaCom from 'components/Portfolio/PortfolioVerkkokauppaCom'
import { PortfolioHumble } from 'components/Portfolio/PortfolioHumble'
import { PortfolioIcons } from 'components/Portfolio/PortfolioIcons'

import s from 'styles/PortfolioIndex.module.css'

export default class PortfolioIndex extends Component {
    render () {
        return (
            <div>
                <Helmet
                    title="Portfolio of Iiro Jäppinen"
                />
                <div className={s.container}>
                    <nav>
                        <Link className={s.back} to="/" title="Back to iiro.fi">Back to iiro.fi</Link>
                    </nav>
                    <header className={s.header}>
                        <h1>Portfolio of Iiro Jäppinen</h1>
                    </header>
                    <PortfolioVerkkokauppaCom />
                    <PortfolioHumble />
                    <PortfolioIcons />
                    <aside>
                        <p className={s.more}>With more coming soon...</p>
                    </aside>
                </div>
            </div>
        )
    }
}
