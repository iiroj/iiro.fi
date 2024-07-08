import React from "react";

const Head = () => (
  <>
    <meta charSet="utf-8" />
    <link
      href="/static/styles.css"
      rel="stylesheet"
      integrity="sha384-QGI3d3fuvjdMoD/QcANuoE0eMFeRyDv3OTFfz9AGURb2dy3VWu0/fVe1dHi3acIH"
    />
    <link rel="apple-touch-icon" href="/static/icon-512.png" />
    <meta name="description" content="Principal Engineer at SOK" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta property="og:image" content="/static/profile-512.png" />
    <meta
      property="og:title"
      content="Iiro Jäppinen, Principal Engineer at SOK"
    />
    <meta
      property="og:description"
      content="I build web experiences, develop tooling, and maintain open-source libraries."
    />
    <meta property="og:url" content="https://iiro.fi" />
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "2dcdc91efcdc4bb79f51ea6813121a74"}'
    ></script>
  </>
);

export default Head;
