import styled from "styled-components";
import { hiDPI } from "polished";

const Picture = styled.div`
  background-image: url("/static/picture.jpg");
  background-position: 55% 50%;
  background-size: cover;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.16);
  position: relative;

  ${hiDPI(1.5)} {
    background-image: url("/static/picture@2x.jpg");
  }

  ${hiDPI(2)} {
    background-image: url("/static/picture@3x.jpg");
  }
`;

export default Picture;
