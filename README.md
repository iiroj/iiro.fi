# iiro.fi

My personal website, available at [iiro.fi](https://iiro.fi), built with [Bun](https://bun.sh) and deployed to [Bunny.net](https://bunny.net) automatically from [GitHub Actions](https://github.com/features/actions).

## Development and Deployment

Install [Bun](https://bun.com/docs/installation) for macOS with [Homebrew](https://brew.sh):

```shell
brew install oven-sh/bun/bun
```

Install development dependencies with _Bun_:

```shell
bun install --frozen-lockfile
```

Start development server with _Bun_:

```shell
bun run start
```

Format and lint code changes with [oxc](https://oxc.rs):

```shell
bun run fmt
bun run lint
```

Build production assets with _Bun_:

```shell
bun run build
```

Commit changes to the root repo using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), and create a new version:

```shell
git commit -am "feat: my new feature"
bun run version
```

Push changes to origin:

```shell
git push --follow-tags
```

A _GitHub Actions_ workflow will automatically deploy the latest version to _Bunny.net_.
