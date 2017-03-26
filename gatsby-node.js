export function modifyWebpackConfig (config, env) {
    config.merge({
        resolve: {
            root: [
                `${__dirname}/components`,
                `${__dirname}/pages`,
                `${__dirname}/styles`
            ],
            extensions: [
                '',
                '.js',
                '.css',
                '.module.css',
                '.scss'
            ]
        }
    })
    return config
}

export function rewritePath (parsedPath) {
    const postPattern = /^blog\//
    const isPost = postPattern.test(parsedPath.dir)
    const newPath = parsedPath.dir.split('---').slice(1)[0]

    if (isPost && newPath !== undefined) {
        return '/' + newPath + '/'
    }
}
