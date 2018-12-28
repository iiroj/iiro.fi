import posed from "react-pose";
import styled from "styled-components";

const from = {
  opacity: 0
};

export default styled(
  posed.aside({
    from,
    enter: {
      opacity: 1
    },
    exit: from
  })
)({
  color: "hsl(0, 0%, 60%)",
  fontSize: "1.5em",
  padding: "4rem 0",
  textAlign: "center"
});
