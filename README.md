# iiro.fi

A static site, available at [iiro.fi](https://iiro.fi), running on [Bunny.net](https://bunny.net) in Europe.

## Technology

This site is mostly static with assets stored in `public/`. HTML files are generated with React (_because why not?_) by running `npm run build`. Resources are deployed using OpenTofu (Terraform) from `terraform/`.

## Todo

1. Figure out a way to do pull request preview deployments
