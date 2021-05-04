import { css } from '@emotion/react'
import { Helmet } from 'react-helmet-async'

import LinkButton from '../components/LinkButton'
import { minWidth } from '../design/media'
import spacing from '../design/spacing'

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

    ...minWidth.tablet({
        padding: `${spacing.huge} ${spacing.large} ${spacing.large}`,

        h1: {
            marginBottom: spacing.small,
        },

        h2: {
            marginBottom: spacing.medium,
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
            <h1>Four Zero Four</h1>

            <h2>Page Not Found</h2>

            <nav>
                <LinkButton to="/">Back Home</LinkButton>
            </nav>
        </main>
    </div>
)

export default NotFound
