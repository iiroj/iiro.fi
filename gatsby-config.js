module.exports = {
    siteMetadata: {
        title: 'iiro.fi',
        author: 'Iiro Jäppinen',
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
