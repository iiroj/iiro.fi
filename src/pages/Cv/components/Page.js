import posed from "react-pose";
import styled from "styled-components";

import withFixedEnterPose from "../../../hoc/withFixedEnterPose";

const Page = posed(
  styled.div({
    backgroundColor: "white",
    fontSize: 14,
    lineHeight: "24px",
    margin: "0 auto",
    maxWidth: "210mm",
    padding: "2rem",
    position: "relative",

    "& + &": {
      marginTop: "2rem"
    },

    "&::before": {
      boxShadow: "0 1rem 30rem rgba(0, 0, 0, 0.2)",
      content: '""',
      display: "block",
      height: "100%",
      left: 0,
      top: 0,
      width: "100%",
      position: "absolute",
      zIndex: -1
    },

    h2: {
      flex: "0 1 50mm",
      fontSize: 16,
      lineHeight: "24px",
      marginBottom: "2rem"
    },

    h3: {
      fontSize: 16,
      lineHeight: "24px",
      marginBottom: "1rem"
    },

    a: {
      backgroundImage: "none",
      boxShadow: "inset 0 -1px 0 hsl(0,0%,30%)"
    },

    "@media (min-width: calc(210mm + 7rem))": {
      height: "297mm",
      padding: "2rem 4rem"
    },

    "@media only print": {
      height: "100vh",
      margin: "0 !important",
      padding: "2rem 4rem 0 4rem",
      pageBreakAfter: "always",
      pageBreakBefore: "always",
      width: "100vw",

      "&::before": {
        display: "none"
      }
    }
  })
)({
  enter: { y: 0 },
  exit: { y: 128 }
});

export default withFixedEnterPose({ chunkName: "Cv" })(Page);
