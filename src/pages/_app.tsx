import { AppProps } from "next/app";
import Head from "next/head";
import { HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";

import Reset from "../components/Reset";
import { GOOGLE_FONTS_URL } from "../constants/fonts";
import { useServiceWorkerRegistrations } from "../hooks";

const App = ({ Component, pageProps }: AppProps) => {
  const helmet = React.useRef({});

  const registrations = useServiceWorkerRegistrations();
  useEffect(() => {
    if (registrations.length === 0) return;
    for (const registration of registrations) {
      registration.unregister();
    }
  }, [registrations]);

  return (
    <>
      <Head>
        <link
          crossOrigin="anonymous"
          href={GOOGLE_FONTS_URL}
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="mask-icon" href="/icon.svg" color="#333333" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Reset />
      <HelmetProvider context={helmet.current}>
        <Component {...pageProps} helmetContext={helmet.current} />
      </HelmetProvider>
    </>
  );
};

export default App;
