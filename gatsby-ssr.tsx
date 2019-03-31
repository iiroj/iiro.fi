import * as React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider, FilledContext } from "react-helmet-async";

import Layout from "./src/components/Layout";

const helmetContext = {};

interface ElementProp {
  element: React.ReactElement;
}

export const wrapRootElement = ({ element }: ElementProp) => (
  <HelmetProvider context={helmetContext}>{element}</HelmetProvider>
);

export const wrapPageElement = ({ element }: ElementProp) => (
  <Layout>{element}</Layout>
);

interface ReplaceRenderer {
  bodyComponent: React.ReactElement;
  replaceBodyHTMLString(html: string): void;
  setHtmlAttributes(attr: React.HTMLAttributes<HTMLHtmlElement>): void;
  setBodyAttributes(attr: React.HTMLAttributes<HTMLBodyElement>): void;
  setHeadComponents(attr: React.Component[]): void;
}

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setBodyAttributes,
  setHeadComponents,
  setHtmlAttributes
}: ReplaceRenderer) => {
  const html = renderToString(bodyComponent);

  const { helmet } = helmetContext as FilledContext;

  replaceBodyHTMLString(html);
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent()
  ]);
};
