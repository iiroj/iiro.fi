import type { Metadata } from 'next';
import type { FC } from 'react';

export const metadata: Metadata = {
    title: 'Iiro Jäppinen',
    description: 'Web Competence Lead at S Group',
};

const Page: FC = () => (
    <>
        <h1>Iiro Jäppinen</h1>
        <h2>Web Competence Lead at S Group</h2>
        <p>I build web experiences, develop tooling, and maintain open-source libraries.</p>
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com/iiroj" rel="author noreferrer" target="_blank">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/iiroj" rel="author noreferrer" target="_blank">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
);

export default Page;
