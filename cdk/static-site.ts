import path from "node:path";
import { fileURLToPath } from "node:url";

import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfrontOrigins from "aws-cdk-lib/aws-cloudfront-origins";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

const resolvePath = (relativePath: string): string => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(__dirname, relativePath);
};

interface StackProps {
  certificateArn: string;
  domainName: string;
}

export class StaticSite extends Construct {
  constructor(
    parent: cdk.Stack,
    id: string,
    { certificateArn, domainName }: StackProps
  ) {
    super(parent, id);

    const destinationBucket = s3.Bucket.fromBucketName(
      this,
      "bucket",
      domainName
    );

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "OriginAccessIdentity",
      { comment: `Allow Cloudfront access to "s3://${domainName}"` }
    );

    const policyStatement = new iam.PolicyStatement({
      actions: ["s3:GetObject"],
      resources: [destinationBucket.arnForObjects("*")],
      principals: [originAccessIdentity.grantPrincipal],
    });

    const bucketPolicy = new s3.BucketPolicy(
      this,
      "cloudfrontAccessBucketPolicy",
      { bucket: destinationBucket }
    );

    /** Adjust policy of existing bucket to grant access to Cloudfront */
    bucketPolicy.document.addStatements(policyStatement);

    new cdk.CfnOutput(this, "Bucket", {
      value: destinationBucket.bucketName,
    });

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      "Certificate",
      certificateArn
    );

    new cdk.CfnOutput(this, "CertificateARN", {
      value: certificate.certificateArn,
    });

    const responseHeadersPolicy = new cloudfront.ResponseHeadersPolicy(
      this,
      "ResponseHeadersPolicy",
      {
        comment: "Add static headers to response",
        removeHeaders: ["server"],
        customHeadersBehavior: {
          customHeaders: [
            {
              header: "Cross-Origin-Embedder-Policy",
              value: 'require-corp; report-to="default"',
              override: true,
            },
            {
              header: "Cross-Origin-Opener-Policy",
              value: 'same-site; report-to="default"',
              override: true,
            },
            {
              header: "Cross-Origin-Resource-Policy",
              value: "same-site",
              override: true,
            },
          ],
        },
        securityHeadersBehavior: {
          contentSecurityPolicy: {
            contentSecurityPolicy: "default-src 'self'",
            override: true,
          },
          contentTypeOptions: {
            override: true,
          },
          frameOptions: {
            frameOption: cloudfront.HeadersFrameOption.DENY,
            override: true,
          },
          referrerPolicy: {
            referrerPolicy:
              cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
            override: true,
          },
          strictTransportSecurity: {
            accessControlMaxAge: cdk.Duration.days(365),
            includeSubdomains: true,
            preload: true,
            override: true,
          },
          xssProtection: {
            modeBlock: true,
            protection: true,
            override: true,
          },
        },
      }
    );

    const cfFunction = new cloudfront.Function(this, "Function", {
      code: cloudfront.FunctionCode.fromFile({
        filePath: resolvePath("../functions/redirects.js"),
      }),
    });

    const distribution = new cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: {
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
        origin: new cloudfrontOrigins.S3Origin(destinationBucket, {
          connectionAttempts: 1,
          connectionTimeout: cdk.Duration.seconds(5),
          originAccessIdentity,
        }),
        responseHeadersPolicy,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [
          {
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
            function: cfFunction,
          },
        ],
      },
      certificate,
      defaultRootObject: "index.html",
      domainNames: [domainName, `www.${domainName}`],
      httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses: [
        /** Map S3 403 Forbidden into a 404 Not Found */
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: "/404.html",
          ttl: cdk.Duration.seconds(10),
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_200,
    });

    new cdk.CfnOutput(this, "DistributionId", {
      value: distribution.distributionId,
    });

    new s3deploy.BucketDeployment(this, "BucketDeployment", {
      destinationBucket,
      distribution,
      distributionPaths: ["/*"],
      sources: [s3deploy.Source.asset(resolvePath("../public"))],
    });
  }
}
