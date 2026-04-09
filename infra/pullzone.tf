resource "bunnynet_pullzone" "iiro" {
  name = "iiro"

  origin {
    type        = "StorageZone"
    storagezone = bunnynet_storage_zone.storage.id
  }

  routing {
    tier    = "Standard"
    zones   = ["EU"]
    filters = ["eu"]
  }

  block_post_requests           = true
  cache_enabled                 = false    // Smart cache
  cache_expiration_time         = 31919000 // cache for 1 year on server
  cache_expiration_time_browser = 0        // don't cache in browser
  cache_errors                  = true
  cache_stale                   = ["updating"]
  cors_enabled                  = false
  cors_extensions               = []
  limit_burst                   = 18
  limit_requests                = 9
  tls_support                   = []
  use_background_update         = true
  websockets_enabled            = false
}

resource "bunnynet_pullzone_shield" "shield" {
  pullzone = bunnynet_pullzone.iiro.id
  tier     = "Basic"

  ddos {
    level            = "High"
    mode             = "Block"
    challenge_window = 900
  }

  waf {
    enabled = true
    mode    = "Block"
    allowed_http_methods = [
      "GET",
      "HEAD",
      "OPTIONS",
    ]
    allowed_http_versions = [
      "HTTP/1.0",
      "HTTP/1.1",
      "HTTP/2",
      "HTTP/2.0",
    ]
    allowed_request_content_types = [
      "application/csp-report",
      "application/json",
      "application/xss-auditor-report",
      "text/plain",
      "text/xml",
    ]
    blocking_sensitivity  = 3
    body_limit_request    = "Block"
    detection_sensitivity = 3
    execution_sensitivity = 3
    log_headers           = true
    log_headers_excluded  = []
  }
}

resource "bunnynet_pullzone_ratelimit_rule" "http_errors" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "Ratelimit HTTP errors"
  description = "Ratelimit HTTP errors"

  condition {
    variable = "RESPONSE_STATUS"
    operator = "GT"
    value    = "200"
  }

  limit {
    requests = 3
    interval = 10
  }

  response {
    interval = 60
  }
}

resource "bunnynet_pullzone_edgerule" "redirect_cdn_hostname" {
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

resource "bunnynet_pullzone_edgerule" "redirect_canonical" {
  enabled     = true
  pullzone    = bunnynet_pullzone.iiro.id
  description = "Redirect requests to canonical domain"
  priority    = 2

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
