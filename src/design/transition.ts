import type { Property } from "csstype";

const timing = "ease-in-out";
const duration = 150;

export const transition = Object.assign(
  (...props: Property.TransitionProperty[]) => ({
    transition: props
      .map((prop) => `${prop} ${duration}ms ${timing}`)
      .join(", "),
  }),
  { duration, timing }
);
