export default ({ app, helmet, js, state, version }) =>
  '<!DOCTYPE html>' +
  `<html lang="en" ${helmet.htmlAttributes.toString()}>` +
  '<head>' +
  '<meta charSet="utf-8" />' +
  helmet.title.toString() +
  `<meta name="version" content="${version}" />` +
  helmet.meta.toString() +
  '<link rel="manifest" href="/manifest.json">' +
  '<link rel="icon" href="/favicon.ico" type="image/x-icon" />' +
  '<link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />' +
  '<link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />' +
  '<meta httpEquiv="X-UA-Compatible" content="IE=edge" />' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
  '<meta name="theme-color" content="#4D4D4D">' +
  helmet.link.toString() +
  '<link rel="preconnect" href="https://fonts.gstatic.com">' +
  js +
  '</head>' +
  `<body ${helmet.bodyAttributes.toString()}>` +
  `<script id="initial-state" type="application/json">${state}</script>` +
  `<div id="root">${app}</div>` +
  '</body>' +
  '</html>';
