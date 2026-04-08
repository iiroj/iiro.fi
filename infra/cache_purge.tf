resource "null_resource" "cache_purge" {
  triggers = {
    always_run = uuid()
  }

  provisioner "local-exec" {
    command = "curl --no-progress-meter -X POST -H \"AccessKey: $BUNNYNET_API_KEY\" https://api.bunny.net/pullzone/$PULLZONE_ID/purgeCache"
    environment = {
      PULLZONE_ID = bunnynet_pullzone.iiro.id
    }
  }
}
