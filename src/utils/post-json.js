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
        reject(res);
      }

      resolve(res);
    });

    req.on("error", err => reject({ statusCode: 500, statusMessage: err }));

    req.write(body);
    req.end();
  });
