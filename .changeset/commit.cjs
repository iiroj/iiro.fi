const getAddMessage = async (changeset, options) => {
  const skipCI = options?.skipCI === "add" || options?.skipCI === true;
  return `docs(changeset): ${changeset.summary}

[skip ci]
`;
};

const getVersionMessage = async (releasePlan, options) => {
  const skipCI = options?.skipCI === "version" || options?.skipCI === true;

  const publishableReleases = releasePlan.releases.filter(
    (release) => release.type !== "none",
  );

  const numPackagesReleased = publishableReleases.length;

  const releaseLines = publishableReleases
    .map((release) => `  ${release.name}@${release.newVersion}`)
    .join("\n");

  return `chore(release): version bump

${releaseLines}

[skip ci]
`;
};

module.exports = {
  getAddMessage,
  getVersionMessage,
};
