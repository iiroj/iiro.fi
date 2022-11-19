import type { MetaFunction } from '@remix-run/cloudflare'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Iiro Jäppinen',
    viewport: 'width=device-width,initial-scale=1',
})

const App = () => (
    <html lang="en">
        <head>
            <link href="/styles.css" rel="stylesheet" />
            <Meta />
            <Links />
        </head>
        <body>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
        </body>
    </html>
)

export default App
