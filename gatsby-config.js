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
                name: 'pages',
            },
        },
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-typegen-remark',
            options: {
                plugins: [
                    'gatsby-typegen-remark-responsive-image',
                    'gatsby-typegen-remark-prismjs',
                    'gatsby-typegen-remark-copy-linked-files',
                    'gatsby-typegen-remark-smartypants',
                ],
            },
        },
        'gatsby-typegen-filesystem',
        'gatsby-typegen-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-offline',
        'gatsby-plugin-preact'
    ]
}
