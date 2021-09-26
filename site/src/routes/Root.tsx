import React from 'react'
import { Helmet } from 'react-helmet-async'

import LinkButton from '../components/LinkButton'
import microdata from '../constants/microdata.json'
import { main } from '../design/main.css'
import { h1, h2 } from '../design/text.css'
import { p, ul } from './Root.css'

const Root = () => (
    <main className={main}>
        <Helmet>
            <title>Iiro Jäppinen</title>
            <meta content="Platform Developer at Verkkokauppa.com" name="description" />
            <script type="application/ld+json">{JSON.stringify(microdata)}</script>
        </Helmet>

        <h1 className={h1}>Iiro Jäppinen</h1>

        <h2 className={h2}>Platform Developer at Verkkokauppa.com</h2>

        <p className={p}>
            I build design systems, develop tooling, and maintain open-source libraries — all inside Docker containers.
        </p>

        <footer>
            <nav>
                <ul className={ul}>
                    <li>
                        <LinkButton to="https://github.com/iiroj" rel="author">
                            GitHub
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton to="https://linkedin.com/in/iiroj" rel="author">
                            LinkedIn
                        </LinkButton>
                    </li>
                </ul>
            </nav>
        </footer>
    </main>
)

Root.displayName = 'Root'

export default Root
