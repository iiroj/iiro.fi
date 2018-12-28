import styled from "styled-components";

export default styled.section({
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
