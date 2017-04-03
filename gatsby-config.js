module.exports = {
    siteMetadata: {
        city: 'Helsinki',
        country: 'Finland',
        dribbble: 'https://dribbble.com/iiroj',
        email: 'iiro@jappinen.fi',
        github: 'https://github.com/iiroj',
        jobTitle: 'UX & UI Designer',
        linkedin: 'https://fi.linkedin.com/in/iiroj',
        name: 'Iiro Jäppinen',
        siteTitle: 'iiro.fi',
        siteUrl: 'https://iiro.fi/',
        worksFor: 'Fraktio'
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
