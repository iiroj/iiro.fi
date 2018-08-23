require('dotenv/config');

const isProduction = process.env.NODE_ENV === 'production';

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
    options: {
      autolabel: !isProduction,
      hoist: isProduction,
      sourceMap: !isProduction
    }
  });
};

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env.LAMBDA_BASE_URL': JSON.stringify(process.env.LAMBDA_BASE_URL)
      })
    ]
  });
};
