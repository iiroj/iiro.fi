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
        mergeCachingHeaders: false
      }
    }
  ]
};
