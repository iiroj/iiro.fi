resource "random_uuid" "storage_zone_name" {
  keepers = {
    seed = "taint_this_to_rotate"
  }
}

resource "bunnynet_storage_zone" "storage" {
  name                = random_uuid.storage_zone_name.id
  zone_tier           = "Edge"
  region              = "DE" // Europe (Falkstein)
  replication_regions = null

  custom_404_file_path = "/404.html"
}

resource "bunnynet_storage_file" "public" {
  for_each = fileset(path.module, "../public/**")

  zone   = bunnynet_storage_zone.storage.id
  path   = replace(each.value, "../public/", "")
  source = each.value
}
