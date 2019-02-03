module.exports = api => {
  const env = api.env();
  const isProduction = env.endsWith("production");

  const presetEnv = {
    loose: true,
    shippedProposals: true,
    useBuiltIns: "usage"
  };

  const presets = [["@babel/preset-env", presetEnv], "@babel/preset-react"];

  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-namespace-from",
    [
      "babel-plugin-styled-components",
      {
        displayName: !isProduction,
        minify: isProduction,
        pure: true
      }
    ],
    "babel-plugin-transform-export-default-name",
    "@loadable/babel-plugin"
  ];

  if (env.startsWith("webpack")) {
    presetEnv.modules = false;
  }

  if (env.startsWith("node")) {
    presetEnv.modules = "commonjs";
    presetEnv.targets = { node: "current" };
    plugins.push(
      "@babel/plugin-syntax-dynamic-import",
      "babel-plugin-dynamic-import-node"
    );
  }

  return { presets, plugins };
};
