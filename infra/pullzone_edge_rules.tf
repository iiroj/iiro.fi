resource "bunnynet_pullzone_edgerule" "block_cdn_hostname" {
  enabled     = true
  pullzone    = bunnynet_pullzone.iiro.id
  description = "Block requests to CDN Hostname"
  priority    = 2

  actions = [
    {
      type       = "BlockRequest"
      parameter1 = null
      parameter2 = null
      parameter3 = null
    }
  ]

  match_type = "MatchAll"

  triggers = [
    {
      match_type = "MatchAny"
      type       = "Url"
      patterns   = ["https://iiro.b-cdn.net/*"]
      parameter1 = null
      parameter2 = null
    }
  ]
}

resource "bunnynet_pullzone_edgerule" "redirect_www" {
  enabled     = true
  pullzone    = bunnynet_pullzone.iiro.id
  description = "Redirect www to apex"
  priority    = 3

  actions = [
    {
      type       = "Redirect"
      parameter1 = "https://iiro.fi{{path}}"
      parameter2 = "308"
      parameter3 = null
    }
  ]

  match_type = "MatchAll"

  triggers = [
    {
      match_type = "MatchAny"
      type       = "Url"
      patterns   = ["https://www.iiro.fi*"]
      parameter1 = null
      parameter2 = null
    }
  ]
}

resource "bunnynet_pullzone_edgerule" "response_headers" {
  enabled     = true
  pullzone    = bunnynet_pullzone.iiro.id
  description = "Response Headers"
  priority    = 4

  actions = [
    {
      type       = "SetResponseHeader"
      parameter1 = "Link"
      parameter2 = "</static/styles.css>; rel=preload; as=style"
      parameter3 = null
    },
    {
      type       = "SetResponseHeader"
      parameter1 = "Content-Security-Policy"
      parameter2 = "default-src 'self'; style-src 'self' 'sha256-${base64sha256(file("../public/static/styles.css"))}'"
      parameter3 = null
    },
    {
      type       = "SetResponseHeader"
      parameter1 = "Cross-Origin-Embedder-Policy"
      parameter2 = "require-corp"
      parameter3 = null
    },
    {
      type       = "SetResponseHeader"
      parameter1 = "Cross-Origin-Opener-Policy"
      parameter2 = "same-site"
      parameter3 = null
    },
    {
      type       = "SetResponseHeader"
      parameter1 = "Cross-Origin-Resource-Policy"
      parameter2 = "require-corp; same-site"
      parameter3 = null
    },
    {
      type       = "SetResponseHeader"
      parameter1 = "Permissions-Policy"
      parameter2 = "browsing-topics=(), conversion-measurement=(), interest-cohort=(), join-ad-interest-group=(), run-ad-auction=()"
      parameter3 = null

    },
    {
      type       = "SetResponseHeader"
      parameter1 = "Referrer-Policy"
      parameter2 = "strict-origin-when-cross-origin"
      parameter3 = null
    },
    {
      type       = "SetResponseHeader"
      parameter1 = "Strict-Transport-Security"
      parameter2 = "max-age=31536000; includeSubDomains"
      parameter3 = null
    },
    {
      type       = "SetResponseHeader"
      parameter1 = "X-Content-Type-Options"
      parameter2 = "nosniff"
      parameter3 = null
    },
    {
      type       = "SetResponseHeader"
      parameter1 = "X-Frame-Options"
      parameter2 = "DENY"
      parameter3 = null
    },
  ]

  match_type = "MatchAll"

  triggers = [
    {
      match_type = "MatchAny"
      type       = "StatusCode"
      patterns   = ["200"]
      parameter1 = null
      parameter2 = null
    },
    {
      match_type = "MatchNone"
      type       = "UrlExtension"
      patterns = [
        "ico",
        "jpg",
        "png",
        "txt",
        "webp",
      ]
      parameter1 = null
      parameter2 = null
    }
  ]
}
