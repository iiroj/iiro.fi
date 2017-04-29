---
title: "Designing For a Good Developer Experience"
date: "2017-04-29"
slug: "developer-experience"
---

We recently updated the [Investors](https://www.verkkokauppa.com/en/investors/) website of [Verkkokauppa.com](https://www.verkkokauppa.com). Although a pretty standard investor site, it was a fun project that allowed me and my team to learn and apply new web technologies. I even got out of my comfort zone and contributed code — just not the kind you would think.

## The project

Our CEO wanted a bilingual investor site. He's great at what he does, but dropping a project like that with a four-week deadline was certainly challening. We took it as one, and formed a cross-functional team of three people: a designer _(that's me)_, a back-end developer and a full-stack developer. We would develop an isolated microsite using the latest technologies in many ways different from our usual stack.

Our DevOps team was just beta-testing [GitLab](https://about.gitlab.com/) at the time. Supposedly our current CI [Jenkins](https://jenkins.io/) was getting replaced by GitLab CE at some point. GitLab happens to work nicely with [Docker](https://www.docker.com/) containers. Because this project would be run in isolation, we figured we'd just jump the shark and develop everything in a Docker environment with the code hosted in our GitLab instance. Testing and deployment to production would also be done with Docker containers, run in the GitLab CI.

Given the close deadline this was deemed a risk, but in the end we delivered even faster than normal thanks to the optimized setup of developing and deployment. My favorite contribution to this project was actually something else than website's layout and visuals (although that was a positively refreshing as well). **What I really learned the most from was designing an efficient development environment**.

----

## How to Define a Good Developer Experience

To design for a good Developer Experience is to fine-tune your Development Enviroment, DE, up to eleven. A good DE is something that can make any project easily accessible and maintainable. In my opinion, you can tell a good DE by it being:

1. __Simple to set up__
    * There should be minimum _magic_ involved — a simple list of required software to install is best.
    * In the best-case scenario, when you `git pull` your project's repository, everything needed to start the DE come with it (after installing the required software).
2. __Portable__
    * Developer like to tune their hardware and software. Some might run macOS, others Windows. There's always one running Gentoo or Arch Linux.
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
