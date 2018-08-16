require('dotenv').config({
  path: '.env.development'
});

const requestPromise = require('minimal-request-promise');

const chat_id = process.env.TELEGRAM_CHAT_ID;
const url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
const headers = {
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': process.env.LAMBDA_CORS
};

exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'OPTIONS') {
    return callback(null, {
      statusCode: 200,
      body: '',
      headers: {
        ...headers,
        Allow: 'OPTIONS, POST'
      }
    });
  }

  if (event.httpMethod !== 'POST') {
    console.log(`Incorrect HTTP method ${event.httpMethod}`);

    return callback(null, {
      statusCode: 405,
      body: ''
    });
  }

  console.log('Posting to Telegram');

  requestPromise
    .post(url, {
      body: JSON.stringify({
        chat_id,
        text: JSON.parse(event.body).text,
        parse_mode: 'Markdown'
      })
    })
    .then(() => {
      console.log(`Succesfully posted to Telegram`);
      return callback(null, { statusCode: 204, headers });
    })
    .catch(response => {
      const { description, error_code } = response.data;
      console.log(`Telegram: ${error_code} — ${description}`);
      return callback(null, { statusCode: 500, headers });
    });
};
