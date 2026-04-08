resource "null_resource" "cache_purge" {
  triggers = {
    public_hash = md5(join(",", [for file in bunnynet_storage_file.public : file.checksum]))
    infra_hash  = md5(join(",", [for file in fileset(path.module, "*.tf") : filemd5(file)]))
  }

  provisioner "local-exec" {
    command = "curl --no-progress-meter -X POST -H \"AccessKey: $BUNNYNET_API_KEY\" https://api.bunny.net/pullzone/$PULLZONE_ID/purgeCache"
    environment = {
      PULLZONE_ID = bunnynet_pullzone.iiro.id
    }
  }
}
