module.exports = {
  siteMetadata: {
    name: 'Iiro Jäppinen',
    siteTitle: 'iiro.fi',
    siteUrl: 'https://iiro.fi/',
    feedback: {
      api: {
        url: 'https://s7ozycgh27.execute-api.eu-central-1.amazonaws.com/prod/submit',
      },
      questions: [
        'How likely would you be to recommend Iiro as a designer?',
        'How likely would you be to recommend Iiro as a colleague?',
      ],
    },
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
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
    'gatsby-plugin-sharp',
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
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://s7ozycgh27.execute-api.eu-central-1.amazonaws.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:;`,
          `Referrer-Policy': origin-when-cross-origin`,
          `X-Content-Type-Options: nosniff`,
          `X-Frame-Options: DENY`,
          `X-XSS-Protection: 1; mode=block`,
          `Link: </fonts/iosevka-regular.woff>; rel=preload; as=font`,
          `Link: </fonts/iosevka-regular.woff2>; rel=preload; as=font`,
          `Link: </fonts/roboto-bold.woff>; rel=preload; as=font`,
          `Link: </fonts/roboto-bold.woff2>; rel=preload; as=font`,
          `Link: </fonts/roboto-bolditalic.woff>; rel=preload; as=font`,
          `Link: </fonts/roboto-bolditalic.woff2>; rel=preload; as=font`,
          `Link: </fonts/roboto-italic.woff>; rel=preload; as=font`,
          `Link: </fonts/roboto-italic.woff2>; rel=preload; as=font`,
          `Link: </fonts/roboto-medium.woff>; rel=preload; as=font`,
          `Link: </fonts/roboto-medium.woff2>; rel=preload; as=font`,
          `Link: </fonts/roboto-mediumitalic.woff>; rel=preload; as=font`,
          `Link: </fonts/roboto-mediumitalic.woff2>; rel=preload; as=font`,
          `Link: </fonts/roboto-regular.woff>; rel=preload; as=font`,
          `Link: </fonts/roboto-regular.woff2>; rel=preload; as=font`,
        ],
        headers: {
          '/': [
            `Link: </d.svg>; rel=preload; as=image`,
            `Link: </e.svg>; rel=preload; as=image`,
            `Link: </gh.svg>; rel=preload; as=image`,
            `Link: </gl.svg>; rel=preload; as=image`,
            `Link: </l.svg>; rel=preload; as=image`,
            `Link: </t.svg>; rel=preload; as=image`,
          ],
        },
        mergeSecurityHeaders: false,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
  ],
};
