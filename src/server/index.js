require("dotenv").config();

const next = require("next");
const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const purgeCloudflareCache = require("../utils/purge-cloudflare-cache");

const config = require("../config");
const { isProduction, port } = config;

const nextJs = next({ dev: !isProduction });
const handle = nextJs.getRequestHandler();

const apiRoutes = require("./api");

nextJs
  .prepare()
  .then(() => {
    const app = express();

    app.use(helmet());

    app.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'"],
          fontSrc: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          styleSrc: ["https://fonts.googleapis.com", "'unsafe-inline'"],
        },
      }),
    );

    app.use(bodyParser.json());

    app.use(morgan("tiny"));

    app.use("/api", apiRoutes);

    app.get("*", handle);

    app.listen(port, err => {
      if (err) throw err;
      console.log(`Server ready on http://localhost:${port}`);
    });
  })
  .then(() => {
    if (isProduction) {
      purgeCloudflareCache();
    }
  });
