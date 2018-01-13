import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  max-width: 128rem;
  width: 100%;

  > * {
    grid-column: col / span 12;
  }
`;

export default Grid;
