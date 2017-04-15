module.exports = {
    siteMetadata: {
        name: 'Iiro Jäppinen',
        siteTitle: 'iiro.fi',
        siteUrl: 'https://iiro.fi/'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/pages`,
                name: 'pages',
            },
        },
        `gatsby-parser-remark`,
        {
            resolve: `gatsby-typegen-remark`,
            options: {
                plugins: [
                    'gatsby-typegen-remark-copy-linked-files',
                ],
            },
        },
        `gatsby-typegen-filesystem`
    ],
}
