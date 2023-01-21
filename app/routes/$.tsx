import { Link } from '@remix-run/react'
import type { V2_MetaFunction } from '@remix-run/server-runtime'
import { json } from '@remix-run/server-runtime'
import type { FC } from 'react'

import Page from '../components/Page'

export const loader = () => json(null, { status: 404 })

export const meta: V2_MetaFunction = () => [
    {
        title: 'Page Not Found',
    },
    {
        name: 'robots',
        content: 'noarchive, noindex',
    },
]

const links = [
    <Link key="/" to="/">
        Back Home
    </Link>,
]

const NotFound: FC = () => (
    <Page links={links} title="Page Not Found">
        <h2>Four Zero Four</h2>
    </Page>
)

NotFound.displayName = 'NotFound'

export default NotFound
