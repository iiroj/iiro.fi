require("ts-node/register");

const path = require("path");

const fontPreload = [
  "https://fonts.gstatic.com/s/ibmplexserif/v7/jizAREVNn1dOx-zrZ2X3pZvkTi20-SI0q1vjitOh.woff2",
  "https://fonts.gstatic.com/s/ibmplexsanscondensed/v5/Gg8lN4UfRSqiPg7Jn2ZI12V4DCEwkj1E4LVeHYapyK7Bh4sN.woff2",
  "https://fonts.gstatic.com/s/ibmplexsanscondensed/v5/Gg8gN4UfRSqiPg7Jn2ZI12V4DCEwkj1E4LVeHY527LvspYYnFBq4.woff2"
].map(url => `Link: <${url}>; rel=preload; as=font`);

const cspConfig = [
  "default-src 'none'",
  "connect-src 'self' https://fonts.gstatic.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://*.cloudfront.net",
  "object-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com"
];

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images")
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        allPageHeaders: [
          `Content-Security-Policy: ${cspConfig.join("; ")}`,
          "Feature-Policy: default 'none'",
          "Referrer-Policy: no-referrer-when-downgrade",
          ...fontPreload
        ]
      }
    }
  ]
};
