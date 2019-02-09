export default function getScriptTags(extractor) {
  const scriptTags = extractor.getScriptTags();
  return scriptTags.replace(/async/g, "defer");
}
