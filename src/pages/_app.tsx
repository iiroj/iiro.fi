import { HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";
import { AppProps } from "next/app";

import Reset from "../components/Reset";
import { useServiceWorkerRegistrations } from "../hooks";

const App = ({ Component, pageProps }: AppProps) => {
  const helmet = React.useRef({});

  const registrations = useServiceWorkerRegistrations();
  useEffect(() => {
    if (registrations.length === 0) return;
    for (const registration of registrations) {
      console.log("registration", registration);
      registration.unregister();
    }
  }, [registrations]);

  return (
    <>
      <Reset />
      <HelmetProvider context={helmet.current}>
        <Component {...pageProps} helmetContext={helmet.current} />
      </HelmetProvider>
    </>
  );
};

export default App;
