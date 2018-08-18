require('dotenv/config');

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env.LAMBDA_BASE_URL': JSON.stringify(process.env.LAMBDA_BASE_URL)
      })
    ]
  });
};
