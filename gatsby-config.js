module.exports = {
  siteMetadata: {
    name: 'Iiro Jäppinen',
    siteTitle: 'iiro.fi',
    siteUrl: 'https://iiro.fi/',
    nps: {
      api: {
        url: 'https://r5xu918qf0.execute-api.eu-central-1.amazonaws.com/prod/submit',
      },
      questions: [
        'How likely would you be to recommend Iiro as a designer?',
        'How likely would you be to recommend Iiro as a colleague?',
      ],
    },
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
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
            type: 'image/png',
          },
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2560,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
  ],
};
