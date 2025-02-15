import React, { type FC, type ReactNode } from "react";

const Html: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">{children}</html>
);

export default Html;
