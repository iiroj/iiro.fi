resource "bunnynet_storage_zone" "iiro" {
  name      = "iiro"
  zone_tier = "Edge"
  region    = data.bunnynet_region.default.region_code

  custom_404_file_path = "/404.html"
}
