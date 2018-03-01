import { request } from "https";
import { parse } from "url";

export default (url, data) =>
  new Promise((resolve, reject) => {
    const { host, pathname } = parse(url);

    const body = JSON.stringify(data);

    const params = {
      host,
      path: pathname,
      port: 443,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = request(params, res => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject("telegram");
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

    setTimeout(() => reject("timeout"), 5000);

    req.write(body);

    req.end();
  });
