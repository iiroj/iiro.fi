export function modifyWebpackConfig (config, env) {
  config.merge({
    resolve: {
      root: [
        `${__dirname}/components`,
        `${__dirname}/layouts`,
        `${__dirname}/pages`
      ],
      extensions: ['', '.js', '.jsx', '.css', '.module.css']
    }
  })
  return config
}

export function rewritePath (parsedPath) {
  const postPattern = /^posts\//
  const isPost = postPattern.test(parsedPath.dir)
  const newPath = parsedPath.dir.split('---').slice(1)[0]

  if (isPost && newPath !== undefined) {
    return '/' + newPath + '/'
  }
}
