import config from "../../config";
import postJson from "../utils/post-json";

const { host, lambda } = config;
const { url, chat_id } = lambda.functions.telegram;

const headers = {
  "Access-Control-Allow-Origin": host,
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

  postJson(url, {
    chat_id,
    text: formatMessage(question, score, comment),
    parse_mode: "Markdown",
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
