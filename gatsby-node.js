const path = require("path")
const fs = require(`fs-extra`)

exports.modifyWebpackConfig = ({config}) => {
  config.merge({
    resolve: {
      root: `${__dirname}/src`,
      extensions: ['', '.js', '.jsx', '.json', '.css', '.module.css'],
    }
  })
  return
}

exports.onNodeCreate = ({ node, boundActionCreators, getNode }) => {
    const { updateNode } = boundActionCreators

    if (node.type === 'File' && typeof node.slug === 'undefined') {
        const parsedFilePath = path.parse(node.absolutePath)
        const slug = `/${parsedFilePath.dir.split("---")[1]}/`
        node.slug = slug
        updateNode(node)
    } else if ( node.type === 'MarkdownRemark' && typeof node.frontmatter.slug !== "undefined" ) {
        node.slug = `/${node.frontmatter.slug}/`
        updateNode(node)
    } else if ( node.type === 'MarkdownRemark' && typeof node.slug === 'undefined' ) {
        const fileNode = getNode(node.parent)
        node.slug = fileNode.slug
        updateNode(node)
    }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { upsertPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        const pages = []
        const blogPost = `${__dirname}/src/components/BlogPost/index.js`
        graphql(
`{
    allMarkdownRemark(limit: 1000) {
        edges {
            node {
                slug
            }
        }
    }
}`
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

exports.postBuild = () => {
  fs.copySync('./src/pages/favicon.ico', './public/favicon.ico')
  fs.copySync('./src/pages/icon.png', './public/icon.png')
}
