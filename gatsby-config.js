module.exports = {
    siteMetadata: {
        name: "Iiro Jäppinen",
        siteTitle: "iiro.fi",
        siteUrl: "https://iiro.fi/"
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-typegen-remark",
            options: {
                plugins: [
                    "gatsby-typegen-remark-prismjs",
                    "gatsby-typegen-remark-copy-linked-files",
                    "gatsby-typegen-remark-smartypants",
                ],
            },
        },
        "gatsby-typegen-filesystem"
    ],
}
