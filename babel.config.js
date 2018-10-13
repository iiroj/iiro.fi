module.exports = api => {
  const env = api.env();
  const isProduction = env.endsWith('production');

  const presetEnv = {
    loose: true,
    modules: false,
    shippedProposals: true,
    useBuiltIns: 'entry'
  };

  const presets = [['@babel/preset-env', presetEnv], ['@babel/preset-react']];

  const plugins = [
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-class-properties'],
    [
      'babel-plugin-emotion',
      {
        autoLabel: !isProduction,
        hoist: isProduction,
        sourceMap: !isProduction
      }
    ]
  ];

  if (env.startsWith('webpack')) {
    plugins.push('babel-plugin-universal-import');
  }

  if (env.startsWith('node')) {
    presetEnv.modules = 'commonjs';
    presetEnv.targets = {
      node: 'current'
    };
    plugins.push(['babel-plugin-universal-import', { babelServer: true }]);
  }

  if (isProduction) {
    presets.push(['babel-preset-minify', { builtIns: false }]);
  }

  return { presets, plugins };
};
