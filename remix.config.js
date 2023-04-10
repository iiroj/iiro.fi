/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    publicPath: '/build/',
    serverBuildPath: 'build/index.js',
    serverMainFields: ['main', 'module'],
    serverMinify: false,
    serverModuleFormat: 'cjs',
    serverPlatform: 'node',

    future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
    },
};
