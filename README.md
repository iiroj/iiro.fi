# iiro.fi

My personal website — available at [iiro.fi](https://iiro.fi) — built with [Bun](https://bun.sh) and deployed to [statichost.eu](https://statichost.eu) automatically from [Codeberg](https://codeberg.org/about) with [Forgejo Actions](https://docs.codeberg.org/ci/actions/).

## Development and Deployment

Install [Bun](https://bun.com/docs/installation) for macOS with [Homebrew](https://brew.sh):

```console
brew update
brew install oven-sh/bun/bun
```

Install development dependencies with _Bun_:

```console
bun install --frozen-lockfile
```

Start development server with _Bun_:

```console
bun run start
```

Format and lint code changes with [oxc](https://oxc.rs):

```console
bun run fmt
bun run lint
```

Build production assets with _Bun_:

```console
bun run build
```

Commit changes to the root repo using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), and create a new version:

```console
git commit -am "feat: my new feature"
bun run version
```

Push changes to origin to trigger deployment:

```console
git push --follow-tags
```
