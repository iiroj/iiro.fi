import 'styles.css';

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
        <body>{children}</body>
    </html>
);

export default Layout;
