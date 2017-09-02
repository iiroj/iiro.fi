const path = require('path');

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    resolve: {
      root: `${__dirname}/src`,
      extensions: ['', '.js', '.jsx'],
    },
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'File' && typeof node.fields === 'undefined') {
    const parsedFilePath = path.parse(node.absolutePath);
    const slug = `/${parsedFilePath.dir.split('---')[1]}/`;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  } else if (node.internal.type === 'MarkdownRemark' && typeof node.frontmatter.slug !== 'undefined') {
    createNodeField({
      node,
      name: 'slug',
      value: `/${node.frontmatter.slug}/`,
    });
  } else if (node.internal.type === 'MarkdownRemark' && typeof node.fields === 'undefined') {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'slug',
      value: fileNode.fields.slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = `${__dirname}/src/components/BlogPost/index.js`;
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
        console.log(result.errors);
        resolve();
      }

      Object.keys(result.data.allMarkdownRemark.edges).forEach(key => {
        const edge = result.data.allMarkdownRemark.edges[key];
        createPage({
          path: edge.node.fields.slug,
          component: blogPost,
          context: {
            slug: edge.node.fields.slug,
          },
        });
      });

      resolve();
    });
  });
};
