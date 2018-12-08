/* eslint no-console: 0 */

const requestPromise = require("minimal-request-promise");

const chat_id = process.env.TELEGRAM_CHAT_ID;

const url = `https://api.telegram.org/bot${
  process.env.TELEGRAM_TOKEN
}/sendMessage`;

const headers = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": process.env.LAMBDA_CORS
};

exports.handler = (event, context, callback) => {
  const { body, httpMethod } = event;

  if (httpMethod === "OPTIONS") {
    return callback(null, {
      statusCode: 200,
      body: "",
      headers: Object.assign(headers, {
        Allow: "OPTIONS, POST"
      })
    });
  }

  if (httpMethod !== "POST") {
    console.error(`Incorrect HTTP method ${httpMethod}`);

    return callback(null, {
      statusCode: 405,
      body: ""
    });
  }

  console.log("Posting to Telegram");

  requestPromise
    .post(url, {
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        chat_id,
        text: JSON.parse(body),
        parse_mode: "Markdown"
      })
    })
    .then(() => {
      console.log(`Succesfully posted to Telegram`);
      return callback(null, { statusCode: 204, headers });
    })
    .catch(response => {
      const { description, error_code } = response.body;
      console.error(`Telegram: ${error_code} — ${description}`);
      return callback(null, { statusCode: 500, headers });
    });
};
