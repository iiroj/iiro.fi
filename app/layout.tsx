import 'styles.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

export const metadata: Metadata = {
    viewport: 'width=device-width,initial-scale=1',
};

type Props = {
    children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
    <html lang="en">
        <body>
            {children}
            <Analytics />
        </body>
    </html>
);

export default Layout;
