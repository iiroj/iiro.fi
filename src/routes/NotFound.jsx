import { css } from '@emotion/react'
import React from 'react'
import { Helmet } from 'react-helmet-async'

import LinkButton from '../components/LinkButton'
import { minWidth } from '../design/media'
import spacing from '../design/spacing'

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

const NotFound = () => (
    <div css={container}>
        <Helmet>
            <title>Page Not Found</title>
        </Helmet>

        <main css={main}>
            <header>
                <h1>404 — Page Not Found</h1>
            </header>
            <section>
                <LinkButton to="/">Back Home</LinkButton>
            </section>
        </main>
    </div>
)

export default NotFound
