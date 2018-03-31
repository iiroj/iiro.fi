import request from "../utils/request";

const chat_id = process.env.TELEGRAM_CHAT_ID;
const url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
const headers = {
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

export function handler(event, context, callback) {
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 405,
      body: "",
    });
  }

  const { question, score, comment } = event.queryStringParameters;

  request({
    url,
    body: {
      chat_id,
      text: formatMessage(question, score, comment),
      parse_mode: "Markdown",
    },
  })
    .then(response => {
      return callback(null, {
        statusCode: response.ok ? 200 : 400,
        body: "",
        headers,
      });
    })
    .catch(error => {
      return callback(null, {
        statusCode: error === "timeout" ? 408 : 500,
        body: "",
        headers,
      });
    });
}
