require('dotenv').config();

module.exports = {
  proxy: {
    prefix: '/.netlify/functions',
    url: 'http://localhost:9000'
  },

  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            "Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data:; connect-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;",
            'Referrer-Policy: origin-when-cross-origin'
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
