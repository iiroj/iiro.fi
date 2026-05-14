# iiro.fi

My personal website — available at [iiro.fi](https://iiro.fi) — built with [Node.js](https://nodejs.org) and deployed to [statichost.eu](https://statichost.eu) automatically from [Codeberg](https://codeberg.org/about) with [Forgejo Actions](https://docs.codeberg.org/ci/actions/).

## Development and Deployment

Install [Node.js](https://nodejs.org/en/download) for macOS with [n](https://github.com/tj/n) from [Homebrew](https://brew.sh):

```shell
brew install n
n auto # read from .node-version
```

Install development dependencies:

```shell
npm ci
```

Format and lint code changes with [oxc](https://oxc.rs):

```shell
npm run fmt
npm run lint
```

Build production assets:

```shell
npm run build
```

Commit changes to the root repo using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), and create a new version:

```shell
git commit -am "feat: my new feature"
npm run version
```

Push changes to origin to trigger deployment:

```shell
git push --follow-tags
```
