import { css } from "@emotion/core";

import { colors } from "./colors";

export const highlight = css({
  backgroundImage: `linear-gradient(to bottom, ${colors.actionable} 0%, ${colors.actionable} 100%)`,
  backgroundPosition: "0 0.8em",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%"
});
