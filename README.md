# iiro.fi

A static site, available at [iiro.fi](https://iiro.fi).

## Technology used

* [babel](https://babeljs.io/)
* [react-universal-component](https://github.com/faceyspacey/react-universal-component)
* [emotion](https://emotion.sh)
* [redux-first-router](https://github.com/faceyspacey/redux-first-router)
* [html-renderer-webpack-plugin](https://gitlab.com/iiroj/html-renderer-webpack-plugin)
* [webpack](https://webpack.js.org/)

### Lambda

The Feedback page uses a [Lambda function on Netlify](https://functions-beta--www.netlify.com/docs/lambda-functions/) as a backend for submitting feedback to me via the [Telegram Bot Platform](https://core.telegram.org/bots).

## Development

Development is done locally with a standard [Node.js](https://nodejs.org/en/) install.

### Install dependencies
```
$ npm install
```

### Start the dev server
```
$ npm start
```

### Lint
```
$ npm run lint
```

### Building locally
```
$ npm run build
```

## Deployment

The live site, [iiro.fi](https://iiro.fi), is hosted at [Netlify](https://www.netlify.com).

Every push to the `master` branch sends a webhook to Netlify instructing it to pull the latest HEAD and then deploy the site across its network. Netlify will automatically build the site according to the `netlify.toml` file.

You can read more about Netlify's continuous deployment process [here](https://www.netlify.com/docs/continuous-deployment/).

## License

See [LICENSE](./LICENSE).
