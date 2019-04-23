exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  headers["link"] = [
    {
      key: "Link",
      value:
        "<https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400,600|IBM+Plex+Serif:300>;crossorigin=anonymous;rel=preload;as=style;"
    }
  ];

  headers["content-security-policy"] = [
    {
      key: "Content-Security-Policy",
      value: [
        "default-src 'none'",
        "connect-src 'self' https://fonts.gstatic.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data:",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "worker-src 'self'"
      ].join(";")
    }
  ];

  headers["strict-transport-security"] = [
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubdomains; preload"
    }
  ];
  headers["x-content-type-options"] = [
    { key: "X-Content-Type-Options", value: "nosniff" }
  ];
  headers["x-frame-options"] = [{ key: "X-Frame-Options", value: "DENY" }];
  headers["x-xss-protection"] = [
    { key: "X-XSS-Protection", value: "1; mode=block" }
  ];
  headers["referrer-policy"] = [
    { key: "Referrer-Policy", value: "same-origin" }
  ];
  headers["feature-policy"] = [
    { key: "Feature-Policy", value: "default 'none'" }
  ];

  callback(null, response);
};
