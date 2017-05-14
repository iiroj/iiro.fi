module.exports = {
  siteMetadata: {
    name: 'Iiro Jäppinen',
    siteTitle: 'iiro.fi',
    siteUrl: 'https://iiro.fi/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 1280
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Iiro Jäppinen',
        short_name: 'iiro.fi',
        icons: [
          {
            src: '/icon.png',
            sizes: '1024x1024',
            type: 'image/png'
          }
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-preact'
  ]
}
