
resource "bunnynet_pullzone_edgerule" "block_cdn_hostname" {
  enabled     = true
  pullzone    = bunnynet_pullzone.iiro.id
  description = "Block Requests to CDN Hostname"
  priority    = 1

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

locals {
  allowed_paths = concat(
    ["*/", "*/404"],
    [
      for f in fileset(path.module, "../public/**") : replace(f, "../public/", "*/")
      if !endswith(f, ".html")
    ]
  )

  // Supports up to 5 patterns per trigger rule
  pattern_chunks = chunklist(local.allowed_paths, 5)
}

resource "bunnynet_pullzone_edgerule" "not_found" {
  enabled     = true
  pullzone    = bunnynet_pullzone.iiro.id
  description = "Not Found Requests"
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

  triggers = [for patterns in local.pattern_chunks : {
    match_type = "MatchNone"
    type       = "Url"
    patterns : patterns
    parameter1 = null
    parameter2 = null
  }]
}

resource "bunnynet_pullzone_edgerule" "redirect_canonical" {
  enabled     = true
  pullzone    = bunnynet_pullzone.iiro.id
  description = "Redirect requests to canonical domain"
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
