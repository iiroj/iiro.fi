/** @typedef {import('@types/aws-cloudfront-function')} */

var TARGET_DOMAIN = "iiro.fi";

/** @type {(event: AWSCloudFrontFunction.Event) => AWSCloudFrontFunction.Response | AWSCloudFrontFunction.Request} */
function handler(event) {
  var request = event.request;
  var host = (request.headers.host && request.headers.host.value) || "";
  if (host !== TARGET_DOMAIN) {
    /** @type {AWSCloudFrontFunction.Response} */
    return {
      statusCode: 308,
      statusDescription: "Permanent Redirect",
      headers: {
        location: {
          value: `https://${TARGET_DOMAIN}${request.uri}`,
        },
      },
    };
  }

  return request;
}
