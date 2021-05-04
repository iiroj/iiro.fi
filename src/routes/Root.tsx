import { css } from '@emotion/react'
import { Helmet } from 'react-helmet-async'

import LinkButton from '../components/LinkButton'
import { minWidth } from '../design/media'
import spacing from '../design/spacing'

const list = css({
    display: 'flex',
    margin: `-${spacing.tiny}`,

    li: {
        margin: spacing.tiny,
    },
})

const main = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: `${spacing.large} ${spacing.medium} ${spacing.medium}`,

    h1: {
        marginBottom: spacing.tiny,
    },

    h2: {
        marginBottom: spacing.small,
    },

    footer: {
        marginTop: spacing.regular,
    },

    ...minWidth.tablet({
        padding: `${spacing.huge} ${spacing.large} ${spacing.large}`,

        h1: {
            marginBottom: spacing.small,
        },

        h2: {
            marginBottom: spacing.regular,
        },

        footer: {
            marginTop: spacing.medium,
        },
    }),

    ...minWidth.desktop({
        h1: {
            marginBottom: spacing.regular,
        },

        h2: {
            marginBottom: spacing.medium,
        },

        footer: {
            marginTop: spacing.large,
        },
    }),
})

const container = css({
    alignItems: 'stretch',
    display: 'flex',
    minHeight: '100%',
})

const Root = () => (
    <div css={container}>
        <Helmet>
            <title>Iiro Jäppinen</title>
        </Helmet>

        <main css={main}>
            <h1>Iiro Jäppinen</h1>

            <h2>Platform Developer at Verkkokauppa.com</h2>

            <p>I build design systems, develop tooling, maintain open-source libraries, and build containers.</p>

            <footer>
                <nav>
                    <ul css={list}>
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
    </div>
)

export default Root
