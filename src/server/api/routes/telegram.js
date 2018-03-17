const config = require("../../../../config");
const logger = require("../../../utils/logger");
const postJson = require("../../../utils/post-json");

const { host = "localhost", telegram } = config;
const { url, chat_id } = telegram;

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

module.exports = async (req, res, next) => {
  const { question, score, comment } = req.body;

  try {
    const { ok } = await logger("Send feedback to Telegram", () =>
      postJson(url, {
        chat_id,
        text: formatMessage(question, score, comment),
        parse_mode: "Markdown",
      }),
    );
    res.set(headers);
    res.sendStatus(ok ? 200 : 400);
  } catch (error) {
    res.set(headers);
    res.sendStatus(error === "timeout" ? 408 : 500);
  }
};
