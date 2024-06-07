provider "aws" {
  region = var.region
}

terraform {
  required_version = "= 1.2.9"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "= 4.31.0"
    }
  }

  backend "s3" {
    bucket = "chrislewis-tfstate"
    key    = "heroesofmirren"
    region = "us-east-1"
  }
}

module "main" {
  source = "github.com/c-d-lewis/terraform-modules//s3-cloudfront-website?ref=master"

  region          = "us-east-1"
  project_name    = "heroesofmirren"
  zone_id         = "Z0035116JDBHMXY8KYEK"
  domain_name     = "heroesofmirren.com"
  alt_domain_name = "www.heroesofmirren.com"
  certificate_arn = "arn:aws:acm:us-east-1:617929423658:certificate/3599134e-eb85-4349-991b-d294b7291787"
}
