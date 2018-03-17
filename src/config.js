module.exports = {
  isProduction: process.env.NODE_ENV === "production",
  host: process.env.HOST,
  port: process.env.PORT,
  telegram: {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    url: `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
  },
};
