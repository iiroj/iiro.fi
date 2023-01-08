import type { MetaFunction } from '@remix-run/cloudflare'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

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
            <LiveReload port={8002} />
            <script
                data-cf-beacon={'{"token": "c7794cb559534b8d894864b0398f9f7f"}'}
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
            />
        </body>
    </html>
)

export default App
