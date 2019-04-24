provider "aws" {
  version = "~> 2.5"
  region  = "eu-north-1"
}

provider "aws" {
  alias   = "useast1"
  version = "~> 2.5"
  region  = "us-east-1"
}

resource "aws_s3_bucket" "site" {
  bucket = "${var.domain}"

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${var.domain}/*",
            "Condition": {
                "StringEquals": {
                    "aws:UserAgent": "${var.cloudfront-authentication-user-agent}"
                }
            }

        }
    ]
}
POLICY
}

data "aws_acm_certificate" "certificate" {
  provider    = "aws.useast1"
  domain      = "${var.domain}"
  types       = ["AMAZON_ISSUED"]
  most_recent = true
}

data "archive_file" "cloudfront_headers" {
    type        = "zip"
    source_dir  = "lambda/cloudfront_headers"
    output_path = "lambda/cloudfront_headers.zip"
}

resource "aws_iam_role" "lambda_iam" {
  name = "lambda_iam_iiro-fi"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "lambda.amazonaws.com",
          "edgelambda.amazonaws.com"
        ]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_lambda_function" "lambda_cloudfront_headers" {
  provider    = "aws.useast1"
  filename         = "lambda/cloudfront_headers.zip"
  function_name    = "cloudfront_headers_iiro-fi"
  role             = "${aws_iam_role.lambda_iam.arn}"
  handler          = "index.handler"
  runtime          = "nodejs8.10"
  source_code_hash = "${data.archive_file.cloudfront_headers.output_base64sha256}"
  publish          = "true"
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["${var.domain}"]
  price_class         = "PriceClass_200"
  wait_for_deployment = false

  origin {
    domain_name = "${aws_s3_bucket.site.website_endpoint}"
    origin_id   = "${var.s3_origin_id}"

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }

     custom_header {
      name  = "User-Agent"
      value = "${var.cloudfront-authentication-user-agent}"
    }
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${var.s3_origin_id}"
    compress         = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 31536000
    default_ttl            = 31536000
    max_ttl                = 31536000

    lambda_function_association {
      event_type = "viewer-response"
      lambda_arn = "${aws_lambda_function.lambda_cloudfront_headers.arn}:${aws_lambda_function.lambda_cloudfront_headers.version}"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "${data.aws_acm_certificate.certificate.arn}"
    minimum_protocol_version = "TLSv1.2_2018"
    ssl_support_method       = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
