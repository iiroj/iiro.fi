const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const config = require("../config");
const { isProduction, port } = config;

const addSecurityHeaders = require("../utils/security-headers");
const stripWWW = require("../utils/strip-www");
const purgeCloudflareCache = require("../utils/purge-cloudflare-cache");

const app = next({ dev: !isProduction });
const handle = app.getRequestHandler();

const apiRoutes = require("./api");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(stripWWW);

    addSecurityHeaders(server);

    server.use(bodyParser.json());

    server.use(morgan("tiny"));

    server.use("/api", apiRoutes);

    server.get("*", handle);

    server.listen(port, err => {
      if (err) throw err;
      console.log(`Server ready on http://localhost:${port}`);
    });
  })
  .then(() => {
    if (isProduction) {
      purgeCloudflareCache();
    }
  });
