import React from "react";
import PropTypes from "prop-types";

import favicon from "./favicon.ico";
import icon from "./icon.png";

const Html = ({ bundle, children, css, head }) => (
  <html lang="fi">
    <head>
      {head.title.toComponent()}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {head.meta.toComponent()}
      <link rel="favicon" href={favicon} />
      <link rel="icon" sizes="600x600" href={icon} />
      <link rel="apple-touch-icon" href={icon} />
      <link rel="preload stylesheet" href="https://fonts.googleapis.com/css?family=Spectral:400,600" as="style" />
      {head.link.toComponent()}
      {css}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
      <script defer type="text/javascript" src={bundle} />
    </body>
  </html>
);

Html.propTypes = {
  bundle: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  head: PropTypes.shape({
    title: PropTypes.shape({
      toComponent: PropTypes.func.isRequired,
    }),
    meta: PropTypes.shape({
      toComponent: PropTypes.func.isRequired,
    }),
    link: PropTypes.shape({
      toComponent: PropTypes.func.isRequired,
    }),
  }).isRequired,
  css: PropTypes.array.isRequired,
};

export default Html;
