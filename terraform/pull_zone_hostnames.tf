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

resource "bunnynet_pullzone_hostname" "jappinen_fi" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "jappinen.fi"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_hostname" "www_jappinen_fi" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "www.jappinen.fi"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_hostname" "iiro_jappinen_fi" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "iiro.jappinen.fi"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_hostname" "xn--jppinen-5wa_fi" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "xn--jppinen-5wa.fi"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_hostname" "www_xn--jppinen-5wa_fi" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "www.xn--jppinen-5wa.fi"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_hostname" "iiro_xn--jppinen-5wa_fi" {
  pullzone    = bunnynet_pullzone.iiro.id
  name        = "iiro.xn--jppinen-5wa.fi"
  tls_enabled = true
  force_ssl   = true
}
