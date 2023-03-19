import Link from 'next/link';
import type { FC } from 'react';

const NotFound: FC = () => (
    <>
        <h1>Page Not Found</h1>
        <h2>Four Zero Four</h2>
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Back Home</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
);

export default NotFound;
