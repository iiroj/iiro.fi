import fetch from "node-fetch";
import { parse } from "qs";

import config from "../../config";

const { host, lambda: { telegram: { chat_id, url } } } = config;
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

const sendMessageToTelegram = (question, score, comment) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id,
      text: formatMessage(question, score, comment),
      parse_mode: "Markdown",
    }),
  }).catch(error => {
    throw error;
  });

export function handler(event, context, callback) {
  const { body, headers: { origin } } = event;

  if (origin !== host) {
    return callback(null, { statusCode: 403, headers });
  }

  const { question, score, comment } = parse(body);

  return sendMessageToTelegram(question, score, comment)
    .then(() => callback(null, { statusCode: 200, headers }))
    .catch(error => callback(error, { statusCode: 400, headers }));
}
