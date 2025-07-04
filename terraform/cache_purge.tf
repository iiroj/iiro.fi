resource "null_resource" "cache_purge" {
  triggers = {
    files_hash = md5(join(",", [for file in bunnynet_storage_file.public : file.checksum]))
  }

  provisioner "local-exec" {
    command = "curl -X POST -H 'AccessKey: ${var.BUNNYNET_API_KEY}' https://api.bunny.net/pullzone/${bunnynet_pullzone.iiro.id}/purgeCache"
  }
}
