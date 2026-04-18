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
  log_enabled                   = false
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
    ]
    allowed_http_versions = [
      "HTTP/1.1",
      "HTTP/2",
      "HTTP/2.0",
    ]
    allowed_request_content_types = [
      "text/plain",
    ]
    body_limit_request    = "Block"
    blocking_sensitivity  = 4
    detection_sensitivity = 4
    execution_sensitivity = 4
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
