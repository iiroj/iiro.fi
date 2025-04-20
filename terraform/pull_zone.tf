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
  tls_support                   = []
  use_background_update         = true
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
      match_type = "MatchNone"
      type       = "Url"
      patterns   = ["https://iiro.fi*"]
      parameter1 = null
      parameter2 = null
    }
  ]
}
