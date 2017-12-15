function convertToPath(string) {
  return (
    "/" +
    string
      .toLowerCase()
      .replace(/\/index/, "/")
      .replace(/index/, "")
  );
}

module.exports = convertToPath;
