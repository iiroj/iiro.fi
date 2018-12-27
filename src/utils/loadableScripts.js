export const getScriptTags = extractor =>
  extractor.getScriptTags().replace(/async/gi, 'defer rel="subresource"');

const scriptLinkMatch = new RegExp(/<link .* as="script" href="(.*)">$/gm);

export const getScriptLinks = extractor =>
  extractor
    .getLinkTags()
    .replace(scriptLinkMatch, "$1")
    .split("\n");
