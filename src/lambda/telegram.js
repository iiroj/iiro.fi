import fetch from "node-fetch";
import { createHash } from "crypto";
import { parse } from "qs";

import config from "../../config";

const { host, lambda } = config;
const { url, chat_id } = lambda.functions.telegram;
const serverToken = createHash("sha256")
  .update(lambda.auth)
  .digest("hex");
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
  const { body } = event;
  const { token, question, score, comment } = parse(body);

  if (serverToken !== token) {
    return callback(null, { statusCode: 403, headers });
  }

  return sendMessageToTelegram(question, score, comment)
    .then(() => callback(null, { statusCode: 200, headers }))
    .catch(error => callback(error, { statusCode: 400, headers }));
}
