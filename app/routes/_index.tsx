import type { V2_MetaFunction } from '@remix-run/cloudflare'
import type { FC } from 'react'

import Page from '../components/Page'

export const meta: V2_MetaFunction = () => [
    {
        title: 'Iiro Jäppinen',
    },
    {
        name: 'description',
        content: 'Web Competence Lead at S Group',
    },
]

const links = [
    <a href="https://github.com/iiroj" key="github" rel="author noreferrer" target="_blank">
        GitHub
    </a>,
    <a href="https://linkedin.com/in/iiroj" key="linkedin" rel="author noreferrer" target="_blank">
        LinkedIn
    </a>,
]

const Root: FC = () => (
    <Page links={links} title="Iiro Jäppinen">
        <h2>Web Competence Lead at S Group</h2>
        <p>I build web experiences, develop tooling, and maintain open-source libraries.</p>
    </Page>
)

Root.displayName = 'Root'

export default Root
