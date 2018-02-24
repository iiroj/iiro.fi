export default {
  host: process.env.HOST,
  lambda: {
    telegram: {
      endpoint: process.env.TELEGRAM_LAMBDA_ENDPOINT,
      chat_id: process.env.TELEGRAM_CHAT_ID,
      url: `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
    },
  },
};
