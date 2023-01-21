/** @type {import('@remix-run/dev').AppConfig} */
export default {
    /** @see LiveReload in `app/root.tsx` */
    devServerPort: 8002,
    server: './worker/index.ts',
    serverBuildTarget: 'cloudflare-workers',

    future: {
        v2_meta: true,
        v2_routeConvention: true,
    },
}
