import { TransitionPropertyProperty } from "csstype";

const timing = "ease-in-out";
const duration = 150;

export const transition = Object.assign(
  (...props: TransitionPropertyProperty[]) => ({
    transition: props
      .map((prop) => `${prop} ${duration}ms ${timing}`)
      .join(", "),
  }),
  { duration, timing }
);
