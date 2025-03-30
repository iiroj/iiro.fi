resource "bunnynet_storage_file" "public" {
  for_each = fileset(path.module, "../public/**")

  zone   = bunnynet_storage_zone.storage.id
  path   = replace(each.value, "../public/", "")
  source = each.value
}
