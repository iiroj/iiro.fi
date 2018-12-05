import { css } from "@emotion/core";

export default css({
  display: "flex",
  flexWrap: "wrap",
  margin: "2rem 0",

  "> div": {
    flex: "1 1 100mm"
  },

  ul: {
    "li + li": {
      marginTop: "1rem"
    }
  }
});
