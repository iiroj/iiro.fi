module.exports = api => {
  const env = api.env();

  const presetEnv = {
    loose: true,
    shippedProposals: true,
    useBuiltIns: "entry"
  };

  const presets = [
    ["@babel/preset-env", presetEnv],
    "@babel/preset-react",
    "@emotion/babel-preset-css-prop"
  ];

  const plugins = [
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-transform-export-default-name",
    "@loadable/babel-plugin"
  ];

  if (env.startsWith("webpack")) {
    presetEnv.modules = false;
  }

  if (env.startsWith("node")) {
    presetEnv.modules = "commonjs";
    presetEnv.targets = {
      node: "current"
    };
    plugins.push(
      "@babel/plugin-syntax-dynamic-import",
      "babel-plugin-dynamic-import-node"
    );
  }

  return { presets, plugins };
};
