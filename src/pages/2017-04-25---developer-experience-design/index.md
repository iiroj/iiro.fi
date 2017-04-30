---
title: "Designing a Good Developer Experience"
date: "2017-04-29"
slug: "developer-experience"
---

We recently updated the [Investors](https://www.verkkokauppa.com/en/investors/) website of [Verkkokauppa.com](https://www.verkkokauppa.com). Although a pretty standard investor site, it was a fun project that allowed me and my team to learn and apply new web technologies. I even got out of my comfort zone and contributed code — just not the kind you would think.

## The project

Our CEO wanted a bilingual investor site. He's great at what he does, but dropping a project like that with a four-week deadline was certainly challening. We took it as one, and formed a cross-functional team of three people: a designer _(that's me)_, a back-end developer and a full-stack developer. We would develop an isolated microsite using the latest technologies in many ways different from our usual stack.

Our DevOps team was just beta-testing [GitLab](https://about.gitlab.com/) at the time. Supposedly our current CI [Jenkins](https://jenkins.io/) was getting replaced by GitLab CE at some point. GitLab happens to work nicely with [Docker](https://www.docker.com/) containers. Because this project would be run in isolation, we figured we'd just jump the shark and develop everything in a Docker environment with the code hosted in our GitLab instance. Testing and deployment to production would also be done with Docker containers, run in the GitLab CI.

Given the close deadline this was deemed a risk, but in the end we delivered even faster than normal thanks to the optimized setup of developing and deployment. My favorite contribution to this project was actually something else than website's layout and visuals (although that was a positively refreshing as well). **What I really learned the most from was designing an efficient development environment**.

## How to Define a Good Developer Experience

To design for a good Developer Experience is to fine-tune your Development Enviroment, DE, up to eleven. A good DE is something that can make any project easily accessible and maintainable. In my opinion, you can tell a good DE by it being:

1. __Simple to set up__
    * There should be minimum _magic_ involved — a simple list of required software to install is best.
    * In the best-case scenario, when you `git pull` your project's repository, everything needed to start the DE come with it (after installing the required software).
2. __Portable__
    * Developers like to tune their hardware and software. Some might run macOS, others Windows. There's always one running Gentoo or Arch Linux.
    * Your DE requirements should be universal. This is really where Docker shines, since you can mostly just require `docker` and `docker-compose`.
3. __Immutable__
    * A good developer is lazy in that he tries to automate as much of his work as possible. This might mean a simple `./start.sh` in the repo's root.
    * No matter how the project evolves, the commands to use the DE should stay immutable. A developer shouldn't need to relearn his muscle-memorized commands every week.
    * With docker and docker-compose, the best way to keep the DE immutable is to always support the same method of starting: `docker-compose up --build`
4. __Automagical__
    * For local development, the DE should _just work_. After starting, you'll get a local web server with hot-reloading and auto-compilation of code.
    * Deploying to production should also _just work_. Set a single method and stick to it:
        * You can use `git tag -a v1.0 -m "this is a 1.0 version tag"` to create a git tag and `git push origin v1.0` to push it to the origin. This could _automagically_ trigger deployment in the CI, so the developer doesn't need to worry about it.
        * There are also several other standard methods for [continuous integration](https://github.com/integrations/feature/continuous-integration)
    * Testing should be automated
        * Git's pre-commit-hooks can be used to _lint your code_ to make sure it's up to standards before pushing
        * Every push (or ever release tag, merge to master, etc.) should run the full test-suite.

If this list checks out, what it will _mean_ is that for a developer to adopt your project and start coding, all he needs to do is `git pull` its repository, install the required software, and start coding. Everything beyond coding are basic git operations: `git commit` and `git push`.

## A Real-World Example

Our project turned out to be very approachable for new developers. You only need to install Docker, pull the repo, and run `docker-compose up`. This starts a local web server at `localhost:3000`, and off you can go developing. The main Docker container's image is based on Alpine Linux, pre-configured with our internal NPM Registry and necessary certificates. The image only has Node.js installed so it's very small at around 16 MB. We additionally installed Yarn on this, because it's better for handling dependencies. The default `docker-compose.yml` file defines the development environment. It's only a single container, connected to our internally-global dev database (for actual content).

There is an additional `docker-compose.prod.yml` file for running the project in production mode. In this mode our project is compiled into an NPM module, which is then installed into a Docker container. Another Docker container is started with a snapshot of the [MongoDB](https://www.mongodb.com/) database that includes the site's content.

One neat thing with Docker is that it comes supported with virtual filesystem _volumes_. Our DE works by mounting the local repo inside the Docker container. Normally this would mean that installing `node_modules` would place back on the local filesystem. This would then bring about compatibility issues (like node-sass binaries) with varying host systems. To keep the DE portable, we define a Docker volume that gets mounted on top of the `node_modules` directy inside the already-mounted repo. It's kind of a _Mount Inception_, but works really well by abstracting away to modules from the host system. Another benefit of this is that it's possible to run the project in both the development and production mode at the same time using the same repo, in seperate Docker containers, but with different mounted `node_modules`. We use NPM in production instead of Yarn for compatibility with out main servers.

With GitLab it's possible to [define a project's CI system in the repo](https://docs.gitlab.com/ee/ci/pipelines.html), using a file called `.gitlab-ci.yml`. GitLab's CI can run Docker containers, so we only had to kind-of recreate the _docker-compose_ file. Every time someone pushes code, GitLab triggers whatever we defined in the CI file in our testing [Kubernetes cluster](https://kubernetes.io/). What this actually means is that a Docker container based on the same image used in local development is launched in a new Pod, the repo is downloaded inside it, and finally some npm scripts are run. This takes care of testing, linting and additional stuff like running [Snyk](https://snyk.io/).

When we want to deploy a new version to production, we simply run `npm version [major|minor|patch]`. This creates a new git tag that automatically triggers building in the GitLab CI, which ends with deploying the new version to production. The chain here is to build and NPM package of the entire project, uploading it to our internal registry, and then telling the production server to install that package and restart the application. We wanted to deploy using NPM to keep things very generic and easily handle things like rollback and version history. It's pretty neat to launch an entire application by running `npm install [app] && npm start`.

You can of course build the NPM package locally. I even wrote a little `Makefile` for this. What the makefile does is, again, essentially the same as GitLab CI (and docker-compose). It starts a new Docker container mounting the repo, runs all tests and builds the NPM package, which is then output into the repo's root as `appname-vX.X.X.tar.gz`. Thanks to Make's and Docker's caching of build steps, this is a fast process if run sequentially.

## Wrapping up

Designing the _Developer Environment_ is an important part of designing a succesful product. Using Docker and GitLab you can make sure every developer is empowered to _just get things done_. I'd like to call this __DX Design__ for _Developer Experience Design.
