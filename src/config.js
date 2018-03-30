require("dotenv").config();

module.exports = {
  isProduction: process.env.NODE_ENV === "production",
  host: process.env.HOST,
  port: process.env.PORT,
  cloudflare: {
    zone: process.env.CLOUDFLARE_ZONE,
    email: process.env.CLOUDFLARE_EMAIL,
    apiKey: process.env.CLOUDFLARE_API_KEY,
  },
  telegram: {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    url: `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
  },
};
