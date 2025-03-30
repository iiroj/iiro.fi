# iiro.fi

A static site, available at [iiro.fi](https://iiro.fi), running on [Bunny.net](https://bunny.net) in Europe.

## Technology

This site is mostly static with assets stored in `public/`. HTML files are generated with React (_because why not?_) by running `npm run build`. The build script also emits a bundled version of a Bunny Pull Zone Middleware, used to assign static HTTP headers (mainly to get an A+ score on [securityheaders.com](https://securityheaders.com)).

Resources are deployed using OpenTofu (Terraform) from `terraform/`.

## Todo

1. Create working local development setup for Bunny middleware
1. Add Github Action for updating Storage Zone and purge Pull Zone caches
1. Figure out a way to do pull request preview deployments
