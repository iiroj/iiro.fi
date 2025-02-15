export const getSha384hash = async (
  content: ArrayBuffer,
): Promise<`sha384-${string}`> => {
  const hashBuffer = await crypto.subtle.digest("SHA-384", content);
  const hash = String.fromCharCode(...new Uint8Array(hashBuffer));

  return `sha384-${btoa(hash)}`;
};
