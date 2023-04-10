import { Links, Meta, Outlet, useLoaderData } from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import type { LinksFunction, LoaderFunction, V2_MetaFunction } from '@vercel/remix';

type LoaderData = {
    analyticsEnabled: boolean;
};

export const loader: LoaderFunction = (): LoaderData => ({
    analyticsEnabled: !!process.env.VERCEL_ANALYTICS,
});

export const links: LinksFunction = () => [
    {
        href: '/styles.css',
        rel: 'stylesheet',
    },
];

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
    const { analyticsEnabled } = useLoaderData<LoaderData>();

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                {analyticsEnabled ? <Analytics /> : null}
            </body>
        </html>
    );
};

export default App;
