module.exports = {
    siteMetadata: {
        name: `Iiro Jäppinen`,
        siteTitle: 'iiro.fi',
        siteUrl: `https://iiro.fi/`
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
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Iiro Jäppinen`,
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
        'gatsby-plugin-offline',
        'gatsby-plugin-preact'
    ]
}
