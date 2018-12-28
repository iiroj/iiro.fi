import React from "react";

const isClientSide = typeof window !== "undefined";

export default ({
  chunkName,
  initialPose = "exit",
  pose = "enter"
}) => Component =>
  function withFixedEnterPose(props) {
    const requiredChunks = isClientSide
      ? window.__LOADABLE_REQUIRED_CHUNKS__ || []
      : [];

    const isRequired = requiredChunks.some(chunk => chunk.includes(chunkName));

    const fixedInitialPose =
      isClientSide && !isRequired ? initialPose : undefined;

    const fixedPose = isRequired || !isClientSide ? undefined : pose;

    return (
      <Component {...props} initialPose={fixedInitialPose} pose={fixedPose} />
    );
  };
