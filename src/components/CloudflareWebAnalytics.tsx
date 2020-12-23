import * as React from "react";
import { Helmet } from "react-helmet-async";

const SRC = "https://static.cloudflareinsights.com/beacon.min.js";

const token = process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN;

const config = JSON.stringify({ token });

const CloudflareWebAnalytics = () =>
  token ? (
    <Helmet>
      <script defer src={SRC} data-cf-beacon={config}></script>
    </Helmet>
  ) : null;

export default CloudflareWebAnalytics;
