import esbuild from 'esbuild'

await esbuild.build({
    bundle: true,
    conditions: ['worker', 'browser'],
    entryPoints: ['./worker/index.ts'],
    external: ['__STATIC_CONTENT_MANIFEST'],
    format: 'esm',
    logLevel: 'warning',
    minify: process.env.NODE_ENV === 'production',
    outdir: './dist',
    platform: 'browser',
    target: 'es2020',
})
