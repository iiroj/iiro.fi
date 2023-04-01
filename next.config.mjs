// @ts-check

import { headers } from './utils/headers.mjs';

/**
 * @type {(phase: string) => Promise<import('next').NextConfig>}
 **/
export default async function (phase) {
    const { PHASE_DEVELOPMENT_SERVER } = await import('next/dist/shared/lib/constants.js');
    const isProduction = phase !== PHASE_DEVELOPMENT_SERVER;
    const vercelWebAnalyticsEnabled = !isProduction || !!process.env.VERCEL_WEB_ANALYTICS_ID;

    return {
        cleanDistDir: true,

        env: {
            ...(vercelWebAnalyticsEnabled ? { NEXT_PUBLIC_WEB_VERCEL_ANALYTICS: 'true' } : undefined),
        },

        eslint: {
            ignoreDuringBuilds: true,
        },

        experimental: {
            appDir: true,
            esmExternals: true,
            legacyBrowsers: false,
            sri: {
                algorithm: 'sha384',
            },
        },

        headers,

        poweredByHeader: false,

        typescript: {
            ignoreBuildErrors: true,
        },
    };
}
