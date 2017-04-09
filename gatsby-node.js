const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.modifyAST = ({ args }) => {
    const { ast } = args
    const files = select(ast, "File")
    files.forEach(file => {
        if (file.extension !== `md`) {
            return
        }
        const parsedFilePath = path.parse(file.absolutePath)
        const slug = `/${parsedFilePath.dir}/`;
        file.slug = slug
        const markdownNode = select(file, `MarkdownRemark`)[0]
        if (markdownNode) {
            markdownNode.slug = slug
            if (markdownNode.frontmatter.path) {
                const path = markdownNode.frontmatter.path
                file.slug = `/blog${path}`
                markdownNode.slug = `/blog${path}`
            }
        }
    })
    return files
}

exports.createPages = ({ args }) => {
    const { graphql } = args

    return new Promise((resolve, reject) => {
        const pages = []
        const blogPost = path.resolve("components/BlogPost/index.js")
        graphql(
            `
            {
                allMarkdownRemark(limit: 1000) {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
            `
        ).then(result => {
            if (result.errors) {
                console.log(result.errors)
                reject(result.errors)
            }

            Object.keys(result.data.allMarkdownRemark.edges).forEach(key => {
                const edge = result.data.allMarkdownRemark.edges[key]
                pages.push({
                    path: edge.node.slug,
                    component: blogPost,
                    context: {
                        slug: edge.node.slug,
                    }
                })
            })

            resolve(pages)
        })
    })
}
