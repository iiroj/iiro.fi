import { HelmetProvider } from "react-helmet-async";
import React from "react";
import { AppProps } from "next/app";

import Reset from "../components/Reset";

const App = ({ Component, pageProps }: AppProps) => {
  const helmet = React.useRef({});

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
