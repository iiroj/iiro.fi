import { post } from "axios";

const chat_id = process.env.TELEGRAM_CHAT_ID;
const url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
const headers = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": process.env.HOST,
};

const hearts = score =>
  Array.from(Array(7).keys())
    .reduce((hearts, star, index) => {
      if (index < score) {
        return hearts.concat("❤️");
      } else {
        return hearts.concat("🖤");
      }
    }, [])
    .join(" ");

const formatMessage = (question, score, comment) => `*${question}*
${hearts(score)} (${score} / 7)${
  comment
    ? `

💬 _${comment}_`
    : ""
}`;

exports.handler = function(event, context, callback) {
  if (event.httpMethod === "OPTIONS") {
    return callback(null, {
      statusCode: 200,
      body: "",
      headers: {
        ...headers,
        Allow: "OPTIONS, POST",
      },
    });
  }

  if (event.httpMethod !== "POST") {
    console.log(`Incorrect HTTP method ${event.httpMethod}`);

    return callback(null, {
      statusCode: 405,
      body: "",
    });
  }

  const { question, score, comment } = JSON.parse(event.body);

  console.log(`Posting to Telegram: ${score}/7`);

  post(url, {
    chat_id,
    text: formatMessage(question, score, comment),
    parse_mode: "Markdown",
  })
    .then(() => {
      console.log(`Succesfully posted to Telegram`);

      return callback(null, {
        statusCode: 200,
        body: "",
        headers,
      });
    })
    .catch(({ response }) => {
      const { description, error_code } = response.data;

      console.log(`Telegram: ${error_code} — ${description}`);

      return callback(null, {
        statusCode: 500,
        body: "",
        headers,
      });
    });
};
