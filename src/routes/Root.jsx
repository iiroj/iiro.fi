import { css } from '@emotion/react'
import React from 'react'
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
    padding: `${spacing.medium} ${spacing.small} ${spacing.small}`,

    'header + section': {
        marginTop: spacing.medium,
    },

    ...minWidth.tablet({
        padding: `${spacing.large} ${spacing.medium}`,

        'header + section': {
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
            <header>
                <h1>Iiro Jäppinen</h1>
            </header>
            <section>
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
            </section>
        </main>
    </div>
)

export default Root
