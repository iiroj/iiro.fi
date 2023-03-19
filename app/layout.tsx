import '../styles/root.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

const vercelAnalyticsEnabled = !!process.env.NEXT_PUBLIC_WEB_VERCEL_ANALYTICS;

export const metadata: Metadata = {
    viewport: 'width=device-width,initial-scale=1',
};

type Props = {
    children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {children}
                {vercelAnalyticsEnabled && <Analytics />}
            </body>
        </html>
    );
};

export default Layout;
