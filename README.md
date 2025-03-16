# iiro.fi

A static site, available at [iiro.fi](https://iiro.fi), running on [Bunny.net](https://bunny.net) in Europe.

## Technology

This site is mostly static with assets stored in `public/`. HTML files are generated with React (_because why not?_) by running `npm run build`. The build script also emits a bundled version of a Bunny Pull Zone Middleware, used to assign static HTTP headers (mostly to get an A+ score on [securityheaders.com](https://securityheaders.com)).

Currently these are manually configured in the Bunny dashboard:

- **Storage Zone** with everythin from `public/` in the root
  - custom 404 file path at `/404.html`
- **Pull Zone** configured with the storage zone as origin
  - including the `http-headers.ts` middleware
- **DNS** for [iiro.fi](https://iiro.fi) and other domain redirects

## Todo

1. Create working local development setup for Bunny middleware
1. Add Github Action for updating Storage Zone and purge Pull Zone caches
1. Commit Terraform resources into repository
1. Figure out a way to do pull request preview deployments
