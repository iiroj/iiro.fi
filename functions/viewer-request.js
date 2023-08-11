/** @typedef {import('@types/aws-cloudfront-function')} */

var TARGET_DOMAIN = "iiro.fi";

var KNOWN_PUBLIC_FILES = [];

/** @type {(event: AWSCloudFrontFunction.Event) => AWSCloudFrontFunction.Request} */
function handler(event) {
  var request = event.request;
  var host = (request.headers.host && request.headers.host.value) || "";
  if (host !== TARGET_DOMAIN) {
    /** @type {AWSCloudFrontFunction.Response} */
    return {
      statusCode: 308,
      statusDescription: "Permanent redirect",
      headers: {
        location: {
          value: `https://${TARGET_DOMAIN}${request.uri}`,
        },
      },
    };
  }

  if (KNOWN_PUBLIC_FILES.length === 0) {
    return request;
  }

  if (!request.uri || request.uri === "/") {
    request.uri = "/index.html";
  }

  if (!KNOWN_PUBLIC_FILES.includes(request.uri)) {
    request.uri = "/404.html";
  }

  return request;
}
