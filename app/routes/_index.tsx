import type { HeadersFunction, V2_MetaFunction } from '@vercel/remix';
import type { FC } from 'react';

import Page from '../components/Page';
import { SECURITY_HEADERS } from '../headers';

export const config = { runtime: 'edge' };

export const headers: HeadersFunction = () => ({
    ...SECURITY_HEADERS,
    'Cache-Control': 'max-age=0, s-max-age=3600, stale-while-revalidate',
});

export const meta: V2_MetaFunction = () => [
    {
        title: 'Iiro Jäppinen',
    },
    {
        name: 'description',
        content: 'Principal Engineer at SOK',
    },
];

const links = [
    <a href="https://github.com/iiroj" key="github" rel="author noreferrer" target="_blank">
        GitHub
    </a>,
    <a href="https://linkedin.com/in/iiroj" key="linkedin" rel="author noreferrer" target="_blank">
        LinkedIn
    </a>,
];

const Root: FC = () => (
    <Page links={links} title="Iiro Jäppinen">
        <h2>Principal Engineer at SOK</h2>
        <p>I build web experiences, develop tooling, and maintain open-source libraries.</p>
    </Page>
);

Root.displayName = 'Root';

export default Root;
