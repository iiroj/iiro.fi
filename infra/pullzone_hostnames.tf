resource "bunnynet_pullzone_hostname" "bunnynet" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "iiro.b-cdn.net"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_hostname" "iiro_fi" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "iiro.fi"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_hostname" "www_iiro_fi" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "www.iiro.fi"
  tls_enabled = true
  force_ssl   = true
}
