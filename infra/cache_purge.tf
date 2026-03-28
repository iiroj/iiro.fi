resource "null_resource" "cache_purge" {
  triggers = {
    always_run = uuid()
  }

  provisioner "local-exec" {
    command = "curl -X POST -H 'AccessKey: ${var.BUNNYNET_API_KEY}' https://api.bunny.net/pullzone/${bunnynet_pullzone.iiro.id}/purgeCache"
  }
}
