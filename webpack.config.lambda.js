require("dotenv/config");

const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.LAMBDA_CORS": JSON.stringify(process.env.LAMBDA_CORS),
      "process.env.TELEGRAM_CHAT_ID": JSON.stringify(
        process.env.TELEGRAM_CHAT_ID
      ),
      "process.env.TELEGRAM_TOKEN": JSON.stringify(process.env.TELEGRAM_TOKEN)
    })
  ]
};
