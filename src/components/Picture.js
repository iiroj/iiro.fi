import styled from "styled-components";

export default styled.img.attrs({
  alt: "Iiro Jäppinen",
  src: "/picture.jpg"
})({
  flex: "0 0 4rem",
  height: "4rem",
  objectFit: "cover",
  position: "relative",
  width: "4rem"
});
