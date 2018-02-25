export default {
  host: process.env.HOST,
  lambda: {
    base_url: process.env.LAMBDA_ENDPOINT,
    auth: process.env.LAMBDA_AUTH,
    functions: {
      telegram: {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        url: `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      },
    },
  },
};
