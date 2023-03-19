// @ts-check

/**
 * @type {(phase: string) => Promise<import('next').NextConfig>}
 **/
export default async function (phase) {
    const { PHASE_DEVELOPMENT_SERVER } = await import('next/dist/shared/lib/constants.js');
    const isProduction = phase !== PHASE_DEVELOPMENT_SERVER;

    return {
        cleanDistDir: true,

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
