# iiro.fi

A static site built with [Next.js](https://github.com/zeit/next.js/), available at [iiro.fi](https://iiro.fi).

## Technology used

This static site is built with [Next.js](https://github.com/zeit/next.js/), a framework for server-rendered or statically-exported [React](https://facebook.github.io/react/) apps. It is composed of basic React pure functional components and some static images.

[Styled-components](https://styled-components.com) are used for styling, so no external CSS files are needed. [Css-wipe](https://github.com/stackcss/css-wipe) is used for resetting browser default styles.

All `.js` files are formatted with [Prettier](https://prettier.io) for coherence. This is handled through [eslint](http://eslint.org).

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
