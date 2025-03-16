resource "bunnynet_storage_zone" "iiro" {
  name                = "iiro"
  zone_tier           = "Edge"
  region              = data.bunnynet_region.default.region_code
  replication_regions = ["NY", "SE"]

  custom_404_file_path = "/404.html"
}
