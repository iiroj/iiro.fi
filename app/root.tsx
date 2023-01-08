import type { MetaFunction } from '@remix-run/cloudflare'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Iiro Jäppinen',
    viewport: 'width=device-width,initial-scale=1',
})

export const loader = () => ({
    cfBeaconToken: CF_BEACON_TOKEN || null,
})

const App = () => {
    const { cfBeaconToken } = useLoaderData<typeof loader>()

    return (
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

                {cfBeaconToken ? (
                    <script
                        data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
                        defer
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                    />
                ) : null}
            </body>
        </html>
    )
}

export default App
