module.exports = api => {
  const isProduction = api.env() === 'production';

  const presetEnv = {
    loose: true,
    modules: false,
    shippedProposals: true,
    useBuiltIns: 'entry'
  };

  const plugins = [
    ['babel-plugin-inline-dotenv'],
    ['babel-plugin-transform-inline-environment-variables'],
    ['@babel/plugin-proposal-class-properties'],
    ['babel-plugin-inline-react-svg'],
    [
      'babel-plugin-emotion',
      {
        autoLabel: !isProduction,
        hoist: isProduction,
        sourceMap: !isProduction
      }
    ]
  ];

  if (api.env() === 'webpack') {
    presetEnv.modules = 'commonjs';
    presetEnv.targets = {
      node: 'current'
    };
    plugins.push(['babel-plugin-universal-import', { babelServer: true }]);
  } else {
    plugins.push('babel-plugin-universal-import');
  }

  return {
    presets: [
      ['@babel/preset-env', presetEnv],
      ['@babel/preset-react'],
      ['@babel/preset-stage-2', { decoratorsLegacy: true }]
    ],
    plugins
  };
};
