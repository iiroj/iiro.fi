require('dotenv/config');

const cspConfig = [
  "connect-src 'self' https://fonts.gstatic.com;",
  "default-src 'none';",
  "font-src 'self' https://fonts.gstatic.com;",
  "img-src 'self' data: https://*.cloudfront.net;",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
];

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            `Content-Security-Policy: ${cspConfig.join(' ')}`,
            "Feature-Policy: 'none'",
            'Referrer-Policy: no-referrer-when-downgrade'
          ]
        },
        mergeCachingHeaders: false,
        transformHeaders: (headers, path) =>
          path.endsWith('/') || path.endsWith('.html')
            ? headers.concat(
                'Link: <https://fonts.gstatic.com/s/ibmplexsans/v2/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2>; rel=preload; as=font',
                'Link: <https://fonts.gstatic.com/s/ibmplexsans/v2/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZJW9XjDg.woff2>; rel=preload; as=font'
              )
            : headers
      }
    }
  ]
};
