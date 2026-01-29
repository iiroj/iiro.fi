resource "random_uuid" "storage_zone_name" {
  keepers = {
    seed = "taint_this_to_rotate"
  }
}

resource "bunnynet_storage_zone" "storage" {
  name                = random_uuid.storage_zone_name.id
  zone_tier           = "Edge"
  region              = "DE"   // Frankfurth
  replication_regions = ["SE"] // Stockholm

  custom_404_file_path = "/404.html"
}

resource "bunnynet_storage_file" "pages" {
  for_each = toset([
    for file in fileset(path.module, "../pages/**") : file
    if !endswith(file, ".git")
  ])

  zone   = bunnynet_storage_zone.storage.id
  path   = replace(each.value, "../pages/", "")
  source = each.value
}
