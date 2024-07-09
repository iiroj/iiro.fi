import React, { type FunctionComponent, type ReactNode } from "react";

const Html: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">{children}</html>
);

Html.displayName = "Html";

export default Html;
