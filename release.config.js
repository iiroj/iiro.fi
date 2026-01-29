/** @type {import('semantic-release').Options} */
export default {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "prettier --write CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package-lock.json", "package.json"],
        message:
          // biome-ignore lint/suspicious/noTemplateCurlyInString: semantic-release template
          "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}\n\n[semantic-release]",
      },
    ],
  ],
  repositoryUrl: "ssh://git@codeberg.org/iiroj/iiro.fi.git",
};
