import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'

const isProduction = process.env.NODE_ENV === 'production'

export const loader = () => ({
    cfBeaconToken: CF_BEACON_TOKEN || null,
})

const App = () => {
    const { cfBeaconToken } = useLoaderData<typeof loader>()

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta content="width=device-width,initial-scale=1" name="viewport" />
                <link href="/styles.css" rel="stylesheet" />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />

                {isProduction ? null : <ScrollRestoration />}

                {isProduction ? null : <Scripts />}

                {isProduction ? null : <LiveReload port={8002} />}

                {cfBeaconToken ? (
                    <script
                        crossOrigin="anonymous"
                        data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
                        defer
                        integrity="sha384-ikHI8F+DCZ/OP4pxSzGmk/E2UZdZ8TNqbm/HJcr90E1vUeqCnW7y8D8dC9AGuWV9"
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                    />
                ) : null}
            </body>
        </html>
    )
}

export default App
