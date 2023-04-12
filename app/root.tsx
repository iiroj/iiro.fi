import type { LinksFunction, LoaderFunction, V2_MetaFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';

export const links: LinksFunction = () => [
    {
        href: '/styles.css',
        rel: 'stylesheet',
    },
];

type LoaderData = {
    cfBeaconToken: string | null;
};

export const loader: LoaderFunction = (): LoaderData => ({
    cfBeaconToken: CF_BEACON_TOKEN || null,
});

export const meta: V2_MetaFunction = () => [
    {
        charSet: 'utf-8',
    },
    {
        content: 'width=device-width,initial-scale=1',
        name: 'viewport',
    },
];

const App = () => {
    const { cfBeaconToken } = useLoaderData<LoaderData>();

    return (
        <html lang="en">
            <head>
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
                        crossOrigin="anonymous"
                        data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
                        defer
                        integrity="sha384-yCCdqiSxoo5P8pYwq7U3o1/ZPYBikCToo3CW6LkxbiF/newkWV8X5ipDj9jOb2gi"
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                    />
                ) : null}
            </body>
        </html>
    );
};

export default App;
