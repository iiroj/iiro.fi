const { request } = require("https");
const { parse } = require("url");

module.exports = ({ method, url, body: data, headers }) =>
  new Promise((resolve, reject) => {
    const { host, pathname } = parse(url);

    const body = JSON.stringify(data);

    const params = {
      host,
      path: pathname,
      port: 443,
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
        ...headers,
      },
    };

    const req = request(params, res => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(res.statusCode);
      }
      var body = [];
      res.on("data", chunk => body.push(chunk));
      res.on("end", () => {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (error) {
          return reject(error);
        }
        return resolve(body);
      });
    });

    req.on("error", error => reject(error));

    setTimeout(() => reject("timeout"), 10000);

    req.write(body);

    req.end();
  });
