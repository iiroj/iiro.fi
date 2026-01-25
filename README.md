# iiro.fi

My personal website, available at [iiro.fi](https://iiro.fi), built with [Bun](https://bun.sh) and running on [Bunny.net](https://bunny.net).

## Development and Deployment

Install [Bun](https://bun.com/docs/installation) for macOS with [Homebrew](https://brew.sh):

```shell
brew install oven-sh/bun/bun
```

Install development dependencies with _Bun_:

```shell
bun install
```

Start development server with _Bun_:

```shell
bun run start
```

Lint code changes with [Biome](https://biomejs.dev):

```shell
bun run lint
```

Build production assets with _Bun_:

```shell
bun run bundle
```

Deploy to [Bunny.net](https://bunny.net) with [OpenTofu](https://opentofu.org):

```shell
cd terraform/
tofu apply
```

Commit changes to repo using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), and create a new version:

```shell
git commit -am "feat: my new feature"
bun run version
```

Push changes to [Codeberg](https://codeberg.org):

```shell
git push --follow-tags
```
