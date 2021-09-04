import { css } from '@linaria/core'
import React from 'react'
import { Helmet } from 'react-helmet-async'

import LinkButton from '../components/LinkButton'
import spacing from '../design/spacing'
import { minWidth } from '../styles/media'

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

    ${minWidth.tablet} {
        padding: ${spacing.huge} ${spacing.large} ${spacing.large};

        h1 {
            margin-bottom: ${spacing.small};
        }

        h2 {
            margin-bottom: ${spacing.medium};
        }
    }
`

const NotFound = () => (
    <main className={main}>
        <Helmet>
            <title>Page Not Found</title>
        </Helmet>

        <h1>Four Zero Four</h1>

        <h2>Page Not Found</h2>

        <nav>
            <LinkButton to="/">Back Home</LinkButton>
        </nav>
    </main>
)

NotFound.displayName = 'NotFound'

export default NotFound
