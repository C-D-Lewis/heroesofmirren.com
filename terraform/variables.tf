variable "region" {
  type        = string
  description = "AWS region"
  default     = "us-east-1"
}

variable "project_name" {
  type        = string
  description = "Project name for all resources"
  default     = "heroesofmirren"
}

variable "vpc_id" {
  type        = string
  description = "VPC to deploy into"
  default     = "vpc-c3b70bb9"
}

variable "zone_id" {
  type        = string
  description = "Route53 zone ID"
  default     = "Z0035116JDBHMXY8KYEK"
}

variable "domain_name" {
  type        = string
  description = "Site domain name, matching client_bucket"
  default     = "heroesofmirren.com"
}

variable "alt_domain_name" {
  type        = string
  description = "Alternate CNAME domain name, if any"
  default     = "www.heroesofmirren.com"
}

variable "certificate_arn" {
  type        = string
  description = "Certificate ARN in ACM"
  default     = "arn:aws:acm:us-east-1:617929423658:certificate/3599134e-eb85-4349-991b-d294b7291787"
}