import * as cdk from "aws-cdk-lib";

import { StaticSite } from "./static-site";

class IiroFiStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);
    const certificateArn = new cdk.CfnParameter(this, "certificateArn", {
      description: "The ARN of the ACM certificate to be used in Cloudfront.",
      noEcho: true,
      type: "String",
    });

    new StaticSite(this, "iiro-fi", {
      certificateArn: certificateArn.valueAsString,
      domainName: "iiro.fi",
    });
  }
}

const app = new cdk.App();

new IiroFiStack(app, "iiro-fi-stack", {
  env: {
    region: "eu-north-1",
  },
  stackName: "iiro-fi-site",
});

app.synth();
