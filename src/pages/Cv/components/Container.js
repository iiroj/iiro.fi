import styled from "styled-components";

import Back from "../../../components/Back";

export default styled.main({
  padding: "6.5rem 0 4rem 0",

  "@page": {
    margin: 0
  },

  "@media (min-width: calc(210mm + 7rem))": {
    padding: "2rem 3.5rem"
  },

  "@media only print": {
    padding: "0",

    [Back]: {
      display: "none"
    }
  }
});