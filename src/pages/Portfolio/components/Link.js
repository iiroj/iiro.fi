import styled from "styled-components";

export default styled.a({
  background: "white",
  borderRadius: 2,
  color: "hsl(0, 0%, 30%)",
  textShadow: "none",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  margin: "1rem 0",
  display: "inline-block",
  lineHeight: "16px",
  padding: "12px 16px",
  textDecoration: "none",
  transition: "color 125ms ease-in, box-shadow 125ms ease-in",

  "&:hover": {
    color: "#2171cc",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2)"
  },

  "&:active": {
    color: "#333333",
    boxShadow:
      "0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)"
  }
});
