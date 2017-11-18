# iiro.fi

[![pipeline status](https://gitlab.com/iiroj/iiro.fi/badges/master/pipeline.svg)](https://gitlab.com/iiroj/iiro.fi/commits/master)

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

The live site, [iiro.fi](https://iiro.fi), is hosted in Amazon S3 with Cloudfront.

Every push to the `master` branch of the [canonical repository](https://gitlab.com/iiroj/iiro.fi) is linted and built, and finally deployed to S3, using GitLab CI. Deploying is handled with `s3cmd` running in Docker. s3cmd also creates invalidations for CloudFront.

Please see the file `.gitlab-ci.yml` for build details.

## License

See [LICENSE](./LICENSE).
