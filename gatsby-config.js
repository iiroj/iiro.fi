require('dotenv').config();

const proxy = require('http-proxy-middleware');

module.exports = {
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': ''
        }
      })
    );
  },

  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: 'iiro.fi',
        name: 'Iiro Jäppinen',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#4D4D4D',
        display: 'standalone',
        serviceworker: {
          src: '/sw.js',
          scope: '/',
          update_via_cache: 'none'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'Cache-Control: public, max-age=2592000, no-cache',
            "Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data:; connect-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;",
            'Referrer-Policy: origin-when-cross-origin'
          ],
          '/sw.js': ['Cache-Control: max-age=0, no-cache, no-store, must-revalidate', 'Expires: 0', 'Pragma: no-cache']
        },
        mergeCachingHeaders: false
      }
    }
  ]
};
