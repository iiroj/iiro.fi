terraform {
  required_providers {
    bunnynet = {
      source = "BunnyWay/bunnynet"
    }
  }
}

provider "bunnynet" {
  api_key = var.BUNNYNET_API_KEY
}

data "bunnynet_region" "default" {
  region_code = "DE"
}
