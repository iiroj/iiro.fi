import React from "react";
import Helmet from "react-helmet-async";

import Chat from "./components/Chat";

const microdata = JSON.stringify({
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Iiro Jäppinen",
  jobTitle: "Designer",
  worksFor: {
    "@type": "Organization",
    name: "Fraktio",
    url: "https://fraktio.fi"
  },
  url: "https://iiro.fi/",
  email: "iiro@jappinen.fi",
  nationality: "Finland",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Finland",
    addressLocality: "Helsinki"
  },
  sameAs: [
    "https://twitter.com/iirojappinen",
    "https://fi.linkedin.com/in/iiroj",
    "https://github.com/iiroj"
  ]
});

const Root = () => (
  <>
    <Helmet>
      <title>Iiro Jäppinen</title>
      <script type="application/ld+json">{microdata}</script>
    </Helmet>
    <Chat />
  </>
);

export default Root;
