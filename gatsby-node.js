const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.modifyWebpackConfig = ({ args }) => {
  const { config, stage } = args

  switch (stage) {
  case "develop":
    config.loader("sass", {
      test: /\.(sass|scss)$/,
      exclude: /\.module\.(sass|scss)$/,
      loaders: ["style", "css", "postcss", "sass"],
    })

    break

  case "build-css":
    config.loader("sass", {
      test: /\.(sass|scss)$/,
      exclude: /\.module\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract(["css?minimize", "postcss", "sass"]),
    })

    break

  case "build-html":
    config.loader("sass", {
      test: /\.(sass|scss)$/,
      exclude: /\.module\.(sass|scss)$/,
      loader: "null",
    })

    break

  case "build-javascript":
    config.loader("sass", {
      test: /\.(sass|scss)$/,
      exclude: /\.module\.(sass|scss)$/,
      loader: "null",
    })

    break
}

  return config
}

exports.modifyAST = ({ args }) => {
    const { ast } = args
    const files = select(ast, "File")
    files.forEach(file => {
        if (file.extension !== `md`) {
            return
        }
        const parsedFilePath = path.parse(file.relativePath)
        const slug = `/${parsedFilePath.dir}/`
        file.slug = slug
        const markdownNode = select(file, `MarkdownRemark`)[0]
        if (markdownNode) {
            markdownNode.slug = slug
        }
    })
    return files
}

exports.createPages = ({ args }) => {
    const { graphql } = args

    return new Promise((resolve, reject) => {
        const pages = []
        const blogPost = path.resolve("templates/template-blog-post.js")
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
                const blogPattern = /^blog\//

                if ( blogPattern.test(edge.node.slug) ) {
                    pages.push({
                        path: edge.node.slug,
                        component: blogPost,
                        context: {
                            slug: edge.node.slug,
                        },
                    })
                }
            })

            resolve(pages)
        })
    })
}
