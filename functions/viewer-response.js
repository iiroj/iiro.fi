/** @typedef {import('@types/aws-cloudfront-function')} */

/** @type {(event: AWSCloudFrontFunction.Event) => AWSCloudFrontFunction.Response} */
function handler(event) {
  var request = event.request;
  var response = event.response;

  if (response.statusCode === 200 && request.uri === "/404.html") {
    response.statusCode = 404;
    response.statusDescription = "Not found";
  }

  return response;
}
