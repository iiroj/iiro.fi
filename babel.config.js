module.exports = api => {
  const env = api.env();

  const presetEnv = {
    corejs: "3",
    loose: true,
    useBuiltIns: "usage"
  };

  const presets = [
    ["@babel/preset-env", presetEnv],
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@emotion/babel-preset-css-prop"
  ];

  const plugins = [
    "macros",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-namespace-from",
    "babel-plugin-transform-export-default-name"
  ];

  if (env === "webpack") {
    presetEnv.modules = false;
  } else {
    presetEnv.targets = { node: "current" };
  }

  return { presets, plugins };
};
