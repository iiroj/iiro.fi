import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'

import LinkButton from '../components/LinkButton'
import { minWidth } from '../design/media'
import spacing from '../design/spacing'

const Main = styled.main({
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

const NotFound = () => (
    <Main>
        <Helmet>
            <title>Page Not Found</title>
        </Helmet>

        <h1>Four Zero Four</h1>

        <h2>Page Not Found</h2>

        <nav>
            <LinkButton to="/">Back Home</LinkButton>
        </nav>
    </Main>
)

NotFound.displayName = 'NotFound'

export default NotFound
