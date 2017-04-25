const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.modifyWebpackConfig = ({config}) => {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, './src'),
      extensions: ['', '.js', '.jsx', '.json', '.css', '.module.css'],
    }
  })
  return
}

exports.onNodeCreate = ({ node, boundActionCreators, getNode }) => {
  const { updateNode } = boundActionCreators

  if ( node.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    node.slug = fileNode.slug
    if (node.frontmatter.path) {
        const path = node.frontmatter.path
        fileNode.slug = `/blog${path}`
        node.slug = `/blog${path}`
    }
    updateNode(node)
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { upsertPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        const pages = []
        const blogPost = path.resolve("src/components/BlogPost/index.js")
        graphql(
            `
            {
                allMarkdownRemark(limit: 1000, frontmatter: { draft: { ne: true }}) {
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
                resolve()
            }

            Object.keys(result.data.allMarkdownRemark.edges).forEach(key => {
                const edge = result.data.allMarkdownRemark.edges[key]
                upsertPage({
                    path: edge.node.slug,
                    component: blogPost,
                    context: {
                        slug: edge.node.slug,
                    }
                })
            })

            resolve()
        })
    })
}
