module.exports = {
    siteMetadata: {
        title: 'iiro.fi',
        author: 'Iiro Jäppinen',
        url: 'https://iiro.fi'
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
