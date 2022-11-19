/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    /** @see LiveReload in `app/root.tsx` */
    devServerPort: 8002,
    server: './server/index.ts',
    serverBuildTarget: 'cloudflare-workers',
}
