# iiro.fi

A blog built with [Gatsby](https://github.com/gatsbyjs/gatsby), available at [iiro.fi](https://iiro.fi).

The canonical repository for this project is at [gitlab:iiroj/iiro.fi](https://gitlab.com/iiroj/iiro.fi). It is mirrored at [github:iiroj/iiro.fi](https://github.com/iiroj/iiro.fi) for convenience.

## Technology used

This static site is built with [Gatsby](https://github.com/gatsbyjs/gatsby), a static-site generator for [React](https://facebook.github.io/react/). It is composed of basic React pure functional components and some static images.

[Styled-components](https://styled-components.com) are used for styling, so no external CSS files are needed. [Css-wipe](https://github.com/stackcss/css-wipe) is used for resetting browser default styles.

All `.js` files are formatted with [Prettier](https://prettier.io) for coherence. This is handled through [eslint](http://eslint.org).

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

Every push to the `master` branch of the [canonical repository](https://gitlab.com/iiroj/iiro.fi) sends a webhook to Netlify instructing it to pull the latest HEAD and then deploy the site across its network. Netlify will automatically build the site with `npm run lint && npm run build`.

You can read more about Netlify's continuous deployment process [here](https://www.netlify.com/docs/continuous-deployment/).

## License

This project is **UNLICENSED**.
