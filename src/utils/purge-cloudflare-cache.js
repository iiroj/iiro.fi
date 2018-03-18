const logger = require("./logger");
const request = require("./request");
const config = require("../config");

const { apiKey, email, zone } = config.cloudflare;

const url = `https://api.cloudflare.com/client/v4/zones/${zone}/purge_cache`;

module.exports = async () => {
  try {
    await logger("Purge Cloudflare Cache", () =>
      request({
        method: "DELETE",
        url,
        body: {
          purge_everything: true,
        },
        headers: {
          "X-Auth-Email": email,
          "X-Auth-Key": apiKey,
        },
      }),
    );
  } catch (error) {
    console.log("Failed to purge Cloudflare cache:", error);
  }
};
