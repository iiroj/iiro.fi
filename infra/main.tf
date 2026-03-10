terraform {
  required_providers {
    bunnynet = {
      source = "BunnyWay/bunnynet"
    }
  }
}

variable "BUNNYNET_API_KEY" {
  type      = string
  sensitive = true
}

provider "bunnynet" {
  api_key = var.BUNNYNET_API_KEY
}
