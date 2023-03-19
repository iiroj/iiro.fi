// @ts-check

import { headers } from './utils/headers.mjs';
import { isVercelAnalyticsEnabled } from './utils/is-vercel-analytics-enabled.mjs';

/**
 * @type {(phase: string) => Promise<import('next').NextConfig>}
 **/
export default async function (phase) {
    const { PHASE_DEVELOPMENT_SERVER } = await import('next/dist/shared/lib/constants.js');
    const isProduction = phase !== PHASE_DEVELOPMENT_SERVER;
    const vercelAnalyticsEnabled = !isProduction || (await isVercelAnalyticsEnabled());

    return {
        cleanDistDir: true,

        env: {
            ...(vercelAnalyticsEnabled ? { NEXT_PUBLIC_VERCEL_ANALYTICS: 'true' } : undefined),
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
