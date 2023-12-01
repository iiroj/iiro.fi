const normalizePathname = (url) => {
  const normalized = new URL(url);
  let pathname = normalized.pathname;

  if (pathname === "/") {
    return normalized;
  }

  if (pathname.endsWith("index.html")) {
    pathname = pathname.replace(/index\.html$/, "");
  }

  if (pathname.endsWith(".html")) {
    pathname = pathname.replace(/\.html$/, "");
  }

  if (pathname.endsWith("/")) {
    pathname = pathname.replace(/\/$/, "");
  }

  normalized.pathname = pathname;

  return normalized;
};

export default normalizePathname;
