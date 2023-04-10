/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    publicPath: '/build/',

    future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
    },
};
