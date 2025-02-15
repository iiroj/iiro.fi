export const getResponseBodyHash = async (
  response: Response,
): Promise<`sha384-${string}`> => {
  const body = await response.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-384", body);
  const hash = String.fromCharCode(...new Uint8Array(hashBuffer));

  return `sha384-${btoa(hash)}`;
};
