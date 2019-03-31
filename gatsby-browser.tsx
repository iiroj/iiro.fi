import * as React from "react";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./src/components/Layout";

interface ElementProp {
  element: React.ReactElement;
}

export const wrapRootElement = ({ element }: ElementProp) => (
  <HelmetProvider>{element}</HelmetProvider>
);

export const wrapPageElement = ({ element }: ElementProp) => (
  <Layout>{element}</Layout>
);
