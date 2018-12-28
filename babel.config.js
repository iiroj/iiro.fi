module.exports = api => {
  const env = api.env();

  const presetEnv = {
    loose: true,
    shippedProposals: true,
    useBuiltIns: "usage"
  };

  const presets = [["@babel/preset-env", presetEnv], "@babel/preset-react"];

  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-syntax-dynamic-import",
    "babel-plugin-styled-components",
    "babel-plugin-transform-export-default-name"
  ];

  if (env.startsWith("webpack")) {
    presetEnv.modules = false;
    plugins.push("babel-plugin-universal-import");
  }

  if (env.startsWith("node")) {
    presetEnv.modules = "commonjs";
    presetEnv.targets = { node: "current" };
    plugins.push(["babel-plugin-universal-import", { babelServer: true }]);
  }

  return { presets, plugins };
};
