import styled from "styled-components";
import { hiDPI } from "polished";

const Picture = styled.div`
  background-image: url("/static/picture.jpg");
  background-position: 55% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;

  ${hiDPI(1.5)} {
    background-image: url("/static/picture@2x.jpg");
  }

  ${hiDPI(2)} {
    background-image: url("/static/picture@3x.jpg");
  }
`;

export default Picture;
