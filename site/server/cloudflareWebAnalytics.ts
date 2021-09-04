const { CF_WEB_ANALYTICS_TOKEN } = process.env

export const webAnalytics = CF_WEB_ANALYTICS_TOKEN
    ? `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${CF_WEB_ANALYTICS_TOKEN}"}'></script>`
    : ''
