import React, { type FunctionComponent } from "react";

export const CloudflareBeacon: FunctionComponent<{ token: string }> = ({
  token,
}) => (
  <script
    defer
    src="https://static.cloudflareinsights.com/beacon.min.js"
    data-cf-beacon={JSON.stringify({ token })}
  />
);

CloudflareBeacon.displayName = "CloudflareBeacon";
