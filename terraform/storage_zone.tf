resource "bunnynet_storage_zone" "iiro-fi-site" {
  name                = "iiro-fi-site"
  zone_tier           = "Edge"
  region              = data.bunnynet_region.default.region_code
  replication_regions = ["UK", "SE"]

  custom_404_file_path = "/404.html"
}
