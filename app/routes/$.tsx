import { json, LoaderFunction, V2_MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'
import type { FC } from 'react'

export const loader: LoaderFunction = () => json(null, { status: 404 })

export const meta: V2_MetaFunction = () => [
    {
        title: 'Page Not Found',
    },
    {
        name: 'robots',
        content: 'noarchive, noindex',
    },
]

const NotFound: FC = () => (
    <>
        <h1>Four Zero Four</h1>

        <h2>Page Not Found</h2>

        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Back Home</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
)

NotFound.displayName = 'NotFound'

export default NotFound
