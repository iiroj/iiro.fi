const helmet = require("helmet");

module.exports = server => {
  server.use(helmet());

  server.use(
    helmet.referrerPolicy({
      policy: "no-referrer-when-downgrade",
    }),
  );

  server.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["https://fonts.googleapis.com", "'unsafe-inline'"],
      },
    }),
  );

  return server;
};
