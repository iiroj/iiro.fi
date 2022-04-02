module.exports = {
    branches: ['main'],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
            },
        ],
        '@semantic-release/changelog',
        [
            '@semantic-release/git',
            {
                assets: [],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
    repositoryUrl: process.env.GITHUB_ACTIONS ? 'https://github.com/iiroj/iiro.fi' : 'git@github.com:iiroj/iiro.fi.git',
}
