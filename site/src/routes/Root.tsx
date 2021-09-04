import { css } from '@linaria/core'
import React from 'react'
import { Helmet } from 'react-helmet-async'

import LinkButton from '../components/LinkButton'
import spacing from '../design/spacing'
import { minWidth } from '../styles/media'

const list = css`
    display: flex;
    list-style: none;
    margin: -${spacing.tiny};
    padding: 0;

    li {
        margin: ${spacing.tiny};
    }
`

const main = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${spacing.large} ${spacing.medium} ${spacing.medium};

    h1 {
        margin-bottom: ${spacing.tiny};
    }

    h2 {
        margin-bottom: ${spacing.small};
    }

    footer {
        margin-top: ${spacing.regular};
    }

    ${minWidth.tablet} {
        padding: ${spacing.huge} ${spacing.large} ${spacing.large};

        h1 {
            margin-bottom: ${spacing.small};
        }

        h2 {
            margin-bottom: ${spacing.regular};
        }

        footer {
            margin-top: ${spacing.medium};
        }
    }

    ${minWidth.desktop} {
        h1 {
            margin-bottom: ${spacing.regular};
        }

        h2 {
            margin-bottom: ${spacing.medium};
        }

        footer {
            margin-top: ${spacing.large};
        }
    }
`

const Root = () => (
    <main className={main}>
        <Helmet>
            <title>Iiro Jäppinen</title>
        </Helmet>

        <h1>Iiro Jäppinen</h1>

        <h2>Platform Developer at Verkkokauppa.com</h2>

        <p>
            I build design systems, develop tooling, and maintain open-source libraries — all inside Docker containers.
        </p>

        <footer>
            <nav>
                <ul className={list}>
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
