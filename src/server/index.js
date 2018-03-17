require("dotenv").config();

const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const config = require("../../config");
const { isProduction, port } = config;

const nextJs = next({ dev: !isProduction });
const handle = nextJs.getRequestHandler();

const apiRoutes = require("./api");

nextJs.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());
  app.use(morgan("tiny"));

  app.use("/api", apiRoutes);

  app.get("*", handle);

  app.listen(port, err => {
    if (err) throw err;
    console.log(`Server ready on http://localhost:${port}`);
  });
});
