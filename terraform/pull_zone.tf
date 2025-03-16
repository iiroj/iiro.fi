
resource "bunnynet_compute_script" "http_headers" {
  name = "http-headers"
  type = "middleware"

  content = file("../bunny/scripting/http-headers.js")
}

resource "bunnynet_pullzone" "iiro" {
  name = "iiro"

  origin {
    type              = "StorageZone"
    storagezone       = bunnynet_storage_zone.iiro-fi-site.id
    middleware_script = bunnynet_compute_script.http_headers.id
  }

  routing {
    tier    = "Standard"
    zones   = ["EU"]
    filters = ["eu", "scripting"]
  }

  block_post_requests = true
  cache_enabled       = true # Smart cache
  cache_errors        = true
  cors_enabled        = false
  cors_extensions     = []
  tls_support         = []
}

resource "bunnynet_pullzone_edgerule" "redirect_canonical" {
  enabled     = true
  pullzone    = bunnynet_pullzone.iiro.id
  description = "Redirect requests to canonical domain"

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
      type       = "Url"
      match_type = "MatchNone"
      patterns   = ["https://iiro.fi*"]
      parameter1 = null
      parameter2 = null
    }
  ]
}
