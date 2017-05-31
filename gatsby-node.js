const path = require('path')
const fs = require('fs-extra')

exports.modifyWebpackConfig = ({config}) => {
  config.merge({
    resolve: {
      root: `${__dirname}/src`,
      extensions: ['', '.js', '.jsx', '.json', '.css', '.module.css']
    }
  })
}

exports.onNodeCreate = ({ node, boundActionCreators, getNode }) => {
  const { addFieldToNode } = boundActionCreators

  if (node.internal.type === 'File' && typeof node.fields === 'undefined') {
    const parsedFilePath = path.parse(node.absolutePath)
    const slug = `/${parsedFilePath.dir.split('---')[1]}/`
    addFieldToNode({
     node,
     fieldName: 'slug',
     fieldValue: slug,
   })
  } else if (node.internal.type === 'MarkdownRemark' && typeof node.frontmatter.slug !== 'undefined') {
    addFieldToNode({
     node,
     fieldName: 'slug',
     fieldValue: `/${node.frontmatter.slug}/`,
   })
  } else if (node.internal.type === 'MarkdownRemark' && typeof node.fields === 'undefined') {
    const fileNode = getNode(node.parent)
    addFieldToNode({
     node,
     fieldName: 'slug',
     fieldValue: fileNode.fields.slug,
   })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { upsertPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = `${__dirname}/src/components/BlogPost/index.js`
    graphql(
      `{
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
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
          path: edge.node.fields.slug,
          component: blogPost,
          context: {
            slug: edge.node.fields.slug
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
