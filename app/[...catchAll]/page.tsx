import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { FC } from 'react';

export const metadata: Metadata = {
    title: 'Page Not Found',
};

const Page: FC = () => {
    notFound();
};

export default Page;
