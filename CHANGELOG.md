## [33.5.0](https://github.com/iiroj/iiro.fi/compare/v33.4.0...v33.5.0) (2025-07-04)

### Features

- add cache purging on file change ([6fa4855](https://github.com/iiroj/iiro.fi/commit/6fa48559bfe6d4427205696781df121dfbdf4480))

## [33.4.0](https://github.com/iiroj/iiro.fi/compare/v33.3.0...v33.4.0) (2025-07-02)

### Features

- inline svg icons and support dark mode ([c4a57af](https://github.com/iiroj/iiro.fi/commit/c4a57af246921fe79ae9ea8d7957dbb6449b43b4))
- update favicon setup ([30b4687](https://github.com/iiroj/iiro.fi/commit/30b4687de09f52c286895d70bbb3873e158af83d))
- update page ([b5604fd](https://github.com/iiroj/iiro.fi/commit/b5604fde381dad87574abed7a0aa60b90b20a2fa))

### Bug Fixes

- display icons at 20x20 px ([4a92d20](https://github.com/iiroj/iiro.fi/commit/4a92d2075614a6c3320ff33dd68249816eabd415))
- icons scale dynamically ([41962ad](https://github.com/iiroj/iiro.fi/commit/41962adc8f8a327c34f1d10b04137a3ef15a6e68))

## [33.3.0](https://github.com/iiroj/iiro.fi/compare/v33.2.3...v33.3.0) (2025-07-02)

### Features

- add Bluesky link ([aa384d8](https://github.com/iiroj/iiro.fi/commit/aa384d8fb7c70f19103791cd6b80dc24d537458f))
- add link icons ([b9902ef](https://github.com/iiroj/iiro.fi/commit/b9902efad9a600694109e23ddd4a5b731667272c))

## [33.2.3](https://github.com/iiroj/iiro.fi/compare/v33.2.2...v33.2.3) (2025-06-18)

### Bug Fixes

- adjust rules for Let's Encrypt ([fa1f2dd](https://github.com/iiroj/iiro.fi/commit/fa1f2dd40d43a32ee7c7c5fc1086355272760be6))

## [33.2.2](https://github.com/iiroj/iiro.fi/compare/v33.2.1...v33.2.2) (2025-06-01)

### Bug Fixes

- commit terraform changes ([1bc301e](https://github.com/iiroj/iiro.fi/commit/1bc301eef859aa1334dd5009b518a5948cbb8cbc))

## [33.2.1](https://github.com/iiroj/iiro.fi/compare/v33.2.0...v33.2.1) (2025-04-20)

### Performance Improvements

- **cdn:** enable CDN cache background update ([a4a8214](https://github.com/iiroj/iiro.fi/commit/a4a821446f918edc010905fa1d29a4b1aabe5854))

## [33.2.0](https://github.com/iiroj/iiro.fi/compare/v33.1.0...v33.2.0) (2025-04-05)

### Features

- replace edge script with static rules ([1e448a9](https://github.com/iiroj/iiro.fi/commit/1e448a9614db3bba4a2921d1b0d63f5a634570eb))

## [33.1.0](https://github.com/iiroj/iiro.fi/compare/v33.0.3...v33.1.0) (2025-03-30)

### Features

- deploy public files with Terraform ([87f0bfb](https://github.com/iiroj/iiro.fi/commit/87f0bfba88dc17b3a9cfc99057f3d207d663a29a))

## [33.0.3](https://github.com/iiroj/iiro.fi/compare/v33.0.2...v33.0.3) (2025-03-30)

### Bug Fixes

- assign security headers only to HTML response ([437aee5](https://github.com/iiroj/iiro.fi/commit/437aee501f966705f92762cf0a800eacc47993e9))

## [33.0.2](https://github.com/iiroj/iiro.fi/compare/v33.0.1...v33.0.2) (2025-03-16)

### Bug Fixes

- inject style integrity during build-time ([43f24d0](https://github.com/iiroj/iiro.fi/commit/43f24d040042554b6115be28c664060ac29ca51d))

## [33.0.1](https://github.com/iiroj/iiro.fi/compare/v33.0.0...v33.0.1) (2025-03-16)

### Bug Fixes

- configure CSP style integrity hash via env variable ([4d63501](https://github.com/iiroj/iiro.fi/commit/4d63501fa38c42fc3333dfb1a982fa9bdd6f224b))

## [33.0.0](https://github.com/iiroj/iiro.fi/compare/v32.8.5...v33.0.0) (2025-03-16)

### ⚠ BREAKING CHANGES

- remove all Cloudflare code

### Features

- add origin response script for headers ([a077842](https://github.com/iiroj/iiro.fi/commit/a07784280d022843e1a965ee5b8e558ebd7638f1))
- remove all Cloudflare code ([6e645e5](https://github.com/iiroj/iiro.fi/commit/6e645e55bcb099e172296bd48168045156412b71))

### Bug Fixes

- move 404 page back to root ([c31eb0c](https://github.com/iiroj/iiro.fi/commit/c31eb0c5d4f318a44b00cba6c58b1e32ebd750bc))
- move 404 page to Bunny-specific directory ([fd55cda](https://github.com/iiroj/iiro.fi/commit/fd55cda345f6cb592dede20db492f8419f67a640))

## [32.8.5](https://github.com/iiroj/iiro.fi/compare/v32.8.4...v32.8.5) (2025-03-15)

### Bug Fixes

- fix og image ([dda9152](https://github.com/iiroj/iiro.fi/commit/dda9152e1eb083d9da02ce66a2143a4fe484ed5c))

## [32.8.4](https://github.com/iiroj/iiro.fi/compare/v32.8.3...v32.8.4) (2025-02-16)

### Bug Fixes

- drop Cloudflare default CORS header ([a285d91](https://github.com/iiroj/iiro.fi/commit/a285d91d3036f1b2404fe70231384a23461d7144))

## [32.8.3](https://github.com/iiroj/iiro.fi/compare/v32.8.2...v32.8.3) (2025-02-15)

### Bug Fixes

- remove inline style tag ([b7a74f1](https://github.com/iiroj/iiro.fi/commit/b7a74f198a54bf072edf2ab000c0a454adf18ac7))

## [32.8.2](https://github.com/iiroj/iiro.fi/compare/v32.8.1...v32.8.2) (2025-02-15)

### Bug Fixes

- generate headers file with CSP integrity hashes ([f7787ed](https://github.com/iiroj/iiro.fi/commit/f7787ed2328c522f311610b0007c553e812db8f0))

## [32.8.1](https://github.com/iiroj/iiro.fi/compare/v32.8.0...v32.8.1) (2025-02-15)

### Bug Fixes

- update CSP ([dceef93](https://github.com/iiroj/iiro.fi/commit/dceef93251e0f6d5ce57d1adf3bb173e63d48d2b))

## [32.8.0](https://github.com/iiroj/iiro.fi/compare/v32.7.4...v32.8.0) (2025-02-15)

### Features

- revert back to Cloudflare Pages ([1f73930](https://github.com/iiroj/iiro.fi/commit/1f7393015856196404274a5487480d53e4673fec))

## [32.6.0](https://github.com/iiroj/iiro.fi/compare/v32.5.0...v32.6.0) (2025-01-06)

### Features

- update image ([cb2cf65](https://github.com/iiroj/iiro.fi/commit/cb2cf658b2f03e53b99fc4080d881c9536823d52))
- update text ([2f05f99](https://github.com/iiroj/iiro.fi/commit/2f05f99071f1ba856c1230f6980ed03a397b8368))

### Bug Fixes

- prefix hash algorithm to integrity hash ([adcffcd](https://github.com/iiroj/iiro.fi/commit/adcffcd7baeaa62a8419483fcc2733b77a722e34))

## [32.5.0](https://github.com/iiroj/iiro.fi/compare/v32.4.0...v32.5.0) (2024-12-23)

### Features

- update profile image ([b0a043f](https://github.com/iiroj/iiro.fi/commit/b0a043f3fc9b5e8a7badb59abf9f1243e9555d13))

## [32.4.0](https://github.com/iiroj/iiro.fi/compare/v32.3.1...v32.4.0) (2024-12-07)

### Features

- **deps:** upgrade to React 19 ([7288384](https://github.com/iiroj/iiro.fi/commit/7288384b6e7ccb4284a0ca3b761c284c692a5ca7))

## [32.3.1](https://github.com/iiroj/iiro.fi/compare/v32.3.0...v32.3.1) (2024-11-16)

### Bug Fixes

- **deps:** update dependencies ([eae5e80](https://github.com/iiroj/iiro.fi/commit/eae5e800a2f877f2e2e4fb0474baecf346e590c3))

## [32.3.0](https://github.com/iiroj/iiro.fi/compare/v32.2.0...v32.3.0) (2024-07-09)

### Features

- use TypeScript for React code ([4567007](https://github.com/iiroj/iiro.fi/commit/4567007ee888141829d35b90cddc544d2e026196))

## [32.2.0](https://github.com/iiroj/iiro.fi/compare/v32.1.0...v32.2.0) (2024-07-08)

### Features

- add React rendering build-step ([6a9b4bd](https://github.com/iiroj/iiro.fi/commit/6a9b4bddaf5b78aeecf001332b7b567c6298a378))

## [32.1.0](https://github.com/iiroj/iiro.fi/compare/v32.0.9...v32.1.0) (2024-07-08)

### Features

- add Cloudflare Analytics beacon ([d55ef67](https://github.com/iiroj/iiro.fi/commit/d55ef67aa4baed8073d479e8f324a9438e839112))
- add CSS file integrity to CSP header ([07f17b5](https://github.com/iiroj/iiro.fi/commit/07f17b5cf451df4942a60d377f1824f728ad0f2b))

## [32.0.9](https://github.com/iiroj/iiro.fi/compare/v32.0.8...v32.0.9) (2024-07-08)

### Bug Fixes

- **deps:** update dependencies ([7f1a4da](https://github.com/iiroj/iiro.fi/commit/7f1a4da6b89360c302d6a9a79fca7386404775e0))

## [32.0.8](https://github.com/iiroj/iiro.fi/compare/v32.0.7...v32.0.8) (2024-03-16)

### Bug Fixes

- **cloudflare:** bump compatibility date ([95d5503](https://github.com/iiroj/iiro.fi/commit/95d55034cd8eeab6e9c68fd5d5fddf5cf0062b8f))

## [32.0.7](https://github.com/iiroj/iiro.fi/compare/v32.0.6...v32.0.7) (2024-02-03)

### Bug Fixes

- once again update info ([74974d2](https://github.com/iiroj/iiro.fi/commit/74974d26058a397c05e4c40c08f53169afa7ed77))

## [32.0.6](https://github.com/iiroj/iiro.fi/compare/v32.0.5...v32.0.6) (2024-01-21)

### Bug Fixes

- opt out of latest Google Chrome spyware features via Permissions Policy ([a9094bc](https://github.com/iiroj/iiro.fi/commit/a9094bc5544841957fe6cae6fafd9eecb4f1d546))

## [32.0.5](https://github.com/iiroj/iiro.fi/compare/v32.0.4...v32.0.5) (2024-01-21)

### Bug Fixes

- remove Bluesky link ([20a1a8e](https://github.com/iiroj/iiro.fi/commit/20a1a8e91c74b60c45314834db8607b09a7c7cbf))

## [32.0.4](https://github.com/iiroj/iiro.fi/compare/v32.0.3...v32.0.4) (2023-12-27)

### Performance Improvements

- optimize image sizes ([9b549d9](https://github.com/iiroj/iiro.fi/commit/9b549d9f9ab11d550e34369aef40b46f8949f066))

## [32.0.3](https://github.com/iiroj/iiro.fi/compare/v32.0.2...v32.0.3) (2023-12-01)

### Bug Fixes

- update bsky link ([a39e92a](https://github.com/iiroj/iiro.fi/commit/a39e92a83f4bb0852e2adb7354c1a75dd1f05c1d))

## [32.0.2](https://github.com/iiroj/iiro.fi/compare/v32.0.1...v32.0.2) (2023-11-30)

### Bug Fixes

- allow Cloudflare Web Analytics in CSP ([496c24d](https://github.com/iiroj/iiro.fi/commit/496c24d8079bd46f23f5555dc7fee9e7918a47e8))
- update stylesheet integrity hash ([27fe8ef](https://github.com/iiroj/iiro.fi/commit/27fe8ef1a457ef71ad1818f60c59de1283bfe1af))

## [32.0.1](https://github.com/iiroj/iiro.fi/compare/v32.0.0...v32.0.1) (2023-11-29)

### Bug Fixes

- do not set duplicate environment ([68c9b5a](https://github.com/iiroj/iiro.fi/commit/68c9b5a3906e666d200545829624610fc25569d1))
- use Cloudflare Pages Action instead of automatic deployment ([9afac1e](https://github.com/iiroj/iiro.fi/commit/9afac1e8ba2491ffd24c6be3117cdbfc1a49136f))

## [32.0.0](https://github.com/iiroj/iiro.fi/compare/v31.3.0...v32.0.0) (2023-11-29)

### ⚠ BREAKING CHANGES

- Vercel is no longer used

### Features

- migrate to Cloudflare Pages ([3f280fc](https://github.com/iiroj/iiro.fi/commit/3f280fc4e377dfff19b27c970cf680f1545c54b2))

## [31.3.0](https://github.com/iiroj/iiro.fi/compare/v31.2.4...v31.3.0) (2023-11-04)

### Features

- add Bluesky profile link ([443fe84](https://github.com/iiroj/iiro.fi/commit/443fe8452a6260937a460679bb36444065f40ae1))

## [31.2.4](https://github.com/iiroj/iiro.fi/compare/v31.2.3...v31.2.4) (2023-10-01)

### Bug Fixes

- **ci:** do not persist credentials ([bd648f1](https://github.com/iiroj/iiro.fi/commit/bd648f15738b989f668aad4899254f01e4ed4401))

## [31.2.3](https://github.com/iiroj/iiro.fi/compare/v31.2.2...v31.2.3) (2023-10-01)

### Bug Fixes

- **release:** prevent infinite loop in CI release ([dc0be9d](https://github.com/iiroj/iiro.fi/commit/dc0be9de8a79c958c23e4152f6d46faec62484f5))

## [31.2.2](https://github.com/iiroj/iiro.fi/compare/v31.2.1...v31.2.2) (2023-10-01)

### Bug Fixes

- **release:** workaround for releasing ([36013ac](https://github.com/iiroj/iiro.fi/commit/36013ac5bd5b500ca408bd91c7453d1a2fad7cfa))

## [31.2.1](https://github.com/iiroj/iiro.fi/compare/v31.2.0...v31.2.1) (2023-10-01)

### Performance Improvements

- add lazy-loading to img ([34c21de](https://github.com/iiroj/iiro.fi/commit/34c21de5103da742b758d465aa26dcd9132a9faf))

# iiro.fi

## 31.2.0

### Minor Changes

- [#26](https://github.com/iiroj/iiro.fi/pull/26) [`47543ad`](https://github.com/iiroj/iiro.fi/commit/47543ad267f744dd5d8cd5e119b19af47581555b) Thanks [@iiroj](https://github.com/iiroj)! - Add image to page and og:image tag

## 31.1.0

### Minor Changes

- [#24](https://github.com/iiroj/iiro.fi/pull/24) [`575e3c8`](https://github.com/iiroj/iiro.fi/commit/575e3c8a94a5e844b75fcd2f6aec5463712c69b2) Thanks [@iiroj](https://github.com/iiroj)! - Add Open Graph tags and refer to S Group instead of SOK

## 31.0.0

### Major Changes

- [#22](https://github.com/iiroj/iiro.fi/pull/22) [`aa1b0f5`](https://github.com/iiroj/iiro.fi/commit/aa1b0f5e76ce63237edec3714f951886213e2561) Thanks [@iiroj](https://github.com/iiroj)! - Site deployment has been migrated back to Vercel, as a static site, and PR previews are back.

## 30.2.1

### Patch Changes

- [`9396bc2`](https://github.com/iiroj/iiro.fi/commit/9396bc2a47d4b44e7031685b9853f76ca71cb17d) Thanks [@iiroj](https://github.com/iiroj)! - remove S3-specific response headers

## 30.2.0

### Minor Changes

- [#18](https://github.com/iiroj/iiro.fi/pull/18) [`3c20f35d`](https://github.com/iiroj/iiro.fi/commit/3c20f35d201647646ebfb85eb4bb0ccba790982c) Thanks [@iiroj](https://github.com/iiroj)! - Use 🦋 changesets for versioning

## [30.1.0](https://github.com/iiroj/iiro.fi/compare/v30.0.1...v30.1.0) (2023-08-11)

### Features

- handle 404 mapping in Cloudfront function level ([fe79e65](https://github.com/iiroj/iiro.fi/commit/fe79e65ac703998ee7d53a4cd32383d8257becd7))

## [30.0.1](https://github.com/iiroj/iiro.fi/compare/v30.0.0...v30.0.1) (2023-07-15)

### Performance Improvements

- add robots.txt and sitemap.xml ([0b6523f](https://github.com/iiroj/iiro.fi/commit/0b6523f076212391e32567e0a774499ec52ce08f))

## [30.0.0](https://github.com/iiroj/iiro.fi/compare/v29.0.11...v30.0.0) (2023-07-08)

### ⚠ BREAKING CHANGES

- remove Cloudflare Pages deployment

### Features

- remove Cloudflare Pages deployment ([5a43ac3](https://github.com/iiroj/iiro.fi/commit/5a43ac3a7e270bcac9f0987d12a9c22556732e04))

## [29.0.11](https://github.com/iiroj/iiro.fi/compare/v29.0.10...v29.0.11) (2023-06-24)

### Bug Fixes

- add "apple-touch-icon" ([75e2207](https://github.com/iiroj/iiro.fi/commit/75e22077a776e0add1624b89bd35cd45b455b0f5))

## [29.0.10](https://github.com/iiroj/iiro.fi/compare/v29.0.9...v29.0.10) (2023-06-17)

### Bug Fixes

- make sure content is vertically centered ([03cc735](https://github.com/iiroj/iiro.fi/commit/03cc735a12e5ce77a2ac09cc3a4649f38b8c9fbe))

## [29.0.9](https://github.com/iiroj/iiro.fi/compare/v29.0.8...v29.0.9) (2023-06-04)

### Bug Fixes

- **dependencies:** update dependencies ([0322cbd](https://github.com/iiroj/iiro.fi/commit/0322cbd25dedace56517b7fdb47b5cf8e1690d4f))

## [29.0.8](https://github.com/iiroj/iiro.fi/compare/v29.0.7...v29.0.8) (2023-05-15)

### Bug Fixes

- formatting ([42abf29](https://github.com/iiroj/iiro.fi/commit/42abf293613ac8dc310ac54789011887ca51870d))

## [29.0.7](https://github.com/iiroj/iiro.fi/compare/v29.0.6...v29.0.7) (2023-05-14)

### Reverts

- Revert "ci: add message to release commit so that Actions don't run" ([318b785](https://github.com/iiroj/iiro.fi/commit/318b7855a98c2e2abf3172a33bcb96c7ed13810e))

## [29.0.6](https://github.com/iiroj/iiro.fi/compare/v29.0.5...v29.0.6) (2023-05-14)

### Bug Fixes

- **ci:** format CHANGELOG.md before committing ([01e216c](https://github.com/iiroj/iiro.fi/commit/01e216ce5ad3feb1630a41975a388c9e95542cf5))

## [29.0.5](https://github.com/iiroj/iiro.fi/compare/v29.0.4...v29.0.5) (2023-05-14)

### Bug Fixes

- **dependencies:** update dependencies ([035e5e1](https://github.com/iiroj/iiro.fi/commit/035e5e1407b81a745e617ff0bc069646cc70eba8))

## [29.0.4](https://github.com/iiroj/iiro.fi/compare/v29.0.3...v29.0.4) (2023-05-01)

### Bug Fixes

- **cloudflare:** update Beacon SRI hash ([80422ee](https://github.com/iiroj/iiro.fi/commit/80422eeb8b772ab051466224daf93a67816cb886))

## [29.0.3](https://github.com/iiroj/iiro.fi/compare/v29.0.2...v29.0.3) (2023-04-25)

### Bug Fixes

- **dependencies:** update wrangler@2.17.0 ([6b6412d](https://github.com/iiroj/iiro.fi/commit/6b6412d7370427a1ea4366e6dcc932a5abecb036))

## [29.0.2](https://github.com/iiroj/iiro.fi/compare/v29.0.1...v29.0.2) (2023-04-23)

### Bug Fixes

- **ci:** use forked Cloudflare Pages action ([1a924c7](https://github.com/iiroj/iiro.fi/commit/1a924c766433f18f14deefaa132761c75879883a))

## [29.0.1](https://github.com/iiroj/iiro.fi/compare/v29.0.0...v29.0.1) (2023-04-22)

### Bug Fixes

- set explicit branch name for release deployments ([3fcba74](https://github.com/iiroj/iiro.fi/commit/3fcba743ca4f204019185f6a0a93863bd868c290))

## [29.0.0](https://github.com/iiroj/iiro.fi/compare/v28.0.1...v29.0.0) (2023-04-22)

### ⚠ BREAKING CHANGES

- migrate to static Cloudflare Pages

### Features

- migrate to static Cloudflare Pages ([bf3aafc](https://github.com/iiroj/iiro.fi/commit/bf3aafc2e652391847ccb051c7b91a5def9d7ec2))

## [28.0.1](https://github.com/iiroj/iiro.fi/compare/v28.0.0...v28.0.1) (2023-04-12)

### Performance Improvements

- use `createEventHandler` instead of custom function ([437f98c](https://github.com/iiroj/iiro.fi/commit/437f98ce7d8c2f31ade42e805b6b9d05e459e8a6))

## [28.0.0](https://github.com/iiroj/iiro.fi/compare/v27.0.2...v28.0.0) (2023-04-12)

### ⚠ BREAKING CHANGES

- migrate back to Remix on Cloudflare Workers

### Features

- migrate back to Remix on Cloudflare Workers ([75e23d8](https://github.com/iiroj/iiro.fi/commit/75e23d8abd120ec2f9270266cddad153b4e071e1))

## [27.0.2](https://github.com/iiroj/iiro.fi/compare/v27.0.1...v27.0.2) (2023-04-01)

### Bug Fixes

- bump job title ([7cce6cf](https://github.com/iiroj/iiro.fi/commit/7cce6cf5f11d70a06767288cbf5c79f5a8aae505))
- **deps:** update all dependencies ([34d26f0](https://github.com/iiroj/iiro.fi/commit/34d26f05de17ce80c4a939b5da0af065c3d92ea2))

## [27.0.1](https://github.com/iiroj/iiro.fi/compare/v27.0.0...v27.0.1) (2023-03-19)

### Bug Fixes

- **vercel:** check for Vercel "Web Analytics" instead of other "Analytics" ([6f462c0](https://github.com/iiroj/iiro.fi/commit/6f462c0073a2efbdfc34195777823a68e0a54f9c))

## [27.0.0](https://github.com/iiroj/iiro.fi/compare/v26.3.3...v27.0.0) (2023-03-19)

### ⚠ BREAKING CHANGES

- switch to Next.js (Beta App Routing)

### Features

- setup Vercel Analytics ([26af01f](https://github.com/iiroj/iiro.fi/commit/26af01faf2190167fb756daf4a23a88e0b0585fc))
- switch to Next.js (Beta App Routing) ([fc69d16](https://github.com/iiroj/iiro.fi/commit/fc69d169b7c40e6101a36506bf77970c71c32247))

### Bug Fixes

- skip rendering Analytics component when disabled (during build) ([b078f81](https://github.com/iiroj/iiro.fi/commit/b078f811e7116355fbe7ed9af169966f0e9f8a22))

## [26.3.3](https://github.com/iiroj/iiro.fi/compare/v26.3.2...v26.3.3) (2023-03-18)

### Bug Fixes

- **dependencies:** update dependencies ([7963ab4](https://github.com/iiroj/iiro.fi/commit/7963ab4c88271b62de108135b7d24ef4885d7ca5))

## [26.3.2](https://github.com/iiroj/iiro.fi/compare/v26.3.1...v26.3.2) (2023-02-25)

### Reverts

- Revert "perf: use Array.includes() instead of Regex" ([b584196](https://github.com/iiroj/iiro.fi/commit/b58419688595458d9335d23a5da2023e171ad91e))

## [26.3.1](https://github.com/iiroj/iiro.fi/compare/v26.3.0...v26.3.1) (2023-02-25)

### Performance Improvements

- use Array.includes() instead of Regex ([a6bc687](https://github.com/iiroj/iiro.fi/commit/a6bc687ad61bcfea15c3222bb5667cb02a2c6a31))

## [26.3.0](https://github.com/iiroj/iiro.fi/compare/v26.2.2...v26.3.0) (2023-02-05)

### Features

- revert runtime to Cloudflare Workers instead of Pages ([5dbe100](https://github.com/iiroj/iiro.fi/commit/5dbe1001039842f6aeb9d1c7e7056b02c7fedbd2))

## [26.2.2](https://github.com/iiroj/iiro.fi/compare/v26.2.1...v26.2.2) (2023-02-05)

### Bug Fixes

- **ci:** switch release job to default branch to trigger production deployment ([1d50e8e](https://github.com/iiroj/iiro.fi/commit/1d50e8e511674803edbc292279ec9c5d9d5030d5))

## [26.2.1](https://github.com/iiroj/iiro.fi/compare/v26.2.0...v26.2.1) (2023-02-05)

### Bug Fixes

- **ci:** switch release job to default branch to trigger production deployment ([f0c863d](https://github.com/iiroj/iiro.fi/commit/f0c863daa5c0ab1a47190d1fed3f48e7dfe17948))

## [26.2.0](https://github.com/iiroj/iiro.fi/compare/v26.1.1...v26.2.0) (2023-02-05)

### Features

- deploy to Cloudflare Pages instead of Workers ([c5778ba](https://github.com/iiroj/iiro.fi/commit/c5778ba97be066808f31466cc596a801fc01cc69))

### Bug Fixes

- add SRI hash to CSS file ([fd46199](https://github.com/iiroj/iiro.fi/commit/fd4619931cc24e181719141fc0b3e13542e23bc8))
- handle mapping 404 responses to Markdown ([7712977](https://github.com/iiroj/iiro.fi/commit/77129776f198667cc5f410d51c0bc5db496c569b))

## [26.1.1](https://github.com/iiroj/iiro.fi/compare/v26.1.0...v26.1.1) (2023-02-05)

### Bug Fixes

- return HTML instead of Markdown when all text types are accepted ([ad230a3](https://github.com/iiroj/iiro.fi/commit/ad230a3d8a27dea84396a23165803364ae2f7372))

## [26.1.0](https://github.com/iiroj/iiro.fi/compare/v26.0.1...v26.1.0) (2023-02-04)

### Features

- respond with plaintext (markdown) when text/html is not accepted ([0f4a222](https://github.com/iiroj/iiro.fi/commit/0f4a222dec427efe0674fcb22a4a326dfda35d32))

## [26.0.1](https://github.com/iiroj/iiro.fi/compare/v26.0.0...v26.0.1) (2023-01-22)

### Bug Fixes

- always add CSP headers ([2847a71](https://github.com/iiroj/iiro.fi/commit/2847a71fcb08001f73944d2cc3cd7d7074866b90))

## [26.0.0](https://github.com/iiroj/iiro.fi/compare/v25.4.1...v26.0.0) (2023-01-21)

### ⚠ BREAKING CHANGES

- remove Remix and just serve static HTML files from Cloudflare Worker

### Features

- remove Remix and just serve static HTML files from Cloudflare Worker ([b3d40a6](https://github.com/iiroj/iiro.fi/commit/b3d40a606a0ce7107188b4524fb445251a53a7ca))

### Bug Fixes

- **deps:** update to wrangler 2 ([067e71c](https://github.com/iiroj/iiro.fi/commit/067e71c1a3e3f2dce05013d172b06139837c4b4f))

## [25.4.1](https://github.com/iiroj/iiro.fi/compare/v25.4.0...v25.4.1) (2023-01-21)

### Reverts

- Revert "feat: use ESM module workers" ([8452f1d](https://github.com/iiroj/iiro.fi/commit/8452f1de68caf2de2b2a8f1b067fa48259235414))
- Revert "refactor: rename directory to worker/" ([c22e58c](https://github.com/iiroj/iiro.fi/commit/c22e58c72918038084334aba0ee7bc4e92803a9f))

## [25.4.0](https://github.com/iiroj/iiro.fi/compare/v25.3.3...v25.4.0) (2023-01-21)

### Features

- use ESM module workers ([69641ab](https://github.com/iiroj/iiro.fi/commit/69641abbd38def8e43930f7aeabf412afe4ff5db))

### Bug Fixes

- make config files ESM compatible ([45ee237](https://github.com/iiroj/iiro.fi/commit/45ee237c2970baecd7c0f87eecd5f3653c21a28a))

## [25.3.3](https://github.com/iiroj/iiro.fi/compare/v25.3.2...v25.3.3) (2023-01-21)

### Bug Fixes

- **cloudflare:** remove compatibility flag ([982116e](https://github.com/iiroj/iiro.fi/commit/982116eadbd0d249af9f89e67bf67ef42e035d22))

## [25.3.2](https://github.com/iiroj/iiro.fi/compare/v25.3.1...v25.3.2) (2023-01-21)

### Bug Fixes

- remove console.log ([55c0af8](https://github.com/iiroj/iiro.fi/commit/55c0af85d5033b1c8c47162bd1dcd8122c1a6883))

## [25.3.1](https://github.com/iiroj/iiro.fi/compare/v25.3.0...v25.3.1) (2023-01-21)

### Performance Improvements

- support only last 2 versions in browserslistrc ([5ed2f36](https://github.com/iiroj/iiro.fi/commit/5ed2f360ad206662ea22e35df4c5d030bad978a6))

## [25.3.0](https://github.com/iiroj/iiro.fi/compare/v25.2.0...v25.3.0) (2023-01-21)

### Features

- use V2 meta ([0e1e56b](https://github.com/iiroj/iiro.fi/commit/0e1e56bf2cfa12e3ad83402302ae0797487dbf90))
- use V2 route naming ([693e462](https://github.com/iiroj/iiro.fi/commit/693e462f832f639da2ec20185efad1a438816ff7))

### Bug Fixes

- **deps:** update all dependencies ([2887d29](https://github.com/iiroj/iiro.fi/commit/2887d2939b07085c1fd66ae97fdf86a8f458c414))

### Performance Improvements

- disable JS in production ([46fcf97](https://github.com/iiroj/iiro.fi/commit/46fcf9755687de4198d766e6de1226ce043cc9ab))

## [25.2.0](https://github.com/iiroj/iiro.fi/compare/v25.1.4...v25.2.0) (2023-01-15)

### Features

- use English version of company name ([5dada98](https://github.com/iiroj/iiro.fi/commit/5dada9815ce78766d3dce29ecbf1d7a02b50dd75))

### Bug Fixes

- **deps:** update all dependencies ([5b3dd5b](https://github.com/iiroj/iiro.fi/commit/5b3dd5be22bbe53dfc90a0fc522ebb6fee493d7b))

## [25.1.4](https://github.com/iiroj/iiro.fi/compare/v25.1.3...v25.1.4) (2023-01-08)

### Bug Fixes

- definitely fix loading Cloudflare analytics script ([8975404](https://github.com/iiroj/iiro.fi/commit/8975404a2b0110d017bbd9be57b10267fa328631))

## [25.1.3](https://github.com/iiroj/iiro.fi/compare/v25.1.2...v25.1.3) (2023-01-08)

### Bug Fixes

- **wrangler:** set explicit production env name to match previous ([c534951](https://github.com/iiroj/iiro.fi/commit/c534951e78841a92469fe5b281c8433d17054188))

## [25.1.2](https://github.com/iiroj/iiro.fi/compare/v25.1.1...v25.1.2) (2023-01-08)

### Bug Fixes

- use correct format for CSP header ([dcf70ec](https://github.com/iiroj/iiro.fi/commit/dcf70ec333dfa6ae7db4e8c35744a849c1dc7ec7))

## [25.1.1](https://github.com/iiroj/iiro.fi/compare/v25.1.0...v25.1.1) (2023-01-08)

### Bug Fixes

- **deps:** update all dependencies ([29d973d](https://github.com/iiroj/iiro.fi/commit/29d973d19fded5ea671b3fa709a4b533f93221b5))
- **wrangler:** publish to production env ([ad52a78](https://github.com/iiroj/iiro.fi/commit/ad52a78daeceb064d8e06a011d5554b3f00e1ba5))

## [25.1.0](https://github.com/iiroj/iiro.fi/compare/v25.0.8...v25.1.0) (2023-01-08)

### Features

- add Cloudflare analytics script ([b8ef9c6](https://github.com/iiroj/iiro.fi/commit/b8ef9c6a06a18cf7ec5a9c1439e124d97202532c))

## [25.0.8](https://github.com/iiroj/iiro.fi/compare/v25.0.7...v25.0.8) (2023-01-03)

### Bug Fixes

- **deps:** update dependencies ([f3a05f4](https://github.com/iiroj/iiro.fi/commit/f3a05f4c2317cf37d0738aceb82325f4b4261e3e))

## [25.0.7](https://github.com/iiroj/iiro.fi/compare/v25.0.6...v25.0.7) (2022-12-18)

### Bug Fixes

- **deps:** update all dependencies ([16ab81c](https://github.com/iiroj/iiro.fi/commit/16ab81ce1b4d1cdd0820f0aa6ca37b96c588030e))

## [25.0.6](https://github.com/iiroj/iiro.fi/compare/v25.0.5...v25.0.6) (2022-11-23)

### Performance Improvements

- use createRequestHandler directly from @remix-run/cloudflare instead of cloudflare-workers ([79d902a](https://github.com/iiroj/iiro.fi/commit/79d902a672ec1282b08309693e6bbfad1f6e3782))

## [25.0.5](https://github.com/iiroj/iiro.fi/compare/v25.0.4...v25.0.5) (2022-11-19)

### Bug Fixes

- restore LiveReload with explicit port ([2b1fc67](https://github.com/iiroj/iiro.fi/commit/2b1fc678e4b20f7a485972cf6c3bb1514c5bde36))

## [25.0.4](https://github.com/iiroj/iiro.fi/compare/v25.0.3...v25.0.4) (2022-11-19)

### Bug Fixes

- remove LiveReload for now as it's not working ([c06f392](https://github.com/iiroj/iiro.fi/commit/c06f392efbd3ed2d843542ba480fcb8d4e384992))

## [25.0.3](https://github.com/iiroj/iiro.fi/compare/v25.0.2...v25.0.3) (2022-11-13)

### Bug Fixes

- **worker:** fix typo in CSP header ([4a0a8e0](https://github.com/iiroj/iiro.fi/commit/4a0a8e07868ed1f41013790c30cbfe234490f936))

## [25.0.2](https://github.com/iiroj/iiro.fi/compare/v25.0.1...v25.0.2) (2022-11-13)

### Bug Fixes

- **worker:** update CSP header ([20f101d](https://github.com/iiroj/iiro.fi/commit/20f101db5137e151dde57a90e8cadcd6c30c4393))

## [25.0.1](https://github.com/iiroj/iiro.fi/compare/v25.0.0...v25.0.1) (2022-11-13)

### Bug Fixes

- **ci:** use correct tag for GitHub Action ([1077dc1](https://github.com/iiroj/iiro.fi/commit/1077dc11b0b21789c12c7e1694662b9dcc427c26))

## [25.0.0](https://github.com/iiroj/iiro.fi/compare/v24.6.0...v25.0.0) (2022-11-13)

### ⚠ BREAKING CHANGES

- migrate to Remix + Cloudflare Workers

### Features

- migrate to Remix + Cloudflare Workers ([907a0d4](https://github.com/iiroj/iiro.fi/commit/907a0d4a5923f090ee1f7ab6e9a4281d2d67bf71))

### Bug Fixes

- **typescript:** set TSC skipLibCheck to true ([fa8e48e](https://github.com/iiroj/iiro.fi/commit/fa8e48e7f244338cbe2031c3cffb2e7de60f178a))

## [24.6.0](https://github.com/iiroj/iiro.fi/compare/v24.5.11...v24.6.0) (2022-10-28)

### Features

- **deps:** update Next.js 13 and other dependencies ([c50290e](https://github.com/iiroj/iiro.fi/commit/c50290e29e071704ffebeea0eaf6d96b6c5b238e))

## [24.5.11](https://github.com/iiroj/iiro.fi/compare/v24.5.10...v24.5.11) (2022-10-12)

### Bug Fixes

- **deps:** update all dependencies ([62450c0](https://github.com/iiroj/iiro.fi/commit/62450c06a4aca7f18f30b22e95f585e502e12422))

## [24.5.10](https://github.com/iiroj/iiro.fi/compare/v24.5.9...v24.5.10) (2022-09-24)

### Bug Fixes

- **deps:** update all dependencies ([04a7902](https://github.com/iiroj/iiro.fi/commit/04a7902d792cb5c11dd613437221f4924419d47a))
- **deps:** update all dependencies ([09713ca](https://github.com/iiroj/iiro.fi/commit/09713caef1f640772e0f609b9ca026c84e0ab28d))

## [24.5.9](https://github.com/iiroj/iiro.fi/compare/v24.5.8...v24.5.9) (2022-08-20)

### Bug Fixes

- sync action with Vercel example ([5c2861e](https://github.com/iiroj/iiro.fi/commit/5c2861e56846b962438535f73ab8560a5fece8af))

## [24.5.8](https://github.com/iiroj/iiro.fi/compare/v24.5.7...v24.5.8) (2022-08-20)

### Bug Fixes

- set Vercel build to prod target ([da1b411](https://github.com/iiroj/iiro.fi/commit/da1b4115d795e2f5269af594c35acb45752eb22e))

## [24.5.7](https://github.com/iiroj/iiro.fi/compare/v24.5.6...v24.5.7) (2022-08-20)

### Bug Fixes

- add token arg for Vercel config pull ([2be93eb](https://github.com/iiroj/iiro.fi/commit/2be93ebd97319d9cb11af728af1f46b31d35be0b))

## [24.5.6](https://github.com/iiroj/iiro.fi/compare/v24.5.5...v24.5.6) (2022-08-20)

### Bug Fixes

- pull Vercel info before building ([e1ce0ee](https://github.com/iiroj/iiro.fi/commit/e1ce0ee46df11d7a5d37806c49aec8e2862f3649))

### Reverts

- Revert "ci: ignore "Pushes" workflow on semver tags" ([223e709](https://github.com/iiroj/iiro.fi/commit/223e70937b70b5463158ec0ff0d282064dfb69de))

## [24.5.5](https://github.com/iiroj/iiro.fi/compare/v24.5.4...v24.5.5) (2022-08-20)

### Performance Improvements

- add CSS styles as preload Link header ([154215d](https://github.com/iiroj/iiro.fi/commit/154215db2515c81d4f589d823f421fbd34c2f569))

## [24.5.4](https://github.com/iiroj/iiro.fi/compare/v24.5.3...v24.5.4) (2022-08-20)

### Bug Fixes

- wrap 404 page link to footer and list ([d6eaaea](https://github.com/iiroj/iiro.fi/commit/d6eaaea548bb3e8001812931fd9bdeab27abd3b3))

## [24.5.3](https://github.com/iiroj/iiro.fi/compare/v24.5.2...v24.5.3) (2022-08-20)

### Bug Fixes

- **deps:** update all dependencies ([8ab2d2a](https://github.com/iiroj/iiro.fi/commit/8ab2d2abf83c3a38fb38b7cf55f34979afa6f67c))

## [24.5.2](https://github.com/iiroj/iiro.fi/compare/v24.5.1...v24.5.2) (2022-07-10)

### Bug Fixes

- **deps:** update dependencies ([7471da1](https://github.com/iiroj/iiro.fi/commit/7471da1ed6b89ed3ef8e10ffca918276f076856a))
- **next:** set runtime as "experimental-edge" ([7fb6910](https://github.com/iiroj/iiro.fi/commit/7fb6910067bc6ccae9813fc7307b461c5e11b435))

## [24.5.1](https://github.com/iiroj/iiro.fi/compare/v24.5.0...v24.5.1) (2022-06-08)

### Bug Fixes

- update title ([b257106](https://github.com/iiroj/iiro.fi/commit/b257106b0033b56b43244b237378776df5b7c152))

## [24.5.0](https://github.com/iiroj/iiro.fi/compare/v24.4.3...v24.5.0) (2022-05-26)

### Features

- update title ([bc48749](https://github.com/iiroj/iiro.fi/commit/bc487497879f8db2cc19af66432ff21cea34c035))

### [24.4.3](https://github.com/iiroj/iiro.fi/compare/v24.4.2...v24.4.3) (2022-05-22)

### Bug Fixes

- **deps:** update dependencies ([b67fe41](https://github.com/iiroj/iiro.fi/commit/b67fe41b6b33db60673115bdfe56ceb19ec00597))

### [24.4.2](https://github.com/iiroj/iiro.fi/compare/v24.4.1...v24.4.2) (2022-05-10)

### Bug Fixes

- **deps:** update dependencies ([b4330a4](https://github.com/iiroj/iiro.fi/commit/b4330a43b51f89fe752a358cd580777d6b73a78e))

### [24.4.1](https://github.com/iiroj/iiro.fi/compare/v24.4.0...v24.4.1) (2022-04-30)

### Bug Fixes

- **deps:** update dependencies ([f56cdce](https://github.com/iiroj/iiro.fi/commit/f56cdcea55f170e1b925c12644e18581c2df989a))

## [24.4.0](https://github.com/iiroj/iiro.fi/compare/v24.3.12...v24.4.0) (2022-04-02)

### Features

- simplify styles to remove styled-components ([265be1d](https://github.com/iiroj/iiro.fi/commit/265be1d52095034f3d20a0e4afbdcd84d5056edb))

### [24.3.12](https://github.com/iiroj/iiro.fi/compare/v24.3.11...v24.3.12) (2022-04-02)

### Bug Fixes

- attribute release commit to previous author ([1fed717](https://github.com/iiroj/iiro.fi/commit/1fed71742d51a94157916a32efd20ec3afa002c4))

### [24.3.11](https://github.com/iiroj/iiro.fi/compare/v24.3.10...v24.3.11) (2022-04-02)

### Bug Fixes

- setup deployment environment ([9ecfc1d](https://github.com/iiroj/iiro.fi/commit/9ecfc1d8269ffad20680defdc0c0ecc541f6a763))

### [24.3.10](https://github.com/iiroj/iiro.fi/compare/v24.3.9...v24.3.10) (2022-04-02)

### Bug Fixes

- create GitHub release ([f0dba1d](https://github.com/iiroj/iiro.fi/commit/f0dba1dfea6e9ddf3ff87c413d9e8c1cc0f268a0))

### [24.3.9](https://github.com/iiroj/iiro.fi/compare/v24.3.8...v24.3.9) (2022-04-02)

### Bug Fixes

- allow actions to run on release tag ([7f2b984](https://github.com/iiroj/iiro.fi/commit/7f2b9841da4692d4511e0b50779d145189ca6e29))
- bump package.json version number on release ([487722d](https://github.com/iiroj/iiro.fi/commit/487722dd665d89e2760c6d0a0cb9e1db9682acd1))

### [24.3.8](https://github.com/iiroj/iiro.fi/compare/v24.3.7...v24.3.8) (2022-04-02)

### Bug Fixes

- commit versioned files ([c44134b](https://github.com/iiroj/iiro.fi/commit/c44134b5fa6610b1d9b64511de608e92cba27ffd))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [24.3.5](https://github.com/iiroj/iiro.fi/compare/v24.3.4...v24.3.5) (2022-04-02)

### [24.3.4](https://github.com/iiroj/iiro.fi/compare/v24.3.3...v24.3.4) (2022-04-02)

### [24.3.3](https://github.com/iiroj/iiro.fi/compare/v24.3.2...v24.3.3) (2022-04-02)

### [24.3.2](https://github.com/iiroj/iiro.fi/compare/v24.3.1...v24.3.2) (2022-04-02)

### [24.3.1](https://github.com/iiroj/iiro.fi/compare/v24.3.0...v24.3.1) (2022-04-02)

## [24.3.0](https://github.com/iiroj/iiro.fi/compare/v24.2.1...v24.3.0) (2022-04-02)

### Features

- update React 18, other dependencies ([df5e749](https://github.com/iiroj/iiro.fi/commit/df5e74909a0c869ee5bbb2604445d7793c2ad384))

### [24.2.1](https://github.com/iiroj/iiro.fi/compare/v24.2.0...v24.2.1) (2022-03-28)

## [24.2.0](https://github.com/iiroj/iiro.fi/compare/v24.1.19...v24.2.0) (2022-03-27)

### Features

- add Vercel Analytics to CSP ([a533fe2](https://github.com/iiroj/iiro.fi/commit/a533fe2c29613843318b5cf7be7ff10c2aff45a4))

### [24.1.19](https://github.com/iiroj/iiro.fi/compare/v24.1.18...v24.1.19) (2022-03-12)

### [24.1.18](https://github.com/iiroj/iiro.fi/compare/v24.1.17...v24.1.18) (2022-02-26)

### [24.1.17](https://github.com/iiroj/iiro.fi/compare/v24.1.16...v24.1.17) (2022-02-03)

### [24.1.16](https://github.com/iiroj/iiro.fi/compare/v24.1.15...v24.1.16) (2022-02-03)

### [24.1.15](https://github.com/iiroj/iiro.fi/compare/v24.1.14...v24.1.15) (2022-01-29)

### [24.1.14](https://github.com/iiroj/iiro.fi/compare/v24.1.13...v24.1.14) (2022-01-29)

### [24.1.13](https://github.com/iiroj/iiro.fi/compare/v24.1.12...v24.1.13) (2022-01-29)

### [24.1.12](https://github.com/iiroj/iiro.fi/compare/v24.1.11...v24.1.12) (2022-01-28)

### [24.1.11](https://github.com/iiroj/iiro.fi/compare/v24.1.10...v24.1.11) (2022-01-28)

### [24.1.10](https://github.com/iiroj/iiro.fi/compare/v24.1.9...v24.1.10) (2022-01-20)

### [24.1.9](https://github.com/iiroj/iiro.fi/compare/v24.1.8...v24.1.9) (2022-01-08)

### [24.1.8](https://github.com/iiroj/iiro.fi/compare/v24.1.7...v24.1.8) (2022-01-07)

### [24.1.7](https://github.com/iiroj/iiro.fi/compare/v24.1.6...v24.1.7) (2021-12-29)

### [24.1.6](https://github.com/iiroj/iiro.fi/compare/v24.1.5...v24.1.6) (2021-12-05)

### [24.1.5](https://github.com/iiroj/iiro.fi/compare/v24.1.4...v24.1.5) (2021-12-05)

### [24.1.4](https://github.com/iiroj/iiro.fi/compare/v24.1.3...v24.1.4) (2021-11-28)

### [24.1.3](https://github.com/iiroj/iiro.fi/compare/v24.1.2...v24.1.3) (2021-11-21)

### [24.1.2](https://github.com/iiroj/iiro.fi/compare/v24.1.1...v24.1.2) (2021-11-21)

### [24.1.1](https://github.com/iiroj/iiro.fi/compare/v24.1.0...v24.1.1) (2021-11-21)

## [24.1.0](https://github.com/iiroj/iiro.fi/compare/v24.0.4...v24.1.0) (2021-11-20)

### Features

- replace `[@vanilla-extract](https://github.com/vanilla-extract)` with `styled-components` ([0ecf5df](https://github.com/iiroj/iiro.fi/commit/0ecf5dfdf2438807313b91ff2a3f4a8994421ec8))

### [24.0.4](https://github.com/iiroj/iiro.fi/compare/v24.0.3...v24.0.4) (2021-11-20)

### [24.0.3](https://github.com/iiroj/iiro.fi/compare/v24.0.2...v24.0.3) (2021-11-13)

### Bug Fixes

- really fix `vanilla-extract` CSS styles for real ([3aaccf4](https://github.com/iiroj/iiro.fi/commit/3aaccf4f47c10dde2c79ec61d28e16fa1d52f5f0))

### [24.0.2](https://github.com/iiroj/iiro.fi/compare/v24.0.1...v24.0.2) (2021-11-13)

### [24.0.1](https://github.com/iiroj/iiro.fi/compare/v24.0.0...v24.0.1) (2021-10-30)

## [24.0.0](https://github.com/iiroj/iiro.fi/compare/v23.12.4...v24.0.0) (2021-10-30)

### ⚠ BREAKING CHANGES

- use Next.js and `@sls-next/serverless-component`

### Features

- use Next.js and `@sls-next/serverless-component` ([55191bc](https://github.com/iiroj/iiro.fi/commit/55191bcc292cd9051ad4fe33d5e7bcabb90842e6))

### [23.12.4](https://github.com/iiroj/iiro.fi/compare/v23.12.3...v23.12.4) (2021-10-23)

### Bug Fixes

- use native a tags instead of Link component on root page ([2d6ce2b](https://github.com/iiroj/iiro.fi/commit/2d6ce2bf7bc9798c42518887d48c96b9cc97ec30))

### [23.12.3](https://github.com/iiroj/iiro.fi/compare/v23.12.2...v23.12.3) (2021-10-23)

### [23.12.2](https://github.com/iiroj/iiro.fi/compare/v23.12.1...v23.12.2) (2021-10-23)

### [23.12.1](https://github.com/iiroj/iiro.fi/compare/v23.12.0...v23.12.1) (2021-10-17)

## [23.12.0](https://github.com/iiroj/iiro.fi/compare/v23.11.2...v23.12.0) (2021-10-17)

### Features

- use react-router-dom ([b38554a](https://github.com/iiroj/iiro.fi/commit/b38554a831f0888364aaff08c995f1fc1cfd78b6))

### [23.11.2](https://github.com/iiroj/iiro.fi/compare/v23.11.1...v23.11.2) (2021-10-16)

### [23.11.1](https://github.com/iiroj/iiro.fi/compare/v23.11.0...v23.11.1) (2021-10-10)

### Bug Fixes

- add `defer` prop only to script elements ([9ffd993](https://github.com/iiroj/iiro.fi/commit/9ffd9930d0d9f4c6f96c3fa5243d296be91adb30))
- use React.cloneElement instead of mutating props ([976d4b1](https://github.com/iiroj/iiro.fi/commit/976d4b1e9fc100cc3123f1750474a330a4d2594d))

## [23.11.0](https://github.com/iiroj/iiro.fi/compare/v23.10.4...v23.11.0) (2021-10-10)

### Features

- add SRI to style and script tags ([352b8b4](https://github.com/iiroj/iiro.fi/commit/352b8b4fdb4614928fdfb5987a49039b2a50587c))

### [23.10.4](https://github.com/iiroj/iiro.fi/compare/v23.10.3...v23.10.4) (2021-10-09)

### Bug Fixes

- remove tiny negative spacing altogether ([2a2259f](https://github.com/iiroj/iiro.fi/commit/2a2259f7026cd2f32712d096aa4cc9df63473353))

### [23.10.3](https://github.com/iiroj/iiro.fi/compare/v23.10.2...v23.10.3) (2021-10-09)

### Bug Fixes

- wrap negative rem spacing in template string ([ef62649](https://github.com/iiroj/iiro.fi/commit/ef62649c2384c87672c799ea19215af11ddf7190))

### [23.10.2](https://github.com/iiroj/iiro.fi/compare/v23.10.1...v23.10.2) (2021-10-08)

### [23.10.1](https://github.com/iiroj/iiro.fi/compare/v23.10.0...v23.10.1) (2021-10-08)

### Bug Fixes

- **react:** migrate `pipeToNodeWritable` to `renderToPipeableStream` ([b454e1e](https://github.com/iiroj/iiro.fi/commit/b454e1ecf5a80cd8c1ed6f1db27a51720c4a5f2c))

## [23.10.0](https://github.com/iiroj/iiro.fi/compare/v23.9.0...v23.10.0) (2021-09-29)

### Features

- update employment ([85147e4](https://github.com/iiroj/iiro.fi/commit/85147e40dcdb59a4d77c9a2b0aa68d914647ad9e))

### Bug Fixes

- remove opacity from raster icons ([b3962b6](https://github.com/iiroj/iiro.fi/commit/b3962b66fdd1503165614aabf6c4191c35316f4e))

## [23.9.0](https://github.com/iiroj/iiro.fi/compare/v23.8.2...v23.9.0) (2021-09-26)

### Features

- update website icons ([97a3247](https://github.com/iiroj/iiro.fi/commit/97a3247cde73f39e9571de99790290ee8d3bd3c5))

### [23.8.2](https://github.com/iiroj/iiro.fi/compare/v23.8.1...v23.8.2) (2021-09-21)

### Bug Fixes

- use correct color variables ([a809eb1](https://github.com/iiroj/iiro.fi/commit/a809eb1ff522ccbbdb777478d04a9558a3b56a9e))

### [23.8.1](https://github.com/iiroj/iiro.fi/compare/v23.8.0...v23.8.1) (2021-09-21)

## [23.8.0](https://github.com/iiroj/iiro.fi/compare/v23.7.1...v23.8.0) (2021-09-21)

### Features

- adjust color styles for Safari 15 UI ([db9c660](https://github.com/iiroj/iiro.fi/commit/db9c66093b730d1495b3652e3c9e542e27d33575))

### [23.7.1](https://github.com/iiroj/iiro.fi/compare/v23.7.0...v23.7.1) (2021-09-20)

### Bug Fixes

- always emit debug class names to work around build issue ([21bba24](https://github.com/iiroj/iiro.fi/commit/21bba24300e35254cc7d39fc19e3d73f8d2124e2))

## [23.7.0](https://github.com/iiroj/iiro.fi/compare/v23.6.1...v23.7.0) (2021-09-20)

### Features

- use [@vanilla-extract](https://github.com/vanilla-extract) for CSS ([e4875cf](https://github.com/iiroj/iiro.fi/commit/e4875cf7ba0fe5dcc7a2395320adca9aab7c7ea6))

### [23.6.1](https://github.com/iiroj/iiro.fi/compare/v23.6.0...v23.6.1) (2021-09-10)

### Bug Fixes

- remove 'unsafe-inline' CSP policies as unnecessary ([311cb87](https://github.com/iiroj/iiro.fi/commit/311cb87ff73f58f080285a56ec7b662722181d16))

## [23.6.0](https://github.com/iiroj/iiro.fi/compare/v23.5.4...v23.6.0) (2021-09-10)

### Features

- use experimental pipeToNodeWritable for SSR ([310ad36](https://github.com/iiroj/iiro.fi/commit/310ad3659fb503c4e080c39e75200ecf512906b1))

### Bug Fixes

- add explicit default value ([2916c48](https://github.com/iiroj/iiro.fi/commit/2916c48528c1da1dfcb947c65c7893a6784885e7))

### [23.5.4](https://github.com/iiroj/iiro.fi/compare/v23.5.3...v23.5.4) (2021-09-04)

### [23.5.3](https://github.com/iiroj/iiro.fi/compare/v23.5.2...v23.5.3) (2021-08-27)

### [23.5.2](https://github.com/iiroj/iiro.fi/compare/v23.5.1...v23.5.2) (2021-07-08)

### [23.5.1](https://github.com/iiroj/iiro.fi/compare/v23.5.0...v23.5.1) (2021-07-05)

### Bug Fixes

- add CSP headers for Cloudflare Web Analytics ([4d01a7e](https://github.com/iiroj/iiro.fi/commit/4d01a7e6c4d217a5aefae8ff8e9ada7a0f1bbb30))

## [23.5.0](https://github.com/iiroj/iiro.fi/compare/v23.4.0...v23.5.0) (2021-07-05)

### Features

- add Cloudflare Web Analytics script ([068b288](https://github.com/iiroj/iiro.fi/commit/068b2887c3ed2478dfc4b025771522bb0bba7f84))

## [23.4.0](https://github.com/iiroj/iiro.fi/compare/v23.3.6...v23.4.0) (2021-07-05)

### Features

- use experimental React ([c905691](https://github.com/iiroj/iiro.fi/commit/c9056913b1c1f25ea9d72484e9f7f157698554b1))

### [23.3.6](https://github.com/iiroj/iiro.fi/compare/v23.3.5...v23.3.6) (2021-07-05)

### [23.3.5](https://github.com/iiroj/iiro.fi/compare/v23.3.4...v23.3.5) (2021-07-04)

### Bug Fixes

- do not include preload links for deferred modules ([b4f377c](https://github.com/iiroj/iiro.fi/commit/b4f377c8aeff450a891955b3c39007f72c915342))

### [23.3.4](https://github.com/iiroj/iiro.fi/compare/v23.3.3...v23.3.4) (2021-07-04)

### [23.3.3](https://github.com/iiroj/iiro.fi/compare/v23.3.2...v23.3.3) (2021-07-04)

### Bug Fixes

- **deps:** update html-renderer-webpack-plugin@6 ([7a4761a](https://github.com/iiroj/iiro.fi/commit/7a4761a3d48bc176e19762d9ee3042fc6cf5a5d6))

### [23.3.2](https://github.com/iiroj/iiro.fi/compare/v23.3.1...v23.3.2) (2021-06-29)

### Bug Fixes

- update language ([c75388b](https://github.com/iiroj/iiro.fi/commit/c75388bf742050e4b275e7c54831b5b41232a8e5))

### [23.3.1](https://github.com/iiroj/iiro.fi/compare/v23.3.0...v23.3.1) (2021-05-04)

## [23.3.0](https://github.com/iiroj/iiro.fi/compare/v23.2.4...v23.3.0) (2021-05-04)

### Features

- improve site content ([9e4edfd](https://github.com/iiroj/iiro.fi/commit/9e4edfd5623db88f7b1d1d06d12aaded301c0e4a))
- improve worker ([85a1eb0](https://github.com/iiroj/iiro.fi/commit/85a1eb0bb4e3d763be0dd6c8cc9efe7a15d2ad8b))
- remove plaintext response ([cade322](https://github.com/iiroj/iiro.fi/commit/cade322a74f10aa0b13f161f11bd52376e2642f4))

### [23.2.4](https://github.com/iiroj/iiro.fi/compare/v23.2.3...v23.2.4) (2021-05-02)

### [23.2.3](https://github.com/iiroj/iiro.fi/compare/v23.2.2...v23.2.3) (2021-04-28)

### Bug Fixes

- disable Google's FLoC ([b497112](https://github.com/iiroj/iiro.fi/commit/b497112a3199cf60096fcd6d3cb8138a236cb9f8))
- remove redundant CSP headers ([e5cf15f](https://github.com/iiroj/iiro.fi/commit/e5cf15f6ada4ee7811e66c269a2032f6e89867c7))

### [23.2.2](https://github.com/iiroj/iiro.fi/compare/v23.2.1...v23.2.2) (2021-04-25)

### Bug Fixes

- use correct entrypoint script name ([be73aa8](https://github.com/iiroj/iiro.fi/commit/be73aa82ef1531dd0e09af48b959fa98f810e38b))

### [23.2.1](https://github.com/iiroj/iiro.fi/compare/v23.2.0...v23.2.1) (2021-04-25)

### Bug Fixes

- use stable React ([6c4e0dc](https://github.com/iiroj/iiro.fi/commit/6c4e0dc957ab37ed8f52c33f4c1f876985b57c25))

## [23.2.0](https://github.com/iiroj/iiro.fi/compare/v23.1.0...v23.2.0) (2021-04-25)

### Features

- remove external fronts ([e1be1ea](https://github.com/iiroj/iiro.fi/commit/e1be1ea896fe26337cbc9e201119a39dd55fcfbc))

### Bug Fixes

- add Content-Type: text/plain header to error response ([7e4b8a5](https://github.com/iiroj/iiro.fi/commit/7e4b8a5eff86f29f7ee6d107e01058058334e851))
- if request accepts text/html, do not treat it as plaintext ([4615b47](https://github.com/iiroj/iiro.fi/commit/4615b47284ab3b8da4c83dc9344f3fe27d17b10c))

## [23.1.0](https://github.com/iiroj/iiro.fi/compare/v23.0.0...v23.1.0) (2021-04-25)

### Features

- add support for plaintext response ([7fd643c](https://github.com/iiroj/iiro.fi/commit/7fd643cf16f9bd02d178233c8cd1cd55fe68a177))

### Bug Fixes

- do not use language-specific URL ([2caa14e](https://github.com/iiroj/iiro.fi/commit/2caa14e7a2dc71d0c9fdff9765a29d0c89af1f1c))
- remove unnecessary min-width style ([da4803e](https://github.com/iiroj/iiro.fi/commit/da4803e965025ce0c33938039cb87daf99cfe473))

## [23.0.0](https://github.com/iiroj/iiro.fi/compare/v22.5.1...v23.0.0) (2021-03-06)

### ⚠ BREAKING CHANGES

- The underlying framework Next.js has been replaced
  with homegrown robust scalable solutions

### Features

- redo site with custom framework ([cb8a8c1](https://github.com/iiroj/iiro.fi/commit/cb8a8c122aae238455a66e431decd8157e7b6923))

### [22.5.1](https://github.com/iiroj/iiro.fi/compare/v22.5.0...v22.5.1) (2020-12-23)

## [22.5.0](https://github.com/iiroj/iiro.fi/compare/v22.4.0...v22.5.0) (2020-12-23)

### Features

- publish to Cloudflare Workers Site ([5cdeb0d](https://github.com/iiroj/iiro.fi/commit/5cdeb0d46655eb53ebc131c39169efa3158ffe25))

## [22.4.0](https://github.com/iiroj/iiro.fi/compare/v22.3.2...v22.4.0) (2020-12-23)

### Features

- add Cloudflare Web Analytics ([256131f](https://github.com/iiroj/iiro.fi/commit/256131ffd1e62bf569f81ecad79ab70918d378e8))

### Bug Fixes

- **tsc:** update csstype type usage ([7da0398](https://github.com/iiroj/iiro.fi/commit/7da0398ff1334e73a2eeb6eb25943541f2604428))

### [22.3.2](https://github.com/iiroj/iiro.fi/compare/v22.3.1...v22.3.2) (2020-10-31)

### Bug Fixes

- **tsc:** import emotion css prop type ([4d20538](https://github.com/iiroj/iiro.fi/commit/4d20538e0a7e14d115cbabd4c1eac1072cbdeb66))
- move static head elements into \_app ([2151bee](https://github.com/iiroj/iiro.fi/commit/2151bee5680b24e29f7c291a41fcd2b18b1349b1))
- remove serviceworker declaration from webmanifest ([76922d7](https://github.com/iiroj/iiro.fi/commit/76922d72d8e16d74c456d6a917ec3a0719b0c8ce))
- render Next.js Html component ([e9493c1](https://github.com/iiroj/iiro.fi/commit/e9493c1c6ad8711a764398365059e0dc9a01cf4c))

### [22.3.1](https://github.com/iiroj/iiro.fi/compare/v22.3.0...v22.3.1) (2020-07-07)

## [22.3.0](https://github.com/iiroj/iiro.fi/compare/v22.2.0...v22.3.0) (2020-07-07)

### Features

- deploy to S3 instead of Vercel Now ([2cddc2f](https://github.com/iiroj/iiro.fi/commit/2cddc2fffd81b127a452d28184fce3cf56a96ab9))

## [22.2.0](https://github.com/iiroj/iiro.fi/compare/v22.1.5...v22.2.0) (2020-03-21)

### Features

- no longer bumb version for dependencies, add pre-push hook ([c4bf318](https://github.com/iiroj/iiro.fi/commit/c4bf318d50d59accab36e52189007638559f4667))

### [22.1.5](https://github.com/iiroj/iiro.fi/compare/v22.1.4...v22.1.5) (2020-03-21)

### [22.1.4](https://github.com/iiroj/iiro.fi/compare/v22.1.3...v22.1.4) (2020-03-10)

### [22.1.3](https://github.com/iiroj/iiro.fi/compare/v22.1.2...v22.1.3) (2020-02-29)

### [22.1.2](https://github.com/iiroj/iiro.fi/compare/v22.1.1...v22.1.2) (2020-01-19)

### [22.1.1](https://github.com/iiroj/iiro.fi/compare/v22.1.0...v22.1.1) (2020-01-05)

### Bug Fixes

- remove console.log from Service Worker unregistration ([459b816](https://github.com/iiroj/iiro.fi/commit/459b81623fd587fa89bd5eb9f6657e123147b0c3))

## [22.1.0](https://github.com/iiroj/iiro.fi/compare/v22.0.2...v22.1.0) (2020-01-05)

### Features

- unregister possible leftover Service Workers ([b92806d](https://github.com/iiroj/iiro.fi/commit/b92806da6551ce7da5c018b6ab8798e0b1a5a62a))

### [22.0.2](https://github.com/iiroj/iiro.fi/compare/v22.0.1...v22.0.2) (2020-01-04)

### [22.0.1](https://github.com/iiroj/iiro.fi/compare/v22.0.0...v22.0.1) (2019-12-24)

## [22.0.0](https://github.com/iiroj/iiro.fi/compare/v21.6.2...v22.0.0) (2019-11-30)

### ⚠ BREAKING CHANGES

- The runtime environment changed

### Features

- convert site to Next.js ([480dc5c](https://github.com/iiroj/iiro.fi/commit/480dc5c6f2d0f29fc47c3f1627df0fcac5e19df5))

### [21.6.2](https://github.com/iiroj/iiro.fi/compare/v21.6.1...v21.6.2) (2019-11-19)

### [21.6.1](https://github.com/iiroj/iiro.fi/compare/v21.6.0...v21.6.1) (2019-10-08)

### Bug Fixes

- limit image height on mobile ([f20b817](https://github.com/iiroj/iiro.fi/commit/f20b817))

## [21.6.0](https://github.com/iiroj/iiro.fi/compare/v21.5.8...v21.6.0) (2019-10-06)

### Features

- update workbox, sort out react-helmet-async, use now.sh ([ca50dea](https://github.com/iiroj/iiro.fi/commit/ca50dea))

### [21.5.8](https://github.com/iiroj/iiro.fi/compare/v21.5.7...v21.5.8) (2019-09-22)

### [21.5.7](https://github.com/iiroj/iiro.fi/compare/v21.5.6...v21.5.7) (2019-08-27)

### [21.5.6](https://github.com/iiroj/iiro.fi/compare/v21.5.5...v21.5.6) (2019-07-17)

### Bug Fixes

- remove leftover code ([e8a43ec](https://github.com/iiroj/iiro.fi/commit/e8a43ec))

### [21.5.5](https://github.com/iiroj/iiro.fi/compare/v21.5.4...v21.5.5) (2019-07-17)

### [21.5.4](https://github.com/iiroj/iiro.fi/compare/v21.5.3...v21.5.4) (2019-07-11)

### [21.5.3](https://github.com/iiroj/iiro.fi/compare/v21.5.2...v21.5.3) (2019-07-07)

### Bug Fixes

- add https://fonts.googleapis.com to CSP ([86619fa](https://github.com/iiroj/iiro.fi/commit/86619fa))

### [21.5.2](https://github.com/iiroj/iiro.fi/compare/v21.5.1...v21.5.2) (2019-07-07)

### Bug Fixes

- load workbox from local url because of CSP ([9d43c82](https://github.com/iiroj/iiro.fi/commit/9d43c82))

### [21.5.1](https://github.com/iiroj/iiro.fi/compare/v21.5.0...v21.5.1) (2019-07-07)

### Bug Fixes

- add service worker scripts to CSP ([539ae2c](https://github.com/iiroj/iiro.fi/commit/539ae2c))

## [21.5.0](https://github.com/iiroj/iiro.fi/compare/v21.4.1...v21.5.0) (2019-07-07)

### Features

- add service worker ([7c20df2](https://github.com/iiroj/iiro.fi/commit/7c20df2))

### [21.4.1](https://github.com/iiroj/iiro.fi/compare/v21.4.0...v21.4.1) (2019-07-06)

## [21.4.0](https://github.com/iiroj/iiro.fi/compare/v21.3.0...v21.4.0) (2019-07-06)

### Bug Fixes

- re-enable live reload ([e363075](https://github.com/iiroj/iiro.fi/commit/e363075))

### Features

- use netlify dev for development ([ad4908e](https://github.com/iiroj/iiro.fi/commit/ad4908e))

## [21.3.0](https://github.com/iiroj/iiro.fi/compare/v21.2.6...v21.3.0) (2019-07-06)

### Features

- remove fontfaceobserver since google supports font-display ([b8f3a14](https://github.com/iiroj/iiro.fi/commit/b8f3a14))

### [21.2.6](https://github.com/iiroj/iiro.fi/compare/v21.2.5...v21.2.6) (2019-07-06)

### Build System

- add prerelease script for standard-version ([386fe4b](https://github.com/iiroj/iiro.fi/commit/386fe4b))
- use lint-staged ([50b0717](https://github.com/iiroj/iiro.fi/commit/50b0717))

### [21.2.5](https://github.com/iiroj/iiro.fi/compare/v21.2.4...v21.2.5) (2019-07-06)

### Bug Fixes

- upgrade packages and replace eslint plugins ([de6d52a](https://github.com/iiroj/iiro.fi/commit/de6d52a))

### [21.2.4](https://github.com/iiroj/iiro.fi/compare/v21.2.3...v21.2.4) (2019-06-01)

### [21.2.3](https://github.com/iiroj/iiro.fi/compare/v21.2.2...v21.2.3) (2019-05-13)

<a name="21.2.2"></a>

## [21.2.2](https://github.com/iiroj/iiro.fi/compare/v21.2.1...v21.2.2) (2019-05-01)

<a name="21.2.1"></a>

## [21.2.1](https://github.com/iiroj/iiro.fi/compare/v21.2.0...v21.2.1) (2019-05-01)

### Bug Fixes

- set cache-control correctly for html ([e32c22a](https://github.com/iiroj/iiro.fi/commit/e32c22a))

<a name="21.2.0"></a>

# [21.2.0](https://github.com/iiroj/iiro.fi/compare/v21.1.9...v21.2.0) (2019-05-01)

### Features

- deploy to Netlify ([96f2e29](https://github.com/iiroj/iiro.fi/commit/96f2e29))

<a name="21.1.9"></a>

## [21.1.9](https://github.com/iiroj/iiro.fi/compare/v21.1.8...v21.1.9) (2019-04-28)

<a name="21.1.8"></a>

## [21.1.8](https://github.com/iiroj/iiro.fi/compare/v21.1.7...v21.1.8) (2019-04-25)

<a name="21.1.7"></a>

## [21.1.7](https://github.com/iiroj/iiro.fi/compare/v21.1.6...v21.1.7) (2019-04-23)

### Bug Fixes

- correct font classes ([cd7b37a](https://github.com/iiroj/iiro.fi/commit/cd7b37a))
- remove SW registration from client ([56ce3d7](https://github.com/iiroj/iiro.fi/commit/56ce3d7))

<a name="21.1.6"></a>

## [21.1.6](https://github.com/iiroj/iiro.fi/compare/v21.1.5...v21.1.6) (2019-04-23)

<a name="21.1.5"></a>

## [21.1.5](https://github.com/iiroj/iiro.fi/compare/v21.1.4...v21.1.5) (2019-04-23)

### Bug Fixes

- catch FontFaceObserver errors ([9008f64](https://github.com/iiroj/iiro.fi/commit/9008f64))
- do not cache Google Fonts for now ([893a331](https://github.com/iiroj/iiro.fi/commit/893a331))

<a name="21.1.4"></a>

## [21.1.4](https://github.com/iiroj/iiro.fi/compare/v21.1.3...v21.1.4) (2019-04-23)

### Bug Fixes

- appended Google Fonts link has crossorigin ([ce62928](https://github.com/iiroj/iiro.fi/commit/ce62928))

<a name="21.1.3"></a>

## [21.1.3](https://github.com/iiroj/iiro.fi/compare/v21.1.2...v21.1.3) (2019-04-23)

### Bug Fixes

- also upload workbox ([406aa03](https://github.com/iiroj/iiro.fi/commit/406aa03))

<a name="21.1.2"></a>

## [21.1.2](https://github.com/iiroj/iiro.fi/compare/v21.1.1...v21.1.2) (2019-04-23)

### Bug Fixes

- use local workbox ([e285a82](https://github.com/iiroj/iiro.fi/commit/e285a82))

<a name="21.1.1"></a>

## [21.1.1](https://github.com/iiroj/iiro.fi/compare/v21.1.0...v21.1.1) (2019-04-22)

### Bug Fixes

- deploy sw.js ([2e9cb98](https://github.com/iiroj/iiro.fi/commit/2e9cb98))

<a name="21.1.0"></a>

# [21.1.0](https://github.com/iiroj/iiro.fi/compare/v21.0.4...v21.1.0) (2019-04-22)

### Bug Fixes

- correct css ([161da42](https://github.com/iiroj/iiro.fi/commit/161da42))

### Features

- add data-from-sw to precached html ([99f9c87](https://github.com/iiroj/iiro.fi/commit/99f9c87))
- add ServiceWorker with workbox precaching ([c7e7e6d](https://github.com/iiroj/iiro.fi/commit/c7e7e6d))

<a name="21.0.4"></a>

## [21.0.4](https://github.com/iiroj/iiro.fi/compare/v21.0.3...v21.0.4) (2019-04-22)

### Bug Fixes

- update deploy script for static assets ([5b8d4b7](https://github.com/iiroj/iiro.fi/commit/5b8d4b7))

<a name="21.0.3"></a>

## [21.0.3](https://github.com/iiroj/iiro.fi/compare/v21.0.2...v21.0.3) (2019-04-22)

### Bug Fixes

- append Google Fonts link to head ([cb110fc](https://github.com/iiroj/iiro.fi/commit/cb110fc))

<a name="21.0.2"></a>

## [21.0.2](https://github.com/iiroj/iiro.fi/compare/v21.0.1...v21.0.2) (2019-04-22)

### Bug Fixes

- add missing closing quote ([47dacc4](https://github.com/iiroj/iiro.fi/commit/47dacc4))

<a name="21.0.1"></a>

## [21.0.1](https://github.com/iiroj/iiro.fi/compare/v21.0.0...v21.0.1) (2019-04-22)

### Bug Fixes

- add Google Fonts to style-src ([49869cd](https://github.com/iiroj/iiro.fi/commit/49869cd))

<a name="21.0.0"></a>

# [21.0.0](https://github.com/iiroj/iiro.fi/compare/v20.2.3...v21.0.0) (2019-04-22)

### Features

- create fully static site without client-side React ([84643e3](https://github.com/iiroj/iiro.fi/commit/84643e3))

### BREAKING CHANGES

- Major version bump is warranted

## [20.2.3](https://github.com/iiroj/iiro.fi/compare/v20.2.2...v20.2.3) (2019-04-20)

## [20.2.2](https://github.com/iiroj/iiro.fi/compare/v20.2.1...v20.2.2) (2019-04-20)

## [20.2.1](https://github.com/iiroj/iiro.fi/compare/v20.2.0...v20.2.1) (2019-04-20)

# [20.2.0](https://github.com/iiroj/iiro.fi/compare/v20.1.0...v20.2.0) (2019-04-13)

### Features

- add security headers via Lamda@Edge ([31c2a01](https://github.com/iiroj/iiro.fi/commit/31c2a01))

# [20.1.0](https://github.com/iiroj/iiro.fi/compare/v20.0.9...v20.1.0) (2019-04-13)

### Features

- add Fathom analytics ([5326dd6](https://github.com/iiroj/iiro.fi/commit/5326dd6))

## [20.0.9](https://github.com/iiroj/iiro.fi/compare/v20.0.8...v20.0.9) (2019-04-13)

## [20.0.8](https://github.com/iiroj/iiro.fi/compare/v20.0.7...v20.0.8) (2019-04-08)

## [20.0.7](https://github.com/iiroj/iiro.fi/compare/v20.0.6...v20.0.7) (2019-04-07)

## [20.0.6](https://github.com/iiroj/iiro.fi/compare/v20.0.5...v20.0.6) (2019-04-07)

## [20.0.5](https://github.com/iiroj/iiro.fi/compare/v20.0.4...v20.0.5) (2019-04-07)

## [20.0.4](https://github.com/iiroj/iiro.fi/compare/v20.0.3...v20.0.4) (2019-04-07)

## [20.0.3](https://github.com/iiroj/iiro.fi/compare/v20.0.2...v20.0.3) (2019-04-04)

### Bug Fixes

- get meta description from first employment ([e300994](https://github.com/iiroj/iiro.fi/commit/e300994))

## [20.0.2](https://github.com/iiroj/iiro.fi/compare/v20.0.1...v20.0.2) (2019-04-02)

## [20.0.1](https://github.com/iiroj/iiro.fi/compare/v20.0.0...v20.0.1) (2019-04-02)

# [20.0.0](https://github.com/iiroj/iiro.fi/compare/v19.1.2...v20.0.0) (2019-04-01)

### Bug Fixes

- correct case ([04d2726](https://github.com/iiroj/iiro.fi/commit/04d2726))
- remove pre-push hook since it prevented push ([06488f6](https://github.com/iiroj/iiro.fi/commit/06488f6))

### Features

- clear out everything to start fresh with gatsby ([4ac9bca](https://github.com/iiroj/iiro.fi/commit/4ac9bca))

### BREAKING CHANGES

- Major version bump because of new design and framework change

## [19.1.2](https://github.com/iiroj/iiro.fi/compare/v19.1.1...v19.1.2) (2019-03-27)

## [19.1.1](https://github.com/iiroj/iiro.fi/compare/v19.1.0...v19.1.1) (2019-03-26)

# [19.1.0](https://github.com/iiroj/iiro.fi/compare/v19.0.1...v19.1.0) (2019-03-26)

### Features

- add .browserslistrc ([17b68f3](https://github.com/iiroj/iiro.fi/commit/17b68f3))

## [19.0.1](https://github.com/iiroj/iiro.fi/compare/v19.0.0...v19.0.1) (2019-03-26)

### Bug Fixes

- add core-js as a dependency ([d1f7334](https://github.com/iiroj/iiro.fi/commit/d1f7334))

# [19.0.0](https://github.com/iiroj/iiro.fi/compare/v18.5.0...v19.0.0) (2019-03-26)

### Bug Fixes

- use transparent images ([418d1fb](https://github.com/iiroj/iiro.fi/commit/418d1fb))

### chore

- remove polyfills ([99558a1](https://github.com/iiroj/iiro.fi/commit/99558a1))

### BREAKING CHANGES

- No longer supports IE 11, but whatever

# [18.5.0](https://github.com/iiroj/iiro.fi/compare/v18.4.13...v18.5.0) (2019-03-26)

### Features

- add support for dark color scheme ([113fa90](https://github.com/iiroj/iiro.fi/commit/113fa90))

## [18.4.13](https://github.com/iiroj/iiro.fi/compare/v18.4.12...v18.4.13) (2019-03-07)

## [18.4.12](https://github.com/iiroj/iiro.fi/compare/v18.4.11...v18.4.12) (2019-03-02)

## [18.4.11](https://github.com/iiroj/iiro.fi/compare/v18.4.10...v18.4.11) (2019-03-02)

## [18.4.10](https://github.com/iiroj/iiro.fi/compare/v18.4.9...v18.4.10) (2019-03-02)

## [18.4.9](https://github.com/iiroj/iiro.fi/compare/v18.4.8...v18.4.9) (2019-03-02)

## [18.4.8](https://github.com/iiroj/iiro.fi/compare/v18.4.7...v18.4.8) (2019-03-02)

## [18.4.7](https://github.com/iiroj/iiro.fi/compare/v18.4.6...v18.4.7) (2019-02-22)

### Bug Fixes

- use proper key for RouterContainer ([d1df7c9](https://github.com/iiroj/iiro.fi/commit/d1df7c9))

<a name="18.4.2"></a>

## [18.4.2](https://github.com/iiroj/iiro.fi/compare/v18.4.1...v18.4.2) (2019-02-10)

<a name="18.4.1"></a>

## [18.4.1](https://github.com/iiroj/iiro.fi/compare/v18.4.0...v18.4.1) (2019-02-09)

<a name="18.4.0"></a>

# [18.4.0](https://github.com/iiroj/iiro.fi/compare/v18.3.2...v18.4.0) (2019-02-09)

### Features

- generate better script tags from loadable ([bbc36e9](https://github.com/iiroj/iiro.fi/commit/bbc36e9))

<a name="18.3.2"></a>

## [18.3.2](https://github.com/iiroj/iiro.fi/compare/v18.3.1...v18.3.2) (2019-02-05)

<a name="18.3.1"></a>

## [18.3.1](https://github.com/iiroj/iiro.fi/compare/v18.3.0...v18.3.1) (2019-02-05)

<a name="18.3.0"></a>

# [18.3.0](https://github.com/iiroj/iiro.fi/compare/v18.2.21...v18.3.0) (2019-02-03)

### Features

- replace react-universal-component with [@loadable](https://github.com/loadable)/component ([2e1a9c7](https://github.com/iiroj/iiro.fi/commit/2e1a9c7))

<a name="18.2.21"></a>

## [18.2.21](https://github.com/iiroj/iiro.fi/compare/v18.2.20...v18.2.21) (2019-01-25)

<a name="18.2.20"></a>

## [18.2.20](https://github.com/iiroj/iiro.fi/compare/v18.2.19...v18.2.20) (2019-01-24)

<a name="18.2.19"></a>

## [18.2.19](https://github.com/iiroj/iiro.fi/compare/v18.2.18...v18.2.19) (2019-01-24)

<a name="18.2.18"></a>

## [18.2.18](https://github.com/iiroj/iiro.fi/compare/v18.2.17...v18.2.18) (2019-01-19)

### Bug Fixes

- remove unused import ([5e57417](https://github.com/iiroj/iiro.fi/commit/5e57417))

<a name="18.2.17"></a>

## [18.2.17](https://github.com/iiroj/iiro.fi/compare/v18.2.16...v18.2.17) (2019-01-17)

### Bug Fixes

- remove non-working link ([76e3704](https://github.com/iiroj/iiro.fi/commit/76e3704))

<a name="18.2.16"></a>

## [18.2.16](https://github.com/iiroj/iiro.fi/compare/v18.2.15...v18.2.16) (2019-01-13)

<a name="18.2.15"></a>

## [18.2.15](https://github.com/iiroj/iiro.fi/compare/v18.2.14...v18.2.15) (2019-01-13)

<a name="18.2.14"></a>

## [18.2.14](https://github.com/iiroj/iiro.fi/compare/v18.2.13...v18.2.14) (2019-01-13)

<a name="18.2.13"></a>

## [18.2.13](https://github.com/iiroj/iiro.fi/compare/v18.2.12...v18.2.13) (2019-01-13)

<a name="18.2.12"></a>

## [18.2.12](https://github.com/iiroj/iiro.fi/compare/v18.2.11...v18.2.12) (2019-01-13)

<a name="18.2.11"></a>

## [18.2.11](https://github.com/iiroj/iiro.fi/compare/v18.2.10...v18.2.11) (2019-01-13)

<a name="18.2.10"></a>

## [18.2.10](https://github.com/iiroj/iiro.fi/compare/v18.2.9...v18.2.10) (2019-01-13)

<a name="18.2.9"></a>

## [18.2.9](https://github.com/iiroj/iiro.fi/compare/v18.2.8...v18.2.9) (2019-01-13)

<a name="18.2.8"></a>

## [18.2.8](https://github.com/iiroj/iiro.fi/compare/v18.2.7...v18.2.8) (2019-01-13)

<a name="18.2.7"></a>

## [18.2.7](https://github.com/iiroj/iiro.fi/compare/v18.2.6...v18.2.7) (2019-01-13)

<a name="18.2.6"></a>

## [18.2.6](https://github.com/iiroj/iiro.fi/compare/v18.2.5...v18.2.6) (2019-01-10)

<a name="18.2.5"></a>

## [18.2.5](https://github.com/iiroj/iiro.fi/compare/v18.2.4...v18.2.5) (2019-01-09)

<a name="18.2.4"></a>

## [18.2.4](https://gitlab.com/iiroj/iiro.fi/compare/v18.2.3...v18.2.4) (2019-01-09)

<a name="18.2.3"></a>

## [18.2.3](https://gitlab.com/iiroj/iiro.fi/compare/v18.2.2...v18.2.3) (2019-01-06)

### Bug Fixes

- removing too much code broke sticky ([eb0c1ae](https://gitlab.com/iiroj/iiro.fi/commit/eb0c1ae))

<a name="18.2.2"></a>

## [18.2.2](https://gitlab.com/iiroj/iiro.fi/compare/v18.2.1...v18.2.2) (2019-01-06)

### Bug Fixes

- properly use smooth scroll ([a77da3c](https://gitlab.com/iiroj/iiro.fi/commit/a77da3c))

<a name="18.2.1"></a>

## [18.2.1](https://gitlab.com/iiroj/iiro.fi/compare/v18.2.0...v18.2.1) (2019-01-06)

### Bug Fixes

- scroll restoration ([2fab35a](https://gitlab.com/iiroj/iiro.fi/commit/2fab35a))

<a name="18.2.0"></a>

# [18.2.0](https://gitlab.com/iiroj/iiro.fi/compare/v18.1.0...v18.2.0) (2018-12-28)

### Features

- use only history instead of react-router ([a45fc01](https://gitlab.com/iiroj/iiro.fi/commit/a45fc01))

<a name="18.1.0"></a>

# [18.1.0](https://gitlab.com/iiroj/iiro.fi/compare/v18.0.1...v18.1.0) (2018-12-28)

### Features

- use babel-preset-minify again ([7295260](https://gitlab.com/iiroj/iiro.fi/commit/7295260))

<a name="18.0.1"></a>

## [18.0.1](https://gitlab.com/iiroj/iiro.fi/compare/v18.0.0...v18.0.1) (2018-12-28)

### Bug Fixes

- consistently show transitions for preloaded pages ([ef469f5](https://gitlab.com/iiroj/iiro.fi/commit/ef469f5))

<a name="18.0.0"></a>

# [18.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v17.4.0...v18.0.0) (2018-12-28)

### Bug Fixes

- Aside doesn’t need to be posed ([abcab97](https://gitlab.com/iiroj/iiro.fi/commit/abcab97))
- more fixes to initial poses ([27a6302](https://gitlab.com/iiroj/iiro.fi/commit/27a6302))
- move case-sensitive file ([5437e77](https://gitlab.com/iiroj/iiro.fi/commit/5437e77))
- remaining fixes to animations ([1912ba0](https://gitlab.com/iiroj/iiro.fi/commit/1912ba0))
- use terser since babel-minify breaks build ([2204cab](https://gitlab.com/iiroj/iiro.fi/commit/2204cab))
- workaround for bug with popmotion’s initial pose ([7ec5e2e](https://gitlab.com/iiroj/iiro.fi/commit/7ec5e2e))
- workaround for keyframes not working inside object styles ([7d493f4](https://gitlab.com/iiroj/iiro.fi/commit/7d493f4))

### Features

- add more react-pose ([5ac43f5](https://gitlab.com/iiroj/iiro.fi/commit/5ac43f5))
- add react-pose to Portfolio’s header section ([e5d3c70](https://gitlab.com/iiroj/iiro.fi/commit/e5d3c70))
- add route transitions ([c0d85a5](https://gitlab.com/iiroj/iiro.fi/commit/c0d85a5))
- use loadable-components ([f845f71](https://gitlab.com/iiroj/iiro.fi/commit/f845f71))
- use styled-components ([9ccc29a](https://gitlab.com/iiroj/iiro.fi/commit/9ccc29a))

### BREAKING CHANGES

- Emotion v10 no longer seems cool with its own jsx pragma

<a name="17.4.0"></a>

# [17.4.0](https://gitlab.com/iiroj/iiro.fi/compare/v17.3.4...v17.4.0) (2018-12-23)

### Features

- use [@emotion](https://gitlab.com/emotion)/babel-preset-css-prop ([ec304ac](https://gitlab.com/iiroj/iiro.fi/commit/ec304ac))

<a name="17.3.4"></a>

## [17.3.4](https://gitlab.com/iiroj/iiro.fi/compare/v17.3.3...v17.3.4) (2018-12-23)

<a name="17.3.3"></a>

## [17.3.3](https://gitlab.com/iiroj/iiro.fi/compare/v17.3.2...v17.3.3) (2018-12-21)

<a name="17.3.2"></a>

## [17.3.2](https://gitlab.com/iiroj/iiro.fi/compare/v17.3.1...v17.3.2) (2018-12-20)

<a name="17.3.1"></a>

## [17.3.1](https://gitlab.com/iiroj/iiro.fi/compare/v17.3.0...v17.3.1) (2018-12-09)

<a name="17.3.0"></a>

# [17.3.0](https://gitlab.com/iiroj/iiro.fi/compare/v17.2.0...v17.3.0) (2018-12-09)

### Features

- create Netlify \_headers file programmatically ([6d360f8](https://gitlab.com/iiroj/iiro.fi/commit/6d360f8))

<a name="17.2.0"></a>

# [17.2.0](https://gitlab.com/iiroj/iiro.fi/compare/v17.1.1...v17.2.0) (2018-12-09)

### Features

- add headers for Netlify ([c30952a](https://gitlab.com/iiroj/iiro.fi/commit/c30952a))

<a name="17.1.1"></a>

## [17.1.1](https://gitlab.com/iiroj/iiro.fi/compare/v17.1.0...v17.1.1) (2018-12-08)

### Bug Fixes

- typo ([2324266](https://gitlab.com/iiroj/iiro.fi/commit/2324266))

<a name="17.1.0"></a>

# [17.1.0](https://gitlab.com/iiroj/iiro.fi/compare/v17.0.1...v17.1.0) (2018-12-08)

### Features

- use Netlify again and include Lambda in repo ([95d68da](https://gitlab.com/iiroj/iiro.fi/commit/95d68da))

<a name="17.0.1"></a>

## [17.0.1](https://gitlab.com/iiroj/iiro.fi/compare/v17.0.0...v17.0.1) (2018-12-05)

<a name="17.0.0"></a>

# [17.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v16.1.6...v17.0.0) (2018-12-05)

### Features

- refactor for [@emotion](https://gitlab.com/emotion)/core 10 ([87c363f](https://gitlab.com/iiroj/iiro.fi/commit/87c363f))

### BREAKING CHANGES

- This commit has so many changes a major bump is in order

<a name="16.1.6"></a>

## [16.1.6](https://gitlab.com/iiroj/iiro.fi/compare/v16.1.5...v16.1.6) (2018-12-05)

<a name="16.1.5"></a>

## [16.1.5](https://gitlab.com/iiroj/iiro.fi/compare/v16.1.4...v16.1.5) (2018-11-26)

<a name="16.1.4"></a>

## [16.1.4](https://gitlab.com/iiroj/iiro.fi/compare/v16.1.3...v16.1.4) (2018-11-26)

### Bug Fixes

- Disable prettier because things ([cb16052](https://gitlab.com/iiroj/iiro.fi/commit/cb16052))

<a name="16.1.3"></a>

## [16.1.3](https://gitlab.com/iiroj/iiro.fi/compare/v16.1.2...v16.1.3) (2018-11-25)

<a name="16.1.2"></a>

## [16.1.2](https://gitlab.com/iiroj/iiro.fi/compare/v16.1.1...v16.1.2) (2018-11-15)

<a name="16.1.1"></a>

## [16.1.1](https://gitlab.com/iiroj/iiro.fi/compare/v16.1.0...v16.1.1) (2018-11-10)

### Bug Fixes

- run eslint due to prettier updates ([c9af735](https://gitlab.com/iiroj/iiro.fi/commit/c9af735))

<a name="16.1.0"></a>

# [16.1.0](https://gitlab.com/iiroj/iiro.fi/compare/v16.0.6...v16.1.0) (2018-11-10)

### Features

- use react-helmet-async ([96817cd](https://gitlab.com/iiroj/iiro.fi/commit/96817cd))

<a name="16.0.6"></a>

## [16.0.6](https://gitlab.com/iiroj/iiro.fi/compare/v16.0.5...v16.0.6) (2018-11-06)

<a name="16.0.5"></a>

## [16.0.5](https://gitlab.com/iiroj/iiro.fi/compare/v16.0.4...v16.0.5) (2018-11-03)

<a name="16.0.4"></a>

## [16.0.4](https://gitlab.com/iiroj/iiro.fi/compare/v16.0.3...v16.0.4) (2018-10-29)

<a name="16.0.3"></a>

## [16.0.3](https://gitlab.com/iiroj/iiro.fi/compare/v16.0.2...v16.0.3) (2018-10-28)

<a name="16.0.2"></a>

## [16.0.2](https://gitlab.com/iiroj/iiro.fi/compare/v16.0.1...v16.0.2) (2018-10-24)

<a name="16.0.1"></a>

## [16.0.1](https://gitlab.com/iiroj/iiro.fi/compare/v16.0.0...v16.0.1) (2018-10-22)

<a name="16.0.0"></a>

# [16.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.8...v16.0.0) (2018-10-20)

### Code Refactoring

- remove lambda function from repo ([24c676e](https://gitlab.com/iiroj/iiro.fi/commit/24c676e))

### BREAKING CHANGES

- The lambda function has been moved to a separate repo for easier development and release to AWS

<a name="15.8.8"></a>

## [15.8.8](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.7...v15.8.8) (2018-10-20)

<a name="15.8.7"></a>

## [15.8.7](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.6...v15.8.7) (2018-10-20)

<a name="15.8.6"></a>

## [15.8.6](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.5...v15.8.6) (2018-10-20)

### Bug Fixes

- **telegram:** parse text body ([1e7e4dc](https://gitlab.com/iiroj/iiro.fi/commit/1e7e4dc))

<a name="15.8.5"></a>

## [15.8.5](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.4...v15.8.5) (2018-10-20)

<a name="15.8.4"></a>

## [15.8.4](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.3...v15.8.4) (2018-10-20)

### Bug Fixes

- remove built code from git ([7ee4abb](https://gitlab.com/iiroj/iiro.fi/commit/7ee4abb))

<a name="15.8.3"></a>

## [15.8.3](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.2...v15.8.3) (2018-10-20)

<a name="15.8.2"></a>

## [15.8.2](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.1...v15.8.2) (2018-10-18)

<a name="15.8.1"></a>

## [15.8.1](https://gitlab.com/iiroj/iiro.fi/compare/v15.8.0...v15.8.1) (2018-10-14)

<a name="15.8.0"></a>

# [15.8.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.7.0...v15.8.0) (2018-10-13)

### Features

- Use Terser instead of babel-minify ([99ed855](https://gitlab.com/iiroj/iiro.fi/commit/99ed855))

<a name="15.7.0"></a>

# [15.7.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.6.5...v15.7.0) (2018-10-13)

### Features

- Use babel-preset-minify instead of uglify-js ([a509362](https://gitlab.com/iiroj/iiro.fi/commit/a509362))

<a name="15.6.5"></a>

## [15.6.5](https://gitlab.com/iiroj/iiro.fi/compare/v15.6.4...v15.6.5) (2018-10-13)

### Bug Fixes

- MinChunkSizePlugin broke SSR ([116b11d](https://gitlab.com/iiroj/iiro.fi/commit/116b11d))

<a name="15.6.4"></a>

## [15.6.4](https://gitlab.com/iiroj/iiro.fi/compare/v15.6.3...v15.6.4) (2018-10-13)

### Bug Fixes

- Escape deploy message ([5a468c2](https://gitlab.com/iiroj/iiro.fi/commit/5a468c2))

<a name="15.6.3"></a>

## [15.6.3](https://gitlab.com/iiroj/iiro.fi/compare/v15.6.2...v15.6.3) (2018-10-13)

<a name="15.6.2"></a>

## [15.6.2](https://gitlab.com/iiroj/iiro.fi/compare/v15.6.1...v15.6.2) (2018-10-13)

<a name="15.6.1"></a>

## [15.6.1](https://gitlab.com/iiroj/iiro.fi/compare/v15.6.0...v15.6.1) (2018-10-13)

<a name="15.6.0"></a>

# [15.6.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.5.0...v15.6.0) (2018-10-13)

### Features

- Reduce chunk number with MinChunkSizePlugin ([10387c1](https://gitlab.com/iiroj/iiro.fi/commit/10387c1))

<a name="15.5.0"></a>

# [15.5.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.4.2...v15.5.0) (2018-10-02)

### Features

- Use hot-reloading with html-renderer-webpack-plugin ([2a917ec](https://gitlab.com/iiroj/iiro.fi/commit/2a917ec))

<a name="15.4.2"></a>

## [15.4.2](https://gitlab.com/iiroj/iiro.fi/compare/v15.4.1...v15.4.2) (2018-10-02)

<a name="15.4.1"></a>

## [15.4.1](https://gitlab.com/iiroj/iiro.fi/compare/v15.4.0...v15.4.1) (2018-10-01)

### Bug Fixes

- Fix typo ([eeac070](https://gitlab.com/iiroj/iiro.fi/commit/eeac070))

<a name="15.4.0"></a>

# [15.4.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.3.0...v15.4.0) (2018-10-01)

### Bug Fixes

- Fix webpack-dev-server handling .html files ([7fc00d3](https://gitlab.com/iiroj/iiro.fi/commit/7fc00d3))
- Minor fixes ([3c3b2ee](https://gitlab.com/iiroj/iiro.fi/commit/3c3b2ee))

### Features

- Add CV page stub ([ec3841f](https://gitlab.com/iiroj/iiro.fi/commit/ec3841f))

<a name="15.3.0"></a>

# [15.3.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.2.0...v15.3.0) (2018-09-28)

### Features

- Add react-hot-loader to pages ([7eda644](https://gitlab.com/iiroj/iiro.fi/commit/7eda644))

<a name="15.2.0"></a>

# [15.2.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.1.1...v15.2.0) (2018-09-28)

### Bug Fixes

- Start chat only after visiting Root page ([e832234](https://gitlab.com/iiroj/iiro.fi/commit/e832234))

### Features

- Use React Context to move messages to global scope ([74ce529](https://gitlab.com/iiroj/iiro.fi/commit/74ce529))

<a name="15.1.1"></a>

## [15.1.1](https://gitlab.com/iiroj/iiro.fi/compare/v15.1.0...v15.1.1) (2018-09-23)

<a name="15.1.0"></a>

# [15.1.0](https://gitlab.com/iiroj/iiro.fi/compare/v15.0.1...v15.1.0) (2018-09-22)

### Features

- Add a react-pose loading animation ([dca1f3c](https://gitlab.com/iiroj/iiro.fi/commit/dca1f3c))
- Use only a single react-universal-component instance ([62fb96c](https://gitlab.com/iiroj/iiro.fi/commit/62fb96c))

<a name="15.0.1"></a>

## [15.0.1](https://gitlab.com/iiroj/iiro.fi/compare/v15.0.0...v15.0.1) (2018-09-22)

### Bug Fixes

- Commit file case-change to git ([79baf15](https://gitlab.com/iiroj/iiro.fi/commit/79baf15))

<a name="15.0.0"></a>

# [15.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v14.7.0...v15.0.0) (2018-09-22)

### Features

- Use custom framework ([fc01fc0](https://gitlab.com/iiroj/iiro.fi/commit/fc01fc0))

### BREAKING CHANGES

- Gatsby is no longer used, but “vanilla” webpack and react-router

<a name="14.7.0"></a>

# [14.7.0](https://gitlab.com/iiroj/iiro.fi/compare/v14.6.4...v14.7.0) (2018-09-21)

### Features

- Fix changelog and version reset by revert ([8b327b5](https://gitlab.com/iiroj/iiro.fi/commit/8b327b5))

<a name="14.6.4"></a>

## [14.6.4](https://gitlab.com/iiroj/iiro.fi/compare/v14.6.3...v14.6.4) (2018-09-19)

<a name="14.6.3"></a>

## [14.6.3](https://gitlab.com/iiroj/iiro.fi/compare/v14.6.2...v14.6.3) (2018-09-19)

### Bug Fixes

- Remove Webp images from queries ([abb8c30](https://gitlab.com/iiroj/iiro.fi/commit/abb8c30))

<a name="14.6.2"></a>

## [14.6.2](https://gitlab.com/iiroj/iiro.fi/compare/v14.6.1...v14.6.2) (2018-09-19)

### Bug Fixes

- Do Not Use Traced SVG as they are bugged in Safari ([6a6cb81](https://gitlab.com/iiroj/iiro.fi/commit/6a6cb81))

<a name="14.6.1"></a>

## [14.6.1](https://gitlab.com/iiroj/iiro.fi/compare/v14.6.0...v14.6.1) (2018-09-18)

<a name="14.6.0"></a>

# [14.6.0](https://gitlab.com/iiroj/iiro.fi/compare/v14.5.1...v14.6.0) (2018-09-18)

### Features

- Upgrade to GatsbyJS 2.0 and fix gatsby-image styles ([ac35167](https://gitlab.com/iiroj/iiro.fi/commit/ac35167))

<a name="14.5.1"></a>

## [14.5.1](https://gitlab.com/iiroj/iiro.fi/compare/v14.5.0...v14.5.1) (2018-09-17)

<a name="14.5.0"></a>

# [14.5.0](https://gitlab.com/iiroj/iiro.fi/compare/v14.4.1...v14.5.0) (2018-09-17)

### Bug Fixes

- Remove unused static images ([93797fa](https://gitlab.com/iiroj/iiro.fi/commit/93797fa))

### Features

- Portfolio Humble Bundle uses gatsby-image ([aa5aaff](https://gitlab.com/iiroj/iiro.fi/commit/aa5aaff))
- Portfolio Icons use gatsby-image ([5fb4e3c](https://gitlab.com/iiroj/iiro.fi/commit/5fb4e3c))
- Portfolio Verkkokauppa.com Delivery Estimates use gatsby-image ([f51f33b](https://gitlab.com/iiroj/iiro.fi/commit/f51f33b))
- Portfolio Verkkokauppa.com Header uses gatsby-image ([8a52d7b](https://gitlab.com/iiroj/iiro.fi/commit/8a52d7b))
- Portfolio Verkkokauppa.com Price Barometer uses gatsby-image ([af2816d](https://gitlab.com/iiroj/iiro.fi/commit/af2816d))
- Portfolio Verkkokauppa.com Self Pickup uses gatsby-image ([e204bc8](https://gitlab.com/iiroj/iiro.fi/commit/e204bc8))
- Remove prop-types ([b05d1e4](https://gitlab.com/iiroj/iiro.fi/commit/b05d1e4))
- Use gatsby-image for Avatar ([e567d24](https://gitlab.com/iiroj/iiro.fi/commit/e567d24))

<a name="14.4.1"></a>

## [14.4.1](https://gitlab.com/iiroj/iiro.fi/compare/v14.4.0...v14.4.1) (2018-09-17)

### Bug Fixes

- Fix Feature-Policy default 'none' ([c61731e](https://gitlab.com/iiroj/iiro.fi/commit/c61731e))

<a name="14.4.0"></a>

# [14.4.0](https://gitlab.com/iiroj/iiro.fi/compare/v14.3.0...v14.4.0) (2018-09-17)

### Features

- Add Feature-Policy: ‘none’ header ([4e3bca1](https://gitlab.com/iiroj/iiro.fi/commit/4e3bca1))

<a name="14.3.0"></a>

# [14.3.0](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.17...v14.3.0) (2018-09-17)

### Features

- Remove image-specific stuff to allow Netlify optimization ([515fab0](https://gitlab.com/iiroj/iiro.fi/commit/515fab0))

<a name="14.2.17"></a>

## [14.2.17](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.16...v14.2.17) (2018-09-16)

<a name="14.2.16"></a>

## [14.2.16](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.15...v14.2.16) (2018-09-16)

<a name="14.2.15"></a>

## [14.2.15](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.14...v14.2.15) (2018-09-16)

<a name="14.2.14"></a>

## [14.2.14](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.13...v14.2.14) (2018-09-15)

<a name="14.2.13"></a>

## [14.2.13](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.12...v14.2.13) (2018-09-15)

<a name="14.2.12"></a>

## [14.2.12](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.11...v14.2.12) (2018-09-15)

<a name="14.2.11"></a>

## [14.2.11](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.10...v14.2.11) (2018-09-15)

<a name="14.2.10"></a>

## [14.2.10](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.9...v14.2.10) (2018-09-12)

<a name="14.2.9"></a>

## [14.2.9](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.8...v14.2.9) (2018-09-09)

<a name="14.2.8"></a>

## [14.2.8](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.7...v14.2.8) (2018-09-02)

<a name="14.2.7"></a>

## [14.2.7](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.6...v14.2.7) (2018-09-01)

### Bug Fixes

- Fix noscript styles ([557c8dd](https://gitlab.com/iiroj/iiro.fi/commit/557c8dd))

<a name="14.2.6"></a>

## [14.2.6](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.5...v14.2.6) (2018-08-29)

<a name="14.2.5"></a>

## [14.2.5](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.4...v14.2.5) (2018-08-29)

### Bug Fixes

- Native dom element uses ref, not innerRef ([510a01b](https://gitlab.com/iiroj/iiro.fi/commit/510a01b))

<a name="14.2.4"></a>

## [14.2.4](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.3...v14.2.4) (2018-08-29)

<a name="14.2.3"></a>

## [14.2.3](https://gitlab.com/iiroj/iiro.fi/compare/v14.2.2...v14.2.3) (2018-08-29)

<a name="14.2.2"></a>

## [14.2.2](https://gitlab.com/iiroj/iiro.fi/compare/v14.0.0...v14.2.2) (2018-08-29)

## Manually written:

<a name="14.0.0"></a>

## [14.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v13.0.0...v14.0.0) (2018-08-17)

### Features

- Front page is a chat interface ([62cecd4](https://gitlab.com/iiroj/iiro.fi/commit/62cecd4))

<a name="13.0.0"></a>

## [13.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v.12.0.0...v13.0.0) (2018-08-07)

### Features

- Convert to GatsbyJS v2 ([e0c4f36](https://gitlab.com/iiroj/iiro.fi/commit/e0c4f36))

<a name="12.0.0"></a>

## [12.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v11.0.0...v.12.0.0) (2018-06-22)

### Features

- Rewrite site with home-grown tech ([27f122](https://gitlab.com/iiroj/iiro.fi/commit/27f122))

<a name="11.0.0"></a>

## [11.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v10.0.0...v11.0.0) (2018-05-18)

### Features

- Switch from styled-components to emotion ([ece0d6c](https://gitlab.com/iiroj/iiro.fi/commit/ece0d6c))

<a name="10.0.0"></a>

## [10.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v9.0.0...v10.0.0) (2018-03-31)

### Features

- Return to running in Netlify ([47ad0ac](https://gitlab.com/iiroj/iiro.fi/commit/47ad0ac))

<a name="9.0.0"></a>

## [9.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v8.0.0...v9.0.0) (2018-03-17)

### Features

- Run in Docker ([5131fe7](https://gitlab.com/iiroj/iiro.fi/commit/5131fe7))

<a name="8.0.0"></a>

## [8.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v7.0.0...v8.0.0) (2018-01-16)

### Features

- Merge branch 'nextjs' ([27ba8fd](https://gitlab.com/iiroj/iiro.fi/commit/27ba8fd))

<a name="7.0.0"></a>

## [7.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v6.0.0...v7.0.0) (2017-10-08)

### Features

- Merge branch 'new-design' ([ee2471f](https://gitlab.com/iiroj/iiro.fi/commit/ee2471f))

<a name="6.0.0"></a>

## [6.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v5.0.0...v6.0.0) (2017-09-02)

### Features

- Run new prettier config on codebase ([6f783c0](https://gitlab.com/iiroj/iiro.fi/commit/6f783c0))

<a name="5.0.0"></a>

## [5.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v4.0.0...v5.0.0) (2017-08-26)

<a name="4.0.0"></a>

## [4.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v3.0.0...v4.0.0) (2017-07-12)

### Features

- Run prettier on entire project ([5d2b6cc](https://gitlab.com/iiroj/iiro.fi/commit/5d2b6cc))

<a name="3.0.0"></a>

## [3.0.0](https://gitlab.com/iiroj/iiro.fi/compare/v2.0.0...v3.0.0) (2017-05-31)

<a name="2.0.0"></a>

## [2.0.0](https://gitlab.com/iiroj/iiro.fi/compare/99c57c8...v2.0.0) (2017-04-30)

### Features

- Merge branch 'simplify' into 'master' ([9fe8e76](https://gitlab.com/iiroj/iiro.fi/commit/9fe8e76))
