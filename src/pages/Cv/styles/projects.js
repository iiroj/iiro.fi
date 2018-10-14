import { css } from "emotion";

import section from "./section";

export default css(section, {
  h3: {
    borderBottom: "1px solid hsl(0,0%,30%)",
    fontWeight: 600,
    marginBottom: "1rem"
  },

  p: {
    marginBottom: "1rem"
  },

  ul: {
    "li + li": {
      marginTop: "2rem"
    }
  }
});
