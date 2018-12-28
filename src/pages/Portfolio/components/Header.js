import posed from "react-pose";
import styled from "styled-components";

const from = {
  opacity: 0,
  y: "-200%"
};

export default styled(
  posed.header({
    from,
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        easing: "easeOut"
      }
    },
    exit: from
  })
)({
  backgroundColor: "white",
  fontSize: "1.5rem",
  padding: "2rem 3rem 6rem",
  textAlign: "center"
});
