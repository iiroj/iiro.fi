import { json, LoaderFunction, V2_MetaFunction } from '@vercel/remix';
import { Link } from '@remix-run/react';
import type { FC } from 'react';

import Page from '../components/Page';
import { SECURITY_HEADERS } from '../headers';

export const headers: HeadersFunction = () => ({
    ...SECURITY_HEADERS,
    'Cache-Control': 'no-cache',
});

export const loader: LoaderFunction = () => json(null, { status: 404 });

export const meta: V2_MetaFunction = () => [
    {
        title: 'Page Not Found',
    },
    {
        name: 'robots',
        content: 'noarchive, noindex',
    },
];

const links = [
    <Link key="/" to="/">
        Back Home
    </Link>,
];

const NotFound: FC = () => (
    <Page links={links} title="Page Not Found">
        <h2>Four Zero Four</h2>
    </Page>
);

NotFound.displayName = 'NotFound';

export default NotFound;
