terraform {
  backend "s3" {
    bucket = "iiro-fi-tfstate-116904976007-eusc-de-east-1-an"
    region = "eusc-de-east-1"
    endpoints = {
      s3 = "http://s3.eusc-de-east-1.amazonaws.eu/"
    }
    key          = "terraform.tfstate"
    use_lockfile = true
  }

  required_providers {
    bunnynet = {
      source = "BunnyWay/bunnynet"
    }
  }
}

provider "bunnynet" {}
